const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Escuchar la consola del navegador
    page.on('console', msg => console.log('VERCEL BROWSER LOG:', msg.text(), msg.location().url));

    console.log("Cargando Vercel...");
    await page.goto('https://mac-consultores.vercel.app/', { waitUntil: 'networkidle0' });

    await new Promise(r => setTimeout(r, 2000));

    let h1 = await page.$eval('h1', el => el.innerText).catch(() => "NOT_FOUND");
    console.log("H1 Inicial (ES):", h1);
    
    let h1_attr = await page.$eval('h1', el => el.getAttribute('data-i18n')).catch(() => "NOT_FOUND");
    console.log("H1 data-i18n:", h1_attr);

    console.log("Haciendo clic en el botón EN...");
    // Localizar el botón de inglés
    await page.evaluate(() => {
        const btn = document.querySelector('.lang-btn[data-lang="en"]');
        if (btn) btn.click();
    });

    await new Promise(r => setTimeout(r, 2000));

    let h1_en = await page.$eval('h1', el => el.innerText).catch(() => "NOT_FOUND");
    console.log("H1 Después (EN):", h1_en);

    await browser.close();
})();
