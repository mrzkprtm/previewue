const https = require('https');
const fs = require('fs');

const url = 'https://ultimateeducation.co.id/wp-json/wp/v2/beasiswa?per_page=1&_embed';

console.log(`Fetching from ${url}...`);

https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        if (res.statusCode === 200) {
            try {
                const json = JSON.parse(data);
                if (json.length > 0) {
                    const filePath = 'scholarship-debug.json';
                    fs.writeFileSync(filePath, JSON.stringify(json[0], null, 2));
                    console.log(`Successfully saved first scholarship item to ${filePath}`);

                    // Also log structure keys for quick view
                    console.log('Root keys:', Object.keys(json[0]));
                    if (json[0].acf) console.log('ACF keys:', Object.keys(json[0].acf));
                    if (json[0].meta) console.log('Meta keys:', Object.keys(json[0].meta));
                } else {
                    console.log('No scholarships found.');
                }
            } catch (e) {
                console.error('Error parsing JSON:', e.message);
                console.log('Raw data preview:', data.substring(0, 500));
            }
        } else {
            console.error(`Failed: Status Code ${res.statusCode}`);
            // If 404, try beasiswas
            if (res.statusCode === 404) {
                console.log("Trying fallback to 'beasiswas'...");
            }
        }
    });

}).on('error', (err) => {
    console.error('Error:', err.message);
});
