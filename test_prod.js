const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://mac-consultores.vercel.app/blog.html', { waitUntil: 'networkidle0' });
    const getCards = async () => page.evaluate(() => {
        return Array.from(document.querySelectorAll('.blog-card')).map(card => {
            return card.querySelector('h3')?.innerText;
        });
    });
    console.log('Cards before click:', await getCards());
    await page.evaluate(() => {
        const btn = document.querySelector('.lang-btn[data-lang=\"en\"]');
        if (btn) btn.click();
    });
    await new Promise(r => setTimeout(r, 1500));
    console.log('Cards after click:', await getCards());
    await browser.close();
})();
