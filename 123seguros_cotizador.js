const { chromium } = require('playwright');

async function cotizarSeguroAuto() {
  console.log('Conectando a Chrome en puerto 9222...');
  
  // Conectar al Chrome existente
  const browser = await chromium.connectOverCDP('http://localhost:9222');
  const contexts = browser.contexts();
  const context = contexts.length > 0 ? contexts[0] : await browser.newContext();
  const page = context.pages().length > 0 ? context.pages()[0] : await context.newPage();
  
  console.log('Navegando a 123seguros.com.ar...');
  await page.goto('https://www.123seguros.com.ar', { waitUntil: 'networkidle' });
  
  // Esperar a que la página cargue completamente
  await page.waitForTimeout(3000);
  
  // Tomar screenshot inicial
  await page.screenshot({ path: 'screenshots/123seguros_inicio.png', fullPage: true });
  console.log('Screenshot guardado: 123seguros_inicio.png');
  
  // Buscar el botón o link para cotizar auto
  try {
    // Intentar encontrar el botón de cotizar auto
    const cotizarAutoSelector = 'a[href*="auto"], button:has-text("auto"), a:has-text("Cotizá tu auto"), button:has-text("Cotizar auto")';
    await page.waitForSelector(cotizarAutoSelector, { timeout: 10000 });
    
    console.log('Haciendo click en cotizar auto...');
    await page.click(cotizarAutoSelector);
    
    // Esperar a que cargue el formulario
    await page.waitForTimeout(3000);
    
    // Tomar screenshot del formulario
    await page.screenshot({ path: 'screenshots/123seguros_formulario.png', fullPage: true });
    console.log('Screenshot guardado: 123seguros_formulario.png');
    
    // Aquí irían los pasos para completar el formulario
    // Por ahora solo mostramos los campos disponibles
    console.log('Analizando campos del formulario...');
    
    // Buscar campos comunes en formularios de seguro
    const campos = {
      marca: await page.locator('select[name*="marca"], input[name*="marca"], #marca').count(),
      modelo: await page.locator('select[name*="modelo"], input[name*="modelo"], #modelo').count(),
      año: await page.locator('select[name*="año"], select[name*="anio"], input[name*="year"], #año, #anio').count(),
      version: await page.locator('select[name*="version"], input[name*="version"], #version').count(),
      codigoPostal: await page.locator('input[name*="postal"], input[name*="cp"], #codigo_postal').count(),
      email: await page.locator('input[type="email"], input[name*="email"], #email').count(),
      telefono: await page.locator('input[type="tel"], input[name*="telefono"], input[name*="phone"], #telefono').count()
    };
    
    console.log('Campos encontrados:', campos);
    
  } catch (error) {
    console.error('Error al buscar botón de cotizar:', error.message);
    console.log('Intentando método alternativo...');
    
    // Método alternativo: buscar en el menú o navegación
    const menuItems = await page.locator('nav a, header a, .menu a').all();
    for (const item of menuItems) {
      const text = await item.textContent();
      if (text && text.toLowerCase().includes('auto')) {
        console.log(`Encontrado link: ${text}`);
        await item.click();
        break;
      }
    }
  }
  
  console.log('\nScript pausado. El navegador permanecerá abierto.');
  console.log('Presiona Ctrl+C para terminar.');
  
  // Mantener el script activo
  await new Promise(() => {});
}

// Función para completar el formulario (para usar después de analizar los campos)
async function completarFormulario(page, datos) {
  console.log('Completando formulario con datos:', datos);
  
  // Ejemplo de cómo completar campos (ajustar según los campos reales)
  if (datos.marca) {
    await page.selectOption('select[name*="marca"]', datos.marca);
    await page.waitForTimeout(1000); // Esperar carga de modelos
  }
  
  if (datos.modelo) {
    await page.selectOption('select[name*="modelo"]', datos.modelo);
    await page.waitForTimeout(1000); // Esperar carga de versiones
  }
  
  if (datos.año) {
    await page.selectOption('select[name*="año"], select[name*="anio"]', datos.año);
  }
  
  if (datos.codigoPostal) {
    await page.fill('input[name*="postal"], input[name*="cp"]', datos.codigoPostal);
  }
  
  if (datos.email) {
    await page.fill('input[type="email"]', datos.email);
  }
  
  if (datos.telefono) {
    await page.fill('input[type="tel"]', datos.telefono);
  }
}

// Crear directorio para screenshots si no existe
const fs = require('fs');
if (!fs.existsSync('screenshots')) {
  fs.mkdirSync('screenshots');
}

// Ejecutar
cotizarSeguroAuto().catch(console.error);