const { chromium } = require('playwright');

(async () => {
  console.log('Conectando a Chrome existente...');
  
  // Conectar al Chrome que ya está corriendo con tu sesión
  const browser = await chromium.connectOverCDP('http://localhost:9222');
  
  console.log('Conectado exitosamente');
  
  // Obtener el contexto actual
  const contexts = browser.contexts();
  const context = contexts[0] || await browser.newContext();
  
  // Obtener la página actual o crear una nueva
  const pages = context.pages();
  const page = pages[0] || await context.newPage();
  
  // Navegar a MercadoLibre
  console.log('Navegando a MercadoLibre Argentina...');
  await page.goto('https://www.mercadolibre.com.ar');
  
  console.log('Navegación completada');
  
  // Mantener el navegador abierto
  console.log('Presiona Ctrl+C para cerrar');
})();