const https = require('https');
const fs = require('fs');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36' } }, response => {
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', err => { fs.unlink(dest); reject(err); });
  });
}

async function fetchGoogleFonts() {
  const getCss = (url) => new Promise((resolve) => {
    let data = '';
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36' } }, (res) => {
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
  });

  const cormorantCss = await getCss('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
  const interCss = await getCss('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

  // Extract the first latin woff2 URL for each (simplification for this task)
  const extractWoff2 = (css) => {
    const blocks = css.split('/* latin */');
    if (blocks.length > 1) {
      const match = blocks[1].match(/url\((https:\/\/[^)]+\.woff2)\)/);
      if (match) return match[1];
    }
    return css.match(/url\((https:\/\/[^)]+\.woff2)\)/)[1];
  };

  const cormorantUrl = extractWoff2(cormorantCss);
  const interUrl = extractWoff2(interCss);

  console.log('Downloading Cormorant Garamond:', cormorantUrl);
  await download(cormorantUrl, 'public/fonts/CormorantGaramond.woff2');
  
  console.log('Downloading Inter:', interUrl);
  await download(interUrl, 'public/fonts/Inter.woff2');
  
  console.log('Done.');
}
fetchGoogleFonts();
