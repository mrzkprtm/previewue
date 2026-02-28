const fs = require('fs');

async function run() {
    try {
        const envContent = fs.readFileSync('.env', 'utf8');
        const env = envContent.split('\n').reduce((acc, line) => {
            const [k, ...v] = line.split('=');
            if (k) acc[k.trim()] = v.join('=').trim();
            return acc;
        }, {});

        const sup = env.SUPABASE_URL;
        const key = env.SUPABASE_ANON_KEY;

        const url = `${sup}/rest/v1/cms_pretests?nama_program=eq.SAT&jenis_soal=eq.Math&select=soal,pilihan_a,pilihan_b,pilihan_c,pilihan_d&limit=3`;

        const response = await fetch(url, {
            headers: {
                'apikey': key,
                'Authorization': 'Bearer ' + key
            }
        });

        const data = await response.json();
        console.log('DATA_START');
        console.log(JSON.stringify(data, null, 2));
        console.log('DATA_END');
    } catch (e) {
        console.error(e);
    }
}

run();
