const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Escuchar la consola del navegador
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));

    console.log("Cargando index.html...");
    await page.goto('http://localhost:8003/index.html', { waitUntil: 'networkidle0' });

    // Esperar a que la página cargue y el I18nManager esté listo
    await new Promise(r => setTimeout(r, 1000));

    let h1 = await page.$eval('h1[data-i18n="home.hero.h1"]', el => el.innerText).catch(() => "NOT_FOUND");
    console.log("H1 Inicial (ES):", h1);

    console.log("Haciendo clic en el botón EN...");
    // Localizar el botón de inglés
    await page.evaluate(() => {
        const btn = document.querySelector('.lang-btn[data-lang="en"]');
        if (btn) btn.click();
    });

    await new Promise(r => setTimeout(r, 1000));

    let h1_en = await page.$eval('h1[data-i18n="home.hero.h1"]', el => el.innerText).catch(() => "NOT_FOUND");
    console.log("H1 Después (EN):", h1_en);

    await browser.close();
})();
