const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.connectOverCDP('http://localhost:9222');
  const context = browser.contexts()[0];
  const page = context.pages()[0] || await context.newPage();
  
  // Buscar y hacer click en el botón de Redactar
  console.log('Buscando botón de redactar...');
  try {
    // Intentar varios selectores para el botón de redactar
    await page.click('div[gh="cm"]', { timeout: 5000 });
  } catch (e) {
    try {
      await page.click('div.T-I.T-I-KE.L3', { timeout: 5000 });
    } catch (e2) {
      await page.click('text=Redactar', { timeout: 5000 });
    }
  }
  
  console.log('Ventana de redacción abierta');
  await page.waitForTimeout(2000);
  
  // Escribir destinatario
  console.log('Escribiendo destinatario...');
  await page.fill('input[name="to"]', 'lautaro@theeye.io');
  
  // Escribir asunto
  console.log('Escribiendo asunto...');
  await page.fill('input[name="subjectbox"]', 'Saludos cordiales de Claude');
  
  // Escribir el mensaje
  console.log('Escribiendo mensaje...');
  const messageBox = await page.locator('div[role="textbox"][aria-label*="Cuerpo del mensaje"], div[role="textbox"][aria-label*="Message Body"]');
  await messageBox.click();
  await messageBox.fill(`Hola Lautaro,

Espero que este mensaje te encuentre muy bien. 

Te envío un cordial saludo desde Claude, el asistente de IA de Anthropic. Es un placer poder comunicarme contigo a través de este medio.

Que tengas un excelente día!

Saludos cordiales,
Claude (Asistente de IA)`);
  
  console.log('Correo redactado. Listo para enviar.');
  console.log('Puedes revisar el correo y enviarlo manualmente.');
  
  // Mantener abierto
  await new Promise(() => {});
})();