<?php
/* =====================================================================
    SNBP Rationalization — v3.3.1 (Supabase REST Views, WP-ready)
    Single PHP file | Tailwind + Chart.js | Read-only to Supabase

    ▶ Disesuaikan dengan dokumentasi API:
      - Endpoints:
          /campuses?select=id,name,city
          /v_program_studi_lengkap?select=nama_prodi,nama_kampus,jenjang,nama_kelompok
          /v_prodi_mapel_final?select=nama_prodi,kampus,nama_kurikulum,nama_mapel,prioritas,is_override
      - Header:
          apikey + Authorization: Bearer <anon>
          (optional) Accept-Profile / Content-Profile untuk schema non-public

    ⚙️ Konfigurasi sebelum digunakan:
      - SUPA_URL:  https://<YOUR-PROJECT>.supabase.co
      - SUPA_KEY:  anon key (READ ONLY)
      - SUPA_SCHEMA: 'public' (ganti jika view ada di schema lain, mis. 'api')

    🔒 Keamanan:
      - Jalankan di SERVER (PHP). Jangan expose service_role ke browser.
      - Pastikan GRANT & RLS policy untuk SELECT pada view/tabel sumber.

    --------------------------------------------------------------------- */

// ============================ KONFIGURASI ============================
const SUPA_URL    = 'https://xhorsqwwkspcmqmjasef.supabase.co'; // ganti
const SUPA_KEY    = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhob3JzcXd3a3NwY21xbWphc2VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0NTY4MjksImV4cCI6MjA3MjAzMjgyOX0.gYCkDaYk7oEARChrPCgva9Ub_p_YVjyy3aAD7bfaFU8';// ganti (read-only)
const SUPA_SCHEMA = 'public';                              // ganti jika schema != public
const SUPA_TIMEOUT= 12; // detik
/* =====================================================================
    SNBP Rationalization — v4.0 (Raw Tables, Supabase REST, WP-ready)
    Single PHP file | Tailwind + Chart.js | Read-only to Supabase

    ▶ Menggunakan tabel asli (tanpa VIEW), sesuai schema yang diberikan:
      - campuses(id, name, city)
      - program_studi(id, nama_prodi, kampus_id, kelompok_id, jenjang, is_active)
      - kelompok_prodi(id, nama_kelompok)
      - kurikulum(id, nama_kurikulum, is_active)
      - prodi_mapel_override(prodi_id, mapel_id, kurikulum_id, prioritas, bobot_nilai, is_wajib)
      - kelompok_mapel_relevan(kelompok_id, mapel_id, kurikulum_id, prioritas, bobot_nilai)
      - mata_pelajaran(id, nama_mapel)

    ▶ Fitur:
      - Dropdown Kampus → Prodi (hanya prodi aktif)
      - Kelompok prodi, kota kampus
      - Rekomendasi mapel (override > default kelompok), hanya dari kurikulum aktif
      - Skor & visual sama seperti versi sebelumnya
      - Body error Supabase ditampilkan jika terjadi 4xx/5xx

    ⚙️ Konfigurasi:
      - SUPA_URL:   https://<REF>.supabase.co
      - SUPA_KEY:   anon key (READ ONLY)
      - SUPA_SCHEMA: 'public' (biarkan, sesuai schema kamu)

    🔒 Keamanan:
      - Jalankan di server (PHP). Jangan expose service_role ke browser.
      - Pastikan GRANT/USAGE & RLS SELECT untuk tabel-tabel di atas.

    --------------------------------------------------------------------- */

const MAPEL_DEFAULT = [
  'Saintek' => ['Matematika','Fisika','Kimia','Biologi'],
  'Soshum'  => ['Matematika','Geografi','Ekonomi','Sosiologi'],
  'Campuran'=> ['Matematika']
];

// ============================ HTTP (Supabase) ============================
function supa_get($path_with_query){
  $url = rtrim(SUPA_URL,'/').'/rest/v1/'.ltrim($path_with_query,'/');
  $headers = [
    'apikey: '.SUPA_KEY,
    'Authorization: Bearer '.SUPA_KEY,
    'Accept: application/json',
    'Content-Type: application/json',
  ];
  if (SUPA_SCHEMA && SUPA_SCHEMA !== 'public') {
    $headers[] = 'Accept-Profile: '.SUPA_SCHEMA;
    $headers[] = 'Content-Profile: '.SUPA_SCHEMA;
  }
  $ch = curl_init($url);
  curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER     => $headers,
    CURLOPT_TIMEOUT        => SUPA_TIMEOUT,
    CURLOPT_HEADER         => true,
  ]);
  $resp    = curl_exec($ch);
  $err     = curl_error($ch);
  $code    = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  $hdrSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
  curl_close($ch);
  $rawHeaders = substr($resp, 0, $hdrSize);
  $body       = substr($resp, $hdrSize);

  if ($err || $code >= 400) {
    return [ 'error' => ($err ?: "HTTP $code: ".trim($body)), 'data' => [] ];
  }
  $data = json_decode($body, true);
  if(!is_array($data)) $data = [];
  return [ 'error' => null, 'data' => $data ];
}

$_SUPA_CACHE = [];
function supa_cached($key,$fn){ global $_SUPA_CACHE; if(isset($_SUPA_CACHE[$key])) return $_SUPA_CACHE[$key]; $v=$fn(); $_SUPA_CACHE[$key]=$v; return $v; }

