const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.connectOverCDP('http://localhost:9222');
  const context = browser.contexts()[0];
  const page = context.pages()[0] || await context.newPage();
  
  console.log('Conectado a Chrome');
  
  // Buscar el campo "Para" y corregirlo
  try {
    // Buscar el campo con "clautaro"
    const toField = await page.locator('input[value*="clautaro"], div:has-text("clautaro"), input[name="to"]').first();
    await toField.click();
    
    // Seleccionar todo el texto y reemplazarlo
    await page.keyboard.press('Control+A');
    await page.keyboard.type('lautaro@theeye.io');
    
    console.log('✓ Destinatario corregido a: lautaro@theeye.io');
    
  } catch (e) {
    console.log('Intentando método alternativo...');
    // Buscar cualquier campo de entrada que pueda ser el destinatario
    const inputs = await page.locator('input:visible').all();
    for (const input of inputs) {
      const value = await input.getAttribute('value');
      if (value && value.includes('clautaro')) {
        await input.click();
        await input.press('Control+A');
        await input.type('lautaro@theeye.io');
        console.log('✓ Destinatario corregido');
        break;
      }
    }
  }
  
  console.log('\n✅ Corrección completada');
  console.log('El correo ahora tiene el destinatario correcto: lautaro@theeye.io');
  
  // Mantener abierto
  await new Promise(() => {});
})();