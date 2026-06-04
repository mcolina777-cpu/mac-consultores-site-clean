const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
    
    await page.goto('http://localhost:3000/index.html', { waitUntil: 'networkidle0' });
    
    const getText = async () => page.evaluate(() => document.querySelector('[data-i18n="nav.inicio"]')?.innerText);
    
    console.log('Text before click:', await getText());
    
    await page.evaluate(() => {
        const btn = document.querySelector('.lang-btn[data-lang="en"]');
        if (btn) btn.click();
    });
    
    await new Promise(r => setTimeout(r, 1000));
    
    console.log('Text after click:', await getText());
    
    await browser.close();
})();
