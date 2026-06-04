const puppeteer = require('puppeteer');
const http = require('http');
const handler = require('serve-handler');

(async () => {
    // Start local server
    const server = http.createServer((request, response) => {
        // Rewrite all URLs to serve clean URLs without .html
        if (request.url.startsWith('/') && !request.url.includes('.') && request.url !== '/') {
            request.url += '.html';
        }
        return handler(request, response, { public: '.' });
    });
    server.listen(3001, async () => {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        
        console.log("Navigating to /blog");
        await page.goto('http://localhost:3001/blog', { waitUntil: 'networkidle0' });
        
        let title = await page.title();
        console.log("Title on /blog (ES):", title);
        
        await page.evaluate(() => {
            const btn = document.querySelector('.lang-btn[data-lang=\"en\"]');
            if (btn) btn.click();
        });
        await new Promise(r => setTimeout(r, 1000));
        
        title = await page.title();
        console.log("Title on /blog (EN):", title);
        
        console.log("Clicking link to /blog-criminalidad-economica");
        await page.evaluate(() => {
            document.querySelector('a[href=\"blog-criminalidad-economica.html\"]').click();
        });
        await new Promise(r => setTimeout(r, 1000));
        
        title = await page.title();
        console.log("Title on /blog-criminalidad-economica (EN):", title);
        
        await browser.close();
        server.close();
    });
})();
