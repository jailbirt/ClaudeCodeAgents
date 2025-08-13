const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.connectOverCDP('http://localhost:9222');
  const context = browser.contexts()[0];
  const page = context.pages()[0] || await context.newPage();
  
  // Navegar a Gmail
  await page.goto('https://mail.google.com');
  await page.waitForTimeout(5000);
  
  // Intentar hacer click en el primer email
  try {
    await page.click('tr.zA:first-child');
    console.log('Primer email abierto');
  } catch (e) {
    console.log('Esperando que cargue Gmail...');
  }
  
  // Mantener abierto
  await new Promise(() => {});
})();