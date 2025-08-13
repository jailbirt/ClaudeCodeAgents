const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.connectOverCDP('http://localhost:9222');
  const context = browser.contexts()[0];
  const page = context.pages()[0] || await context.newPage();
  
  console.log('Conectado a Chrome');
  
  // Asegurarnos de estar en Gmail
  const currentUrl = page.url();
  if (!currentUrl.includes('mail.google.com')) {
    console.log('Navegando a Gmail...');
    await page.goto('https://mail.google.com');
    await page.waitForTimeout(5000);
  }
  
  // Buscar y hacer click en Redactar con múltiples estrategias
  console.log('Buscando botón de redactar...');
  
  try {
    // Estrategia 1: Tecla de acceso rápido
    await page.keyboard.press('c');
    console.log('Usado atajo de teclado "c"');
    await page.waitForTimeout(2000);
  } catch (e) {
    // Estrategia 2: Buscar por texto
    try {
      await page.click('div:has-text("Redactar")', { timeout: 3000 });
    } catch (e2) {
      // Estrategia 3: Buscar por clase común
      await page.click('.T-I.T-I-KE', { timeout: 3000 });
    }
  }
  
  console.log('Esperando ventana de redacción...');
  await page.waitForTimeout(3000);
  
  // Intentar llenar los campos con diferentes selectores
  console.log('Llenando campos del correo...');
  
  // Para el destinatario
  try {
    // Buscar campo "Para" por diferentes métodos
    const toField = await page.locator('input[name="to"], div[name="to"], textarea[name="to"], input[aria-label*="Para"], div[aria-label*="To"], input[aria-label*="Recipients"]').first();
    await toField.click();
    await toField.fill('lautaro@theeye.io');
    console.log('✓ Destinatario agregado');
  } catch (e) {
    console.log('Intentando método alternativo para destinatario...');
    await page.keyboard.type('lautaro@theeye.io');
    await page.keyboard.press('Tab');
  }
  
  await page.waitForTimeout(1000);
  
  // Para el asunto
  try {
    const subjectField = await page.locator('input[name="subjectbox"], input[name="subject"], input[aria-label*="Asunto"], input[aria-label*="Subject"], input[placeholder*="Asunto"], input[placeholder*="Subject"]').first();
    await subjectField.click();
    await subjectField.fill('Saludos cordiales de Claude');
    console.log('✓ Asunto agregado');
  } catch (e) {
    console.log('Intentando método alternativo para asunto...');
    await page.keyboard.type('Saludos cordiales de Claude');
    await page.keyboard.press('Tab');
  }
  
  await page.waitForTimeout(1000);
  
  // Para el cuerpo del mensaje
  try {
    const bodyField = await page.locator('div[role="textbox"][aria-label*="Cuerpo"], div[role="textbox"][aria-label*="Body"], div[contenteditable="true"][aria-label*="Message"], div.editable[contenteditable="true"]').first();
    await bodyField.click();
    await bodyField.fill(`Hola Lautaro,

Espero que este mensaje te encuentre muy bien.

Te envío un cordial saludo desde Claude, el asistente de IA de Anthropic. Es un placer poder comunicarme contigo a través de este medio.

Que tengas un excelente día!

Saludos cordiales,
Claude (Asistente de IA)`);
    console.log('✓ Mensaje escrito');
  } catch (e) {
    console.log('Intentando método alternativo para el mensaje...');
    await page.keyboard.type(`Hola Lautaro,

Espero que este mensaje te encuentre muy bien.

Te envío un cordial saludo desde Claude, el asistente de IA de Anthropic. Es un placer poder comunicarme contigo a través de este medio.

Que tengas un excelente día!

Saludos cordiales,
Claude (Asistente de IA)`);
  }
  
  console.log('\n✅ Correo redactado completamente');
  console.log('📧 Para: lautaro@theeye.io');
  console.log('📧 Asunto: Saludos cordiales de Claude');
  console.log('\nEl correo está listo para enviar. Puedes hacer clic en el botón Enviar.');
  
  // Mantener abierto
  await new Promise(() => {});
})();