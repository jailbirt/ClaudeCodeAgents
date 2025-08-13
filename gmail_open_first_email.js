const { chromium } = require('playwright');

async function openFirstEmailInGmail() {
  console.log('Conectando al Chrome en puerto 9222...');
  
  try {
    // Conectar al Chrome existente
    const browser = await chromium.connectOverCDP('http://localhost:9222');
    
    console.log('✅ Conectado a Chrome');
    
    // Obtener el contexto y página actual
    const contexts = browser.contexts();
    const context = contexts[0] || await browser.newContext();
    const pages = context.pages();
    let page = pages[0] || await context.newPage();
    
    // Navegar a Gmail
    console.log('\n🌐 Navegando a Gmail...');
    await page.goto('https://mail.google.com', { waitUntil: 'networkidle' });
    
    console.log('⏳ Esperando que Gmail cargue...');
    
    // Esperar a que Gmail cargue completamente
    // Gmail puede tener diferentes vistas, intentamos varios selectores
    try {
      // Esperar por la lista de correos
      await page.waitForSelector('tr.zA', { timeout: 15000 });
      console.log('✅ Gmail cargado - Vista estándar detectada');
      
      // Hacer click en el primer correo
      console.log('\n📧 Abriendo el primer correo...');
      await page.click('tr.zA:first-child');
      
      console.log('✅ Primer correo abierto');
      
    } catch (e) {
      // Intentar con vista compacta o básica
      console.log('Intentando con selectores alternativos...');
      
      try {
        // Selector alternativo para vista básica
        await page.waitForSelector('table.F tr', { timeout: 5000 });
        await page.click('table.F tr:nth-child(2)'); // Segundo tr suele ser el primer email
        console.log('✅ Primer correo abierto (vista básica)');
      } catch (e2) {
        console.log('⚠️  No se pudo detectar automáticamente la estructura de Gmail');
        console.log('   Por favor, haz click manualmente en el primer correo');
      }
    }
    
    // Esperar un momento para que el correo se cargue
    await page.waitForTimeout(3000);
    
    // Intentar capturar información del correo abierto
    try {
      const subject = await page.$eval('h2[data-legacy-thread-id]', el => el.textContent);
      console.log(`\n📋 Asunto del correo: ${subject}`);
    } catch (e) {
      console.log('\n📋 El correo está abierto');
    }
    
    console.log('\n✅ Listo! El primer correo debería estar abierto en tu navegador');
    console.log('El script permanecerá activo. Presiona Ctrl+C para terminar.');
    
    // Mantener el script activo
    await new Promise(() => {});
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    
    if (error.message.includes('ECONNREFUSED')) {
      console.log('\n💡 Chrome no está corriendo en el puerto 9222');
      console.log('   Ejecuta: chrome.exe --remote-debugging-port=9222');
    }
  }
}

openFirstEmailInGmail().catch(console.error);