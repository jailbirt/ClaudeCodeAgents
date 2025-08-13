const { chromium } = require('playwright');

async function connectToWindowsChrome() {
  console.log('Conectando al Chrome de Windows...\n');
  console.log('⚠️  IMPORTANTE: Primero debes iniciar Chrome en Windows con debugging habilitado:');
  console.log('   1. Cierra todas las instancias de Chrome');
  console.log('   2. Abre CMD o PowerShell en Windows');
  console.log('   3. Ejecuta: chrome.exe --remote-debugging-port=9222');
  console.log('   O usa el archivo launch_chrome_debug.bat que creamos\n');
  
  console.log('Intentando conectar en 5 segundos...\n');
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  try {
    // Conectar al Chrome existente via CDP (Chrome DevTools Protocol)
    console.log('🔌 Conectando a Chrome en localhost:9222...');
    const browser = await chromium.connectOverCDP('http://localhost:9222');
    
    console.log('✅ ¡Conectado exitosamente a tu Chrome de Windows!');
    
    // Obtener contextos y páginas existentes
    const contexts = browser.contexts();
    console.log(`📑 Contextos encontrados: ${contexts.length}`);
    
    // Usar el primer contexto o crear uno nuevo
    const context = contexts[0] || await browser.newContext();
    
    // Obtener páginas abiertas
    const pages = context.pages();
    console.log(`📄 Pestañas abiertas: ${pages.length}`);
    
    // Usar la primera página o crear una nueva
    let page;
    if (pages.length > 0) {
      page = pages[0];
      console.log('   Usando pestaña existente');
    } else {
      page = await context.newPage();
      console.log('   Creando nueva pestaña');
    }
    
    // Navegar a 123seguros.com.ar
    console.log('\n🌐 Navegando a 123seguros.com.ar...');
    await page.goto('https://www.123seguros.com.ar');
    
    console.log('✅ Navegación exitosa');
    console.log('\n📌 Ahora puedes:');
    console.log('   - Interactuar manualmente con la página');
    console.log('   - El script puede automatizar acciones');
    console.log('   - Tu sesión de Chrome se mantiene (cookies, login, etc.)');
    
    // Buscar opciones de seguro completo
    console.log('\n🔍 Buscando opciones de seguro completo...');
    
    await page.waitForTimeout(3000);
    
    // Intentar hacer clic en cotizar
    try {
      await page.click('button:has-text("Cotizar")', { timeout: 5000 });
      console.log('✓ Click en botón Cotizar');
    } catch (e) {
      console.log('→ Botón Cotizar no encontrado');
    }
    
    // Buscar seguro completo
    try {
      const completo = await page.$('text=/completo|todo.*riesgo/i');
      if (completo) {
        await completo.click();
        console.log('✓ Opción de seguro completo encontrada');
      }
    } catch (e) {
      console.log('→ Continúa manualmente para seleccionar seguro completo');
    }
    
    console.log('\n✅ Chrome conectado y listo');
    console.log('El script permanecerá activo. Presiona Ctrl+C para desconectar.\n');
    
    // Mantener la conexión activa
    await new Promise(() => {});
    
  } catch (error) {
    console.error('\n❌ Error al conectar:', error.message);
    
    if (error.message.includes('ECONNREFUSED')) {
      console.log('\n💡 Solución:');
      console.log('1. Asegúrate de que Chrome esté ejecutándose con --remote-debugging-port=9222');
      console.log('2. Verifica que no haya firewall bloqueando el puerto 9222');
      console.log('3. Prueba ejecutar el archivo launch_chrome_debug.bat');
    }
  }
}

connectToWindowsChrome().catch(console.error);