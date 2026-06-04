const fs = require('fs');
const data = JSON.parse(fs.readFileSync('home.json', 'utf8'));

if (data.es && data.es.home) {
    const esHome = data.es.home;
    delete data.es.home;
    Object.assign(data.es, esHome);
}

if (data.en && data.en.home) {
    const enHome = data.en.home;
    delete data.en.home;
    Object.assign(data.en, enHome);
}

fs.writeFileSync('home.json', JSON.stringify(data, null, 2), 'utf8');
console.log("home.json updated");
