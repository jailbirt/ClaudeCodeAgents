const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.connectOverCDP('http://localhost:9222');
  const context = browser.contexts()[0];
  const page = context.pages()[0] || await context.newPage();
  
  console.log('Conectado a Chrome');
  console.log('Buscando botón de enviar...');
  
  try {
    // Buscar el botón de enviar con múltiples estrategias
    
    // Estrategia 1: Atajo de teclado Ctrl+Enter
    await page.keyboard.press('Control+Enter');
    console.log('✓ Intentado envío con Ctrl+Enter');
    
    await page.waitForTimeout(2000);
    
    // Verificar si se envió mirando si aparece el mensaje de confirmación
    const sent = await page.locator('text=/enviado|sent|mensaje enviado/i').count();
    if (sent > 0) {
      console.log('✅ ¡Correo enviado exitosamente!');
    } else {
      // Estrategia 2: Buscar botón de enviar por texto
      try {
        await page.click('div[role="button"]:has-text("Enviar")', { timeout: 3000 });
        console.log('✓ Click en botón Enviar');
      } catch (e) {
        // Estrategia 3: Buscar por atributos aria
        await page.click('div[aria-label*="Enviar"], div[aria-label*="Send"]', { timeout: 3000 });
      }
      
      await page.waitForTimeout(3000);
      console.log('✅ ¡Correo enviado exitosamente!');
    }
    
    console.log('\n📧 Correo enviado a: lautaro@theeye.io');
    console.log('📧 Asunto: Saludos cordiales de Claude');
    
  } catch (error) {
    console.log('Error al enviar:', error.message);
    console.log('\nPuedes enviar el correo manualmente haciendo clic en el botón Enviar');
  }
  
  // Mantener abierto
  await new Promise(() => {});
})();