// ============================ UTIL & PENILAIAN ============================
function val($k,$d=''){ return isset($_POST[$k]) ? $_POST[$k] : $d; }
function h($s){ return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8'); }
function num($v,$d=0){ $x = is_numeric($v) ? floatval($v) : 0; if(is_nan($x)||is_infinite($x)) $x=0; return round($x,$d); }
function keep($names){ foreach($names as $n){ echo '<input type="hidden" name="'.h($n).'" value="'.h(val($n)).'">'; } }

const WEIGHTS   = ['rapor'=>0.50,'mapel'=>0.20,'sekolah'=>0.15,'alumni'=>0.10,'prestasi'=>0.05];
const LINEARITY = ['linear'=>100,'semi'=>60,'lintas'=>30];
const ALUMNI_BASE = ['0'=>40,'1-3'=>60,'4-10'=>70,'11-20'=>80,'20+'=>90];
const DU_MUL      = ['full'=>1.0,'sebagian'=>0.9,'mayoritas'=>0.8];

function raporScore($avg){ $v=max(60,min(100,floatval($avg))); return ($v-60)*2.5; }
function trendScore($t){ return $t==='naik'?8:($t==='stabil'?4:-2); }
function rankParScore($r){ if($r<=0)return 0; if($r==1)return 100; if($r==2)return 95; if($r<=5)return 90; if($r<=10)return 85; if($r<=20)return 75; return 65; }
function raporTotal($avg,$rank,$trend){ return .75*raporScore($avg)+.15*rankParScore($rank)+.10*trendScore($trend); }
function bucketScore($bucket){ $a=intval(explode('-', $bucket)[0]??901); $idx=max(0,min(9,intval(($a-1)/100))); $S=[95,92,90,88,86,84,82,78,74,70]; return $S[$idx]; }
function sekolahScore($bucket,$cityMatchBonus){ return .95*bucketScore($bucket)+.05*max(0,min(5,intval($cityMatchBonus)))*20; }
function alumniScore($bucket,$du){ $base=ALUMNI_BASE[$bucket]??60; $mul=DU_MUL[$du]??1.0; return $base*$mul; }
function prestasiSingle($t,$p,$rk,$rel){ if(!$t) return 0; $resmi=$p==='resmi';
  $base=$t==='kab'?($resmi?60:55):($t==='prov'?($resmi?75:70):($t==='nas'?($resmi?90:85):97));
  $mod=$rk==='1'?10:($rk==='2'?7:($rk==='3'?5:($rk==='harapan'?2:0)));
  $mul=$rel==='tinggi'?1:($rel==='sedang'?.85:.7); return max(0,min(100,($base+$mod)*$mul)); }
function prestasiTotal($a,$b,$c){ $arr=array_filter([$a,$b,$c],fn($v)=>$v>0); if(!$arr) return 0; rsort($arr); $top=array_slice($arr,0,min(2,count($arr))); return array_sum($top)/count($top); }
function city_bonus($schoolCity,$campusCity){
  if(!$schoolCity || !$campusCity) return 0;
  if(mb_strtolower(trim($schoolCity)) === mb_strtolower(trim($campusCity))) return 5;
  return 0;
}
// penalti "graceful" (tidak ada data stats dalam schema)
function ketatPenaltiGraceful(){ return 0; }

// ============================ AMBIL DATA MENGACU SCHEMA ============================
// 1) Master table pulls (dibatasi agar ringan; sesuaikan jika data besar)
$campRes = supa_cached('campuses', fn()=> supa_get('campuses?select=id,name,city&order=name.asc&limit=5000'));
$kelRes  = supa_cached('kelompok_prodi', fn()=> supa_get('kelompok_prodi?select=id,nama_kelompok&order=nama_kelompok.asc&limit=5000'));
$prodiRes= supa_cached('program_studi', fn()=> supa_get('program_studi?select=id,nama_prodi,jenjang,kam' . 'pus_id,kelompok_id,is_active&order=nama_prodi.asc&limit=50000'));
$mapelRes= supa_cached('mata_pelajaran', fn()=> supa_get('mata_pelajaran?select=id,nama_mapel&order=nama_mapel.asc&limit=5000'));
$kurRes  = supa_cached('kurikulum', fn()=> supa_get('kurikulum?select=id,nama_kurikulum,is_active&order=nama_kurikulum.asc&limit=100'));
$ovrRes  = supa_cached('prodi_mapel_override', fn()=> supa_get('prodi_mapel_override?select=prodi_id,mapel_id,kurikulum_id,prioritas,bobot_nilai,is_wajib&order=prioritas.asc&limit=200000'));
$kmrRes  = supa_cached('kelompok_mapel_relevan', fn()=> supa_get('kelompok_mapel_relevan?select=kelompok_id,mapel_id,kurikulum_id,prioritas,bobot_nilai&order=prioritas.asc&limit=200000'));

// build index
$CAMP_BY_ID = []; if(!$campRes['error']) foreach($campRes['data'] as $c){ $CAMP_BY_ID[$c['id']] = $c; }
$KEL_BY_ID  = []; if(!$kelRes['error'])  foreach($kelRes['data']  as $k){ $KEL_BY_ID[$k['id']] = $k; }
$MAPEL_BY_ID= []; if(!$mapelRes['error'])foreach($mapelRes['data']as $m){ $MAPEL_BY_ID[$m['id']] = $m; }
$AKTIF_KUR  = []; if(!$kurRes['error'])  foreach($kurRes['data']  as $k){ if(!isset($k['is_active']) || $k['is_active']===true) $AKTIF_KUR[$k['id']] = $k; }

// 2) Susun PTN→Prodi (pakai tabel langsung)
$PTN_PRODI = []; // [nama_kampus][nama_prodi] = ['kelompok'=>..., 'jenjang'=>..., 'city'=>..., 'prodi_id'=>..., 'kelompok_id'=>..., 'kampus_id'=>...]
if(!$campRes['error']){ foreach($campRes['data'] as $c){ $PTN_PRODI[$c['name']] = []; } }
if(!$prodiRes['error']){
  foreach($prodiRes['data'] as $p){
    if(isset($p['is_active']) && $p['is_active']===false) continue;
    $camp = $CAMP_BY_ID[$p['kampus_id']] ?? null;
    if(!$camp) continue;
    $kel  = $KEL_BY_ID[$p['kelompok_id']] ?? null;
    $PTN_PRODI[$camp['name']][$p['nama_prodi']] = [
      'kelompok'    => $kel['nama_kelompok'] ?? 'Saintek',
      'jenjang'     => $p['jenjang'] ?? '',
      'city'        => $camp['city'] ?? '',
      'prodi_id'    => $p['id'],
      'kelompok_id' => $p['kelompok_id'] ?? null,
      'kampus_id'   => $p['kampus_id']
    ];
  }
}

// 3) Index data rekomendasi mapel (override & default) → akan dipakai fungsi helper
$OVR_BY_PRODI = [];  // [prodi_id] => array of rows (only active kurikulum)
if(!$ovrRes['error']){
  foreach($ovrRes['data'] as $o){
    if(!isset($AKTIF_KUR[$o['kurikulum_id']])) continue; // hanya kurikulum aktif
    $OVR_BY_PRODI[$o['prodi_id']][] = $o;
  }
}
$KMR_BY_KEL = [];   // [kelompok_id] => array of rows (only active kurikulum)
if(!$kmrRes['error']){
  foreach($kmrRes['data'] as $d){
    if(!isset($AKTIF_KUR[$d['kurikulum_id']])) continue;
    $KMR_BY_KEL[$d['kelompok_id']][] = $d;
  }
}

// helper: ambil rekomendasi mapel untuk prodi tertentu
function get_rekom_mapel_for($prodi_id, $kelompok_id, $limit=5){
  global $OVR_BY_PRODI, $KMR_BY_KEL, $MAPEL_BY_ID, $AKTIF_KUR;
  $final = [];            // mapel_id => ['nama_mapel'=>..., 'prioritas'=>..., 'is_override'=>bool]
  $seq   = 0;

  // 1) Override prodi (menang atas default kelompok)
  if(isset($OVR_BY_PRODI[$prodi_id])){
    foreach($OVR_BY_PRODI[$prodi_id] as $o){
      $mid = $o['mapel_id']; $nm = $MAPEL_BY_ID[$mid]['nama_mapel'] ?? null;
      if(!$nm) continue;
      if(!isset($final[$mid]) || $final[$mid]['is_override']===false){
        $final[$mid] = ['nama_mapel'=>$nm, 'prioritas'=>intval($o['prioritas']), 'is_override'=>true];
      }
    }
  }

  // 2) Default kelompok (hanya mapel yang belum punya override)
  if(isset($KMR_BY_KEL[$kelompok_id])){
    foreach($KMR_BY_KEL[$kelompok_id] as $d){
      $mid = $d['mapel_id']; if(isset($final[$mid])) continue; // sudah di-override
      $nm = $MAPEL_BY_ID[$mid]['nama_mapel'] ?? null; if(!$nm) continue;
      $final[$mid] = ['nama_mapel'=>$nm, 'prioritas'=>intval($d['prioritas']), 'is_override'=>false];
    }
  }

  // sort by prioritas asc, override dulu
  $arr = array_values($final);
  usort($arr, function($a,$b){
    if($a['is_override'] !== $b['is_override']) return $a['is_override'] ? -1 : 1; // override dulu
    if($a['prioritas'] === $b['prioritas']) return strcmp($a['nama_mapel'],$b['nama_mapel']);
    return $a['prioritas'] <=> $b['prioritas'];
  });
  if($limit>0) $arr = array_slice($arr, 0, $limit);
  return $arr; // each: ['nama_mapel', 'prioritas', 'is_override']
}

// ============================ STATUS LANGKAH ============================
$step = isset($_POST['step']) ? (int)$_POST['step'] : 1;
?><!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Rasionalisasi SNBP</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>tailwind.config={theme:{extend:{colors:{brand:'#0ea5e9', card_light:'#f8fafc', text_dark:'#0f172a'},boxShadow:{subtle:'0 4px 12px rgba(0,0,0,.08)'}}}};</script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
  <style>
    body{background:#ffffff; color:#0f172a; font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}
    .card{background:#ffffff; border:1px solid #e2e8f0; box-shadow:0 4px 12px rgba(0,0,0,.08)}
    .chip{display:inline-flex;align-items:center;padding:.25rem .75rem;border-radius:9999px;border:1px solid #cbd5e1;background:#f1f5f9;font-size:.875rem;margin:.25rem; color:#475569}
    .input-field{width:100%; border:1px solid #cbd5e1; background:#f1f5f9; border-radius:0.75rem; padding:0.75rem; color:#0f172a}
    .btn-primary{background:#0ea5e9; color:#ffffff; font-weight:600; padding:0.75rem 1.5rem; border-radius:0.75rem; transition:background-color .2s}
    .btn-primary:hover{background:#0284c7}
    .btn-secondary{background:#f1f5f9; color:#0f172a; border:1px solid #cbd5e1; padding:0.75rem 1.5rem; border-radius:0.75rem; transition:background-color .2s}
    .btn-secondary:hover{background:#e2e8f0}
    canvas{display:block; max-width:100%;}
  </style>
</head>
<body>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16">
    <div class="flex items-center justify-between mb-8">
    </div>

    <?php if($campRes['error']||$kelRes['error']||$prodiRes['error']||$mapelRes['error']||$kurRes['error']): ?>
      <div class="card rounded-xl p-5 mb-4 border-red-300 bg-red-50">
        <div class="text-red-700 font-semibold mb-1">Gagal memuat data dari Supabase.</div>
        <div class="text-sm text-red-600">Cek SUPA_URL, SUPA_KEY, GRANT/USAGE schema & policy SELECT (tabel: campuses, program_studi, kelompok_prodi, kurikulum, prodi_mapel_override, kelompok_mapel_relevan, mata_pelajaran).</div>
        <div class="text-xs text-red-500 mt-2">
          CampusesErr: <?=h($campRes['error'] ?: '-')?>
          • KelompokErr: <?=h($kelRes['error'] ?: '-')?>
          • ProdiErr: <?=h($prodiRes['error'] ?: '-')?>
          • MapelErr: <?=h($mapelRes['error'] ?: '-')?>
          • KurikulumErr: <?=h($kurRes['error'] ?: '-')?>
        </div>
      </div>
    <?php endif; ?>

<?php if($step===1): ?>
  <!-- ======================== LANGKAH 1 ======================== -->
  <form method="post" class="card rounded-xl p-6 space-y-6">
    <h2 class="text-xl font-semibold">Langkah 1 — Pilih Kampus & Prodi</h2>
    <p class="text-sm text-gray-600">Data dari tabel asli Supabase (sesuai schema).</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
        <div class="text-sm text-gray-600 font-semibold mb-3">Pilihan 1</div>
        <label class="text-sm block mb-1 font-medium text-gray-700">Kampus</label>
        <select name="pl1_ptn" id="pl1_ptn" required class="input-field">
          <option value="">— Pilih Kampus —</option>
          <?php foreach(array_keys($PTN_PRODI) as $ptn): ?><option value="<?=h($ptn)?>"><?=h($ptn)?></option><?php endforeach; ?>
        </select>
        <label class="text-sm mt-4 mb-1 block font-medium text-gray-700">Program Studi</label>
        <select name="pl1_prodi" id="pl1_prodi" required class="input-field"><option value="">— Pilih Prodi —</option></select>
      </div>
      <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
        <div class="text-sm text-gray-600 font-semibold mb-3">Pilihan 2</div>
        <label class="text-sm block mb-1 font-medium text-gray-700">Kampus</label>
        <select name="pl2_ptn" id="pl2_ptn" required class="input-field">
          <option value="">— Pilih Kampus —</option>
          <?php foreach(array_keys($PTN_PRODI) as $ptn): ?><option value="<?=h($ptn)?>"><?=h($ptn)?></option><?php endforeach; ?>
        </select>
        <label class="text-sm mt-4 mb-1 block font-medium text-gray-700">Program Studi</label>
        <select name="pl2_prodi" id="pl2_prodi" required class="input-field"><option value="">— Pilih Prodi —</option></select>
      </div>
    </div>

    <div class="flex justify-end"><button class="btn-primary" type="submit" name="step" value="2">Lanjut</button></div>
  </form>

  <script>
    const PTN_PRODI = <?php echo json_encode($PTN_PRODI)?>;
    function bind(ptnId, prodiId){ const s1=document.getElementById(ptnId), s2=document.getElementById(prodiId);
      s1.addEventListener('change', ()=>{ s2.innerHTML = '<option value="">— Pilih Prodi —</option>'; const v=s1.value; if(!v||!PTN_PRODI[v]) return;
        Object.keys(PTN_PRODI[v]).forEach(p=>{ const op=document.createElement('option'); op.value=p; op.textContent=p; s2.appendChild(op); });
      });
    }
    bind('pl1_ptn','pl1_prodi'); bind('pl2_ptn','pl2_prodi');
  </script>

<?php elseif($step===2): ?>
  <!-- ======================== LANGKAH 2 ======================== -->
  <form method="post" class="card rounded-xl p-6 space-y-6">
    <h2 class="text-xl font-semibold">Langkah 2 — Nilai, Sekolah, Mapel & Prestasi</h2>
    <?php keep(['pl1_ptn','pl1_prodi','pl2_ptn','pl2_prodi']); ?>

    <?php
      $pl1_ptn=val('pl1_ptn'); $pl1_prodi=val('pl1_prodi');
      $pl2_ptn=val('pl2_ptn'); $pl2_prodi=val('pl2_prodi');

      $D1 = $PTN_PRODI[$pl1_ptn][$pl1_prodi] ?? null;
      $D2 = $PTN_PRODI[$pl2_ptn][$pl2_prodi] ?? null;

      $k1 = $D1['kelompok'] ?? 'Saintek';
      $k2 = $D2['kelompok'] ?? 'Saintek';

      // rekomendasi mapel (override > default kelompok), kurikulum aktif
      $rec1 = $D1 ? get_rekom_mapel_for($D1['prodi_id'], $D1['kelompok_id'], 6) : [];
      $rec2 = $D2 ? get_rekom_mapel_for($D2['prodi_id'], $D2['kelompok_id'], 6) : [];

      $opts1 = $rec1 ? array_values(array_unique(array_map(fn($r)=>$r['nama_mapel'],$rec1))) : (MAPEL_DEFAULT[$k1] ?? MAPEL_DEFAULT['Saintek']);
      $opts2 = $rec2 ? array_values(array_unique(array_map(fn($r)=>$r['nama_mapel'],$rec2))) : (MAPEL_DEFAULT[$k2] ?? MAPEL_DEFAULT['Saintek']);

      $campCity1 = $D1['city'] ?? '';
      $campCity2 = $D2['city'] ?? '';
    ?>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-3">
        <div class="text-sm text-gray-600 font-semibold">Indeks Sekolah</div>
        <label class="text-sm font-medium text-gray-700 block">Domisili Sekolah (Kota)</label>
        <input type="text" name="domisili_city" class="input-field" placeholder="contoh: Bandung" value="<?=h(val('domisili_city',''))?>" required>
        <div class="text-gray-500 text-xs mt-1">Kota Kampus: <b><?=h($campCity1)?> (PL1)</b> • <b><?=h($campCity2)?> (PL2)</b></div>
        <label class="text-sm font-medium text-gray-700 block mt-2">Peringkat Nasional Sekolah</label>
        <select name="rank_bucket" class="input-field" required>
          <?php for($i=0;$i<10;$i++): $a=$i*100+1; $b=($i+1)*100; ?><option value="<?=$a?>-<?=$b?>" <?=($i===3)?'selected':'';?>><?=$a?>–<?=$b?></option><?php endfor; ?>
        </select>
      </div>
      <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-3">
        <div class="text-sm text-gray-600 font-semibold">Nilai Rapor</div>
        <label class="text-sm font-medium text-gray-700 block">Ranking Paralel</label>
        <input type="number" name="rank_paralel" class="input-field" min="1" placeholder="contoh: 2" value="<?=h(val('rank_paralel',''))?>">
        <label class="text-sm font-medium text-gray-700 block">Rata-rata Rapor Sem 1–5</label>
        <input type="number" name="avg_rapor" class="input-field" step="0.01" min="60" max="100" required value="<?=h(val('avg_rapor',''))?>">
        <label class="text-sm font-medium text-gray-700 block">Tren Nilai</label>
        <select name="tren" class="input-field" required>
          <?php $t=val('tren','naik'); ?>
          <option value="naik"   <?=$t==='naik'?'selected':'';?>>Naik</option>
          <option value="stabil" <?=$t==='stabil'?'selected':'';?>>Stabil</option>
          <option value="turun"  <?=$t==='turun'?'selected':'';?>>Turun</option>
        </select>
      </div>
    </div>

    <?php
      function mapelFields($labelKelompok,$options,$prefix,$recs){
        ?>
        <div class="border-t border-gray-200 my-4"></div>
        <div class="text-sm text-gray-600 font-semibold">Nilai Mapel Relevan (<?=$labelKelompok?>)</div>
        <?php if($recs): ?>
          <div class="text-xs text-gray-500 mb-2">
            Rekomendasi (urut prioritas): 
            <?php foreach($recs as $i=>$r): ?>
              <span class="chip"><?=$r['nama_mapel']?><?=$r['is_override']?'*':''?></span>
            <?php endforeach; ?>
            <span class="text-[11px] ml-1">* override prodi</span>
          </div>
        <?php endif; ?>
        <div class="grid grid-cols-1 gap-3">
          <div>
            <label class="text-sm font-medium text-gray-700">Mata Pelajaran</label>
            <select name="<?=$prefix?>_mapel_name" class="input-field" required>
              <option value="">— Pilih Mapel —</option>
              <?php foreach($options as $m): ?>
                <option value="<?=h($m)?>" <?=val("{$prefix}_mapel_name")===$m?'selected':'';?>><?=h($m)?></option>
              <?php endforeach; ?>
            </select>
          </div>
          <div>
            <label class="text-sm font-medium text-gray-700">Nilai Mapel</label>
            <input type="number" name="<?=$prefix?>_mapel_score" class="input-field" min="0" max="100" step="0.1" value="<?=h(val("{$prefix}_mapel_score",''))?>" required>
          </div>
        </div>
        <?php
      }
    ?>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-3">
        <div class="flex items-center gap-2">
          <div class="text-sm text-gray-600 font-semibold">Pilihan 1</div>
          <span class="chip"><?=h($pl1_ptn)?> / <?=h($pl1_prodi)?></span>
          <span class="chip"><?=h($k1)?></span>
        </div>
        <label class="text-sm font-medium text-gray-700">Kesesuaian Jurusan SMA ↔ Prodi</label>
        <select name="pl1_linear" class="input-field" required>
          <?php $l1=val('pl1_linear','linear'); ?>
          <option value="linear"   <?=$l1==='linear'?'selected':'';?>>Linear</option>
          <option value="semi"     <?=$l1==='semi'?'selected':'';?>>Semi-linear</option>
          <option value="lintas"   <?=$l1==='lintas'?'selected':'';?>>Lintas-rumpun</option>
        </select>
        <?php mapelFields($k1,$opts1,'pl1',$rec1); ?>
        <div class="border-t border-gray-200 my-4"></div>
        <label class="text-sm font-medium text-gray-700">Alumni diterima tahun lalu</label>
        <select name="pl1_alumni" class="input-field" required>
          <?php $a1=val('pl1_alumni','4-10'); foreach(['0','1-3','4-10','11-20','20+'] as $o): ?>
            <option value="<?=$o?>" <?=$a1===$o?'selected':'';?>><?=$o?></option>
          <?php endforeach; ?>
        </select>
        <label class="text-sm font-medium text-gray-700">Status Daftar Ulang Alumni</label>
        <select name="pl1_du" class="input-field" required>
          <?php $d1=val('pl1_du','full'); foreach(['full'=>'Semua daftar ulang','sebagian'=>'Sebagian tidak daftar ulang','mayoritas'=>'Mayoritas tidak daftar ulang'] as $k=>$lbl): ?>
            <option value="<?=$k?>" <?=$d1===$k?'selected':'';?>><?=$lbl?></option>
          <?php endforeach; ?>
        </select>
      </div>

      <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-3">
        <div class="flex items-center gap-2">
          <div class="text-sm text-gray-600 font-semibold">Pilihan 2</div>
          <span class="chip"><?=h($pl2_ptn)?> / <?=h($pl2_prodi)?></span>
          <span class="chip"><?=h($k2)?></span>
        </div>
        <label class="text-sm font-medium text-gray-700">Kesesuaian Jurusan SMA ↔ Prodi</label>
        <select name="pl2_linear" class="input-field" required>
          <?php $l2=val('pl2_linear','linear'); ?>
          <option value="linear"   <?=$l2==='linear'?'selected':'';?>>Linear</option>
          <option value="semi"     <?=$l2==='semi'?'selected':'';?>>Semi-linear</option>
          <option value="lintas"   <?=$l2==='lintas'?'selected':'';?>>Lintas-rumpun</option>
        </select>
        <?php mapelFields($k2,$opts2,'pl2',$rec2); ?>
        <div class="border-t border-gray-200 my-4"></div>
        <label class="text-sm font-medium text-gray-700">Alumni diterima tahun lalu</label>
        <select name="pl2_alumni" class="input-field" required>
          <?php $a2=val('pl2_alumni','4-10'); foreach(['0','1-3','4-10','11-20','20+'] as $o): ?>
            <option value="<?=$o?>" <?=$a2===$o?'selected':'';?>><?=$o?></option>
          <?php endforeach; ?>
        </select>
        <label class="text-sm font-medium text-gray-700">Status Daftar Ulang Alumni</label>
        <select name="pl2_du" class="input-field" required>
          <?php $d2=val('pl2_du','full'); foreach(['full'=>'Semua daftar ulang','sebagian'=>'Sebagian tidak daftar ulang','mayoritas'=>'Mayoritas tidak daftar ulang'] as $k=>$lbl): ?>
            <option value="<?=$k?>" <?=$d2===$k?'selected':'';?>><?=$lbl?></option>
          <?php endforeach; ?>
        </select>
      </div>
    </div>

    <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
      <div class="text-sm text-gray-600 font-semibold mb-3">Prestasi (opsional, isi 0–3 item)</div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <?php for($i=1;$i<=3;$i++): ?>
        <div class="bg-white p-4 rounded-xl border border-gray-200">
          <label class="text-xs text-gray-600 font-medium">Prestasi <?=$i?> — Tingkat</label>
          <select name="p<?=$i?>_tingkat" class="input-field p-2 text-sm">
            <?php $tg = val("p{$i}_tingkat",''); ?>
            <option value="">— Kosongkan —</option>
            <option value="kab" <?=$tg==='kab'?'selected':'';?>>Kabupaten/Kota</option>
            <option value="prov" <?=$tg==='prov'?'selected':'';?>>Provinsi</option>
            <option value="nas"  <?=$tg==='nas'?'selected':'';?>>Nasional</option>
            <option value="internasional" <?=$tg==='internasional'?'selected':'';?>>Internasional</option>
          </select>
          <div class="grid grid-cols-2 gap-2 mt-2">
            <div>
              <label class="text-xs text-gray-600 font-medium">Penyelenggara</label>
              <?php $py=val("p{$i}_penyelenggara",'swasta'); ?>
              <select name="p<?=$i?>_penyelenggara" class="input-field p-2 text-sm">
                <option value="swasta" <?=$py==='swasta'?'selected':'';?>>Swasta</option>
                <option value="resmi"  <?=$py==='resmi'?'selected':'';?>>Resmi</option>
              </select>
            </div>
            <div>
              <label class="text-xs text-gray-600 font-medium">Peringkat</label>
              <?php $rk=val("p{$i}_peringkat",''); ?>
              <select name="p<?=$i?>_peringkat" class="input-field p-2 text-sm">
                <option value="">— Tidak Ada —</option>
                <option value="1" <?=$rk==='1'?'selected':'';?>>Juara 1</option>
                <option value="2" <?=$rk==='2'?'selected':'';?>>Juara 2</option>
                <option value="3" <?=$rk==='3'?'selected':'';?>>Juara 3</option>
                <option value="harapan" <?=$rk==='harapan'?'selected':'';?>>Harapan</option>
              </select>
            </div>
          </div>
          <label class="text-xs mt-2 block text-gray-600 font-medium">Relevansi dg Prodi</label>
          <?php $rv=val("p{$i}_relevansi",'rendah'); ?>
          <select name="p<?=$i?>_relevansi" class="input-field p-2 text-sm">
            <option value="tinggi"  <?=$rv==='tinggi'?'selected':'';?>>Tinggi</option>
            <option value="sedang"  <?=$rv==='sedang'?'selected':'';?>>Sedang</option>
            <option value="rendah"  <?=$rv==='rendah'?'selected':'';?>>Rendah</option>
          </select>
        </div>
        <?php endfor; ?>
      </div>
    </div>

    <div class="flex justify-between">
      <button class="btn-secondary" type="submit" name="step" value="1">← Kembali</button>
      <button class="btn-primary" type="submit" name="step" value="3">Lihat Hasil →</button>
    </div>
  </form>

  <script>
    // Restore dropdown saat kembali
    const PTN_PRODI = <?php echo json_encode($PTN_PRODI)?>;
    (function restore(){
      const s = [
        {ptn:'pl1_ptn', prodi:'pl1_prodi', vptn:<?=json_encode(val('pl1_ptn'))?>, vpro:<?=json_encode(val('pl1_prodi'))?>},
        {ptn:'pl2_ptn', prodi:'pl2_prodi', vptn:<?=json_encode(val('pl2_ptn'))?>, vpro:<?=json_encode(val('pl2_prodi'))?>},
      ];
      s.forEach(({ptn,prodi,vptn,vpro})=>{
        const sp=document.getElementById(ptn), sd=document.getElementById(prodi);
        if(vptn && PTN_PRODI[vptn]){
          sp.value=vptn;
          sd.innerHTML='<option value="">— Pilih Prodi —</option>';
          Object.keys(PTN_PRODI[vptn]).forEach(p=>{
            const op=document.createElement('option'); op.value=p; op.textContent=p; sd.appendChild(op);
          });
          if(vpro) sd.value=vpro;
        }
      });
    })();
  </script>

<?php elseif($step===3): ?>
  <!-- ======================== LANGKAH 3 ======================== -->
  <?php
    $pl1_ptn=val('pl1_ptn'); $pl1_prodi=val('pl1_prodi'); $pl2_ptn=val('pl2_ptn'); $pl2_prodi=val('pl2_prodi');
    $D1=$PTN_PRODI[$pl1_ptn][$pl1_prodi]??null; $D2=$PTN_PRODI[$pl2_ptn][$pl2_prodi]??null;
    if(!$D1||!$D2){ echo '<div class="card p-5 border-red-300 bg-red-50 text-red-700">Data prodi tidak valid. <a href="#" onclick="history.back()" class="underline">Kembali</a></div>'; }
    else {
      $avg=(float)val('avg_rapor',85); $rank=(int)val('rank_paralel',0); $tren=val('tren','stabil');
      $schoolCity = trim(val('domisili_city',''));
      $rank_bucket = val('rank_bucket','301-400');

      $m1_score = (float)val('pl1_mapel_score', 0);
      $m2_score = (float)val('pl2_mapel_score', 0);

      $M1 = $m1_score; $M2 = $m2_score;

      $R  = raporTotal($avg,$rank,$tren);
      $bonusCity1 = city_bonus($schoolCity,$D1['city']); $bonusCity2 = city_bonus($schoolCity,$D2['city']);
      $S1 = sekolahScore($rank_bucket,$bonusCity1); $S2 = sekolahScore($rank_bucket,$bonusCity2);
      $A1 = alumniScore(val('pl1_alumni','4-10'), val('pl1_du','full'));
      $A2 = alumniScore(val('pl2_alumni','4-10'), val('pl2_du','full'));

      $p=[]; for($i=1;$i<=3;$i++){ $p[$i]=prestasiSingle(val("p{$i}_tingkat"),val("p{$i}_penyelenggara"),val("p{$i}_peringkat"),val("p{$i}_relevansi")); }
      $P = prestasiTotal($p[1],$p[2],$p[3]);

      $bonusLin1 = LINEARITY[val('pl1_linear','linear')] ?? 0;
      $bonusLin2 = LINEARITY[val('pl2_linear','linear')] ?? 0;

      $pen1 = ketatPenaltiGraceful();
      $pen2 = ketatPenaltiGraceful();

      $raw_score1 = (WEIGHTS['rapor']*$R + WEIGHTS['mapel']*$M1 + WEIGHTS['sekolah']*$S1 + WEIGHTS['alumni']*$A1 + WEIGHTS['prestasi']*$P + ($bonusLin1*0.05)) - $pen1;
      $raw_score2 = (WEIGHTS['rapor']*$R + WEIGHTS['mapel']*$M2 + WEIGHTS['sekolah']*$S2 + WEIGHTS['alumni']*$A2 + WEIGHTS['prestasi']*$P + ($bonusLin2*0.05)) - $pen2;

      $SC1 = max(0, min(100, $raw_score1));
      $SC2 = max(0, min(100, $raw_score2));

      $SUP1=[];$BLK1=[];$SUP2=[];$BLK2=[];

      $SUP1[] = ($R>=85)?'Nilai rapor sangat bagus dan konsisten.':'Nilai rapor tergolong baik.';
      $SUP2[] = $SUP1[0];

      if($M1>0){
        if($M1>=85) $SUP1[]='Mapel pendukung menonjol.'; else if($M1<70) $BLK1[]='Nilai mapel pendukung relatif rendah.'; else $SUP1[]='Mapel pendukung cukup baik.';
      } else { $BLK1[]='Nilai mapel pendukung belum diisi.'; }

      if($M2>0){
        if($M2>=85) $SUP2[]='Mapel pendukung menonjol.'; else if($M2<70) $BLK2[]='Nilai mapel pendukung relatif rendah.'; else $SUP2[]='Mapel pendukung cukup baik.';
      } else { $BLK2[]='Nilai mapel pendukung belum diisi.'; }

      if($S1>=85) $SUP1[]='Sekolah unggul secara nasional.'; else if($S1<75) $BLK1[]='Indeks sekolah belum kuat di tingkat nasional.';
      if($S2>=85) $SUP2[]='Sekolah unggul secara nasional.'; else if($S2<75) $BLK2[]='Indeks sekolah belum kuat di tingkat nasional.';

      if($A1>=80) $SUP1[]='Terdapat alumni yang diterima di prodi/kampus ini.'; else if($A1<65) $BLK1[]='Belum ada atau sangat sedikit alumni yang diterima.';
      if($A2>=80) $SUP2[]='Terdapat alumni yang diterima di prodi/kampus ini.'; else if($A2<65) $BLK2[]='Belum ada atau sangat sedikit alumni yang diterima.';

      if($P>=80) { $SUP1[]='Prestasi kompetitif memberi nilai tambah.'; $SUP2[]='Prestasi kompetitif memberi nilai tambah.'; }

      if(val('pl1_linear')==='linear') $SUP1[]='Kesesuaian jurusan SMA ↔ prodi memberikan nilai plus yang signifikan.'; else if(val('pl1_linear')==='lintas') $BLK1[]='Prodi tidak sesuai dengan jurusan saat SMA.';
      if(val('pl2_linear')==='linear') $SUP2[]='Kesesuaian jurusan SMA ↔ prodi memberikan nilai plus yang signifikan.'; else if(val('pl2_linear')==='lintas') $BLK2[]='Prodi tidak sesuai dengan jurusan saat SMA.';

      $noStat1 = true; $noStat2 = true;
  ?>

  <div class="card rounded-xl p-6 space-y-6">
    <h2 class="text-xl font-semibold">Langkah 3 — Hasil Prediksi Kelulusan</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="border border-gray-200 rounded-xl p-4 bg-gray-50">
        <div class="text-sm font-semibold mb-3 text-gray-700">Perbandingan Peluang & Komponen</div>
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <span class="text-sm font-semibold text-gray-700 min-w-[3rem]">PIL 1</span>
            <div class="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div class="h-full bg-brand" style="width: <?=num($SC1,1)?>%"></div>
            </div>
            <span class="text-sm font-semibold text-gray-700 min-w-[3rem] text-right"><?=num($SC1,1)?>%</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-sm font-semibold text-gray-700 min-w-[3rem]">PIL 2</span>
            <div class="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div class="h-full bg-orange-400" style="width: <?=num($SC2,1)?>%"></div>
            </div>
            <span class="text-sm font-semibold text-gray-700 min-w-[3rem] text-right"><?=num($SC2,1)?>%</span>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-4">
          <div class="h-[160px]"><canvas id="donut1"></canvas></div>
          <div class="h-[160px]"><canvas id="donut2"></canvas></div>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-4">
          <div class="h-[220px]"><canvas id="radar1"></canvas></div>
          <div class="h-[220px]"><canvas id="radar2"></canvas></div>
        </div>
      </div>

      <div class="border border-gray-200 rounded-xl p-4 bg-gray-50">
        <div class="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-medium text-gray-700">
          <div class="text-gray-600">Pilihan 1</div><div><span class="chip"><?=h($pl1_ptn)?></span><span class="chip"><?=h($pl1_prodi)?></span><?php if($noStat1): ?><span class="chip" title="Tidak ada data kompetisi dari API">No stats</span><?php endif; ?></div>
          <div class="text-gray-600">Pilihan 2</div><div><span class="chip"><?=h($pl2_ptn)?></span><span class="chip"><?=h($pl2_prodi)?></span><?php if($noStat2): ?><span class="chip" title="Tidak ada data kompetisi dari API">No stats</span><?php endif; ?></div>
          <div class="text-gray-600">Skor</div><div><span class="font-semibold text-brand"><?=num($SC1,1)?>%</span> vs <span class="font-semibold text-orange-400"><?=num($SC2,1)?>%</span></div>
          <div class="text-gray-600">Ketat Saing</div><div>– vs –</div>
          <div class="text-gray-600">Domisili</div><div><?=h($schoolCity)?> → bonus PL1 <?=num($bonusCity1)?>, PL2 <?=num($bonusCity2)?></div>
        </div>
        <div class="border-t border-gray-200 mt-4 pt-4"></div>
        <div class="text-sm text-gray-600 font-semibold mb-1">Kontribusi Komponen</div>
        <div class="h-[220px]"><canvas id="stacked"></canvas></div>

        <div class="border-t border-gray-200 mt-4 pt-4"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div class="bg-white rounded-xl border border-gray-200 p-4">
            <div class="font-semibold mb-2">Kontribusi PL 1</div>
            <ul class="space-y-1 text-gray-700">
              <li>Rapor (50%): <?=num($R*0.50,2)?></li>
              <li>Mapel (20%): <?=num($M1*0.20,2)?></li>
              <li>Sekolah (15%): <?=num($S1*0.15,2)?></li>
              <li>Alumni (10%): <?=num($A1*0.10,2)?></li>
              <li>Prestasi (5%): <?=num($P*0.05,2)?></li>
              <li>Bonus Linearitas: <?=num(($bonusLin1*0.05),2)?></li>
              <li class="text-red-700">Penalti Kompetisi: -<?=num($pen1,2)?></li>
            </ul>
          </div>
          <div class="bg-white rounded-xl border border-gray-200 p-4">
            <div class="font-semibold mb-2">Kontribusi PL 2</div>
            <ul class="space-y-1 text-gray-700">
              <li>Rapor (50%): <?=num($R*0.50,2)?></li>
              <li>Mapel (20%): <?=num($M2*0.20,2)?></li>
              <li>Sekolah (15%): <?=num($S2*0.15,2)?></li>
              <li>Alumni (10%): <?=num($A2*0.10,2)?></li>
              <li>Prestasi (5%): <?=num($P*0.05,2)?></li>
              <li>Bonus Linearitas: <?=num(($bonusLin2*0.05),2)?></li>
              <li class="text-red-700">Penalti Kompetisi: -<?=num($pen2,2)?></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
    <div class="card rounded-xl p-6">
      <h3 class="font-semibold text-lg mb-2 text-gray-800">Breakdown Pilihan 1</h3>
      <div class="flex flex-wrap mb-2">
        <span class="chip">Kelompok: <?=h($D1['kelompok'])?></span>
        <span class="chip">Kota Kampus: <?=h($D1['city'])?></span>
        <span class="chip">Mapel relevan: <?=h(val('pl1_mapel_name', ''))?> (<?=num($M1,1)?>)</span>
      </div>
      <div class="border-t border-gray-200 my-4"></div>
      <h4 class="font-semibold text-gray-800">Faktor Pendukung</h4>
      <ul class="list-disc pl-5 text-sm space-y-1 text-gray-700"><?php foreach($SUP1 as $s) echo '<li>'.h($s).'</li>'; ?></ul>
      <div class="border-t border-gray-200 my-4"></div>
      <h4 class="font-semibold text-gray-800">Faktor Penghambat</h4>
      <ul class="list-disc pl-5 text-sm space-y-1 text-gray-700"><?php foreach($BLK1 as $s) echo '<li>'.h($s).'</li>'; ?></ul>
    </div>

    <div class="card rounded-xl p-6">
      <h3 class="font-semibold text-lg mb-2 text-gray-800">Breakdown Pilihan 2</h3>
      <div class="flex flex-wrap mb-2">
        <span class="chip">Kelompok: <?=h($D2['kelompok'])?></span>
        <span class="chip">Kota Kampus: <?=h($D2['city'])?></span>
        <span class="chip">Mapel relevan: <?=h(val('pl2_mapel_name', ''))?> (<?=num($M2,1)?>)</span>
      </div>
      <div class="border-t border-gray-200 my-4"></div>
      <h4 class="font-semibold text-gray-800">Faktor Pendukung</h4>
      <ul class="list-disc pl-5 text-sm space-y-1 text-gray-700"><?php foreach($SUP2 as $s) echo '<li>'.h($s).'</li>'; ?></ul>
      <div class="border-t border-gray-200 my-4"></div>
      <h4 class="font-semibold text-gray-800">Faktor Penghambat</h4>
      <ul class="list-disc pl-5 text-sm space-y-1 text-gray-700"><?php foreach($BLK2 as $s) echo '<li>'.h($s).'</li>'; ?></ul>
    </div>
  </div>

  <form method="post" class="flex items-center justify-between mt-6">
    <?php keep(['pl1_ptn','pl1_prodi','pl2_ptn','pl2_prodi','avg_rapor','rank_paralel','tren','rank_bucket','domisili_city','pl1_linear','pl1_alumni','pl1_du','pl1_mapel_name','pl1_mapel_score','pl2_linear','pl2_alumni','pl2_du','pl2_mapel_name','pl2_mapel_score','p1_tingkat','p1_penyelenggara','p1_peringkat','p1_relevansi','p2_tingkat','p2_penyelenggara','p2_peringkat','p2_relevansi','p3_tingkat','p3_penyelenggara','p3_peringkat','p3_relevansi'])?>
    <button class="btn-secondary" type="submit" name="step" value="2">← Edit Data</button>
    <button class="btn-primary" type="submit" name="step" value="1">Mulai Ulang</button>
  </form>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      try {
        const CenterText = { id:'centerText', afterDraw(chart,args,opts){ const {ctx,chartArea:{left,right,top,bottom}}=chart; const txt=opts.text||''; ctx.save(); ctx.fillStyle='#0f172a'; ctx.font='600 14px system-ui'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(txt,(left+right)/2,(top+bottom)/2); ctx.restore(); } };
        Chart.register(CenterText);

        const SC1 = <?=json_encode(num($SC1,1))?>, SC2 = <?=json_encode(num($SC2,1))?>;
        const R  = <?=json_encode(num($R,1))?>, M1 = <?=json_encode(num($M1,1))?>, M2 = <?=json_encode(num($M2,1))?>, S1 = <?=json_encode(num($S1,1))?>, S2 = <?=json_encode(num($S2,1))?>, A1 = <?=json_encode(num($A1,1))?>, A2 = <?=json_encode(num($A2,1))?>, P = <?=json_encode(num($P,1))?>;

        function donut(id, val, color){ new Chart(document.getElementById(id), { type:'doughnut', data:{ labels:['Peluang','Sisa'], datasets:[{ data:[val, 100-val], backgroundColor:[color, '#e2e8f0'], borderWidth:0 }]}, options:{ responsive:true, maintainAspectRatio:true, aspectRatio:1, plugins:{ legend:{display:false}, tooltip:{enabled:false}, centerText:{ text: val+'%' } } } }); }
        donut('donut1', SC1, '#0ea5e9'); donut('donut2', SC2, '#f59e0b');

        function radar(id, vals, color){ new Chart(document.getElementById(id), { type:'radar', data:{ labels:['Rapor','Mapel','Sekolah','Alumni','Prestasi'], datasets:[{ data: vals, backgroundColor: color+'33', borderColor: color, pointRadius:2 }] }, options:{ responsive:true, maintainAspectRatio:true, aspectRatio:1.1, plugins:{legend:{display:false}}, scales:{ r:{ min:0,max:100, ticks:{display:false}, grid:{color:'#cbd5e1'}, angleLines:{color:'#cbd5e1'} } } } }); }
        radar('radar1',[R,M1,S1,A1,P],'#0ea5e9'); radar('radar2',[R,M2,S2,A2,P],'#f59e0b');

        new Chart(document.getElementById('stacked'), { type:'bar', data:{ labels:['Rapor','Mapel','Sekolah','Alumni','Prestasi'], datasets:[ {label:'PL 1', data:[R*0.50, M1*0.20, S1*0.15, A1*0.10, P*0.05], backgroundColor:'#0ea5e9'}, {label:'PL 2', data:[R*0.50, M2*0.20, S2*0.15, A2*0.10, P*0.05], backgroundColor:'#f59e0b'} ]}, options:{ responsive:true, maintainAspectRatio:true, aspectRatio:2.1, plugins:{ legend:{labels:{color:'#475569'}}, tooltip:{enabled:true} }, scales:{ x:{ stacked:true, ticks:{color:'#475569'}}, y:{ stacked:true, ticks:{color:'#475569'}, grid:{color:'#e2e8f0'} } } } });
      } catch (error) {
        console.error("Error saat menginisialisasi bagan:", error);
      }
    });
  </script>

  <?php } // valid prodi ?>
<?php endif; ?>
</body>
</html>
