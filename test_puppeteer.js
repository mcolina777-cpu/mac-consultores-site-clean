const puppeteer = require('puppeteer');
const { spawn } = require('child_process');

(async () => {
    // Start python server
    const server = spawn('python3', ['-m', 'http.server', '8080']);
    await new Promise(r => setTimeout(r, 1000));
    
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    console.log("Navigating to /blog-criminalidad-economica.html");
    await page.goto('http://localhost:8080/blog-criminalidad-economica.html', { waitUntil: 'networkidle0' });
    
    let p1 = await page.evaluate(() => document.querySelector('[data-i18n=\"articulo_crimen.p1\"]').textContent);
    console.log("ES p1:", p1.substring(0, 50));
    
    console.log("Clicking EN button...");
    await page.evaluate(() => {
        const btn = document.querySelector('.lang-btn[data-lang=\"en\"]');
        if (btn) btn.click();
    });
    
    await new Promise(r => setTimeout(r, 1000));
    
    p1 = await page.evaluate(() => document.querySelector('[data-i18n=\"articulo_crimen.p1\"]').textContent);
    console.log("EN p1:", p1.substring(0, 50));
    
    await browser.close();
    server.kill();
})();
