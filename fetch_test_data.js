const fs = require('fs');
const https = require('https');

const env = fs.readFileSync('c:/Users/Seto/Documents/frontendue/.env', 'utf8').split('\n').reduce((acc, line) => {
    const [k, ...v] = line.split('=');
    if (k) acc[k] = v.join('=').trim();
    return acc;
}, {});

const sup = env.SUPABASE_URL;
const key = env.SUPABASE_ANON_KEY;

fetch(sup + '/rest/v1/cms_pretests?nama_program=eq.SAT&jenis_soal=eq.Math&select=soal,pilihan_a,pilihan_b&limit=1', {
    headers: { 'apikey': key, 'Authorization': 'Bearer ' + key }
})
    .then(r => r.json())
    .then(data => console.log(JSON.stringify(data, null, 2)))
    .catch(e => console.error(e));
