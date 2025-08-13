# Playwright Setup - ClaudeCodeAgentMaker

## Configuración que Funciona

### Instalación
```bash
npm install playwright
npx playwright install chromium
```

### Paths Importantes
- Navegadores instalados en: `node_modules/playwright-core/.local-browsers/`
- El MCP busca en: `/home/jailbirt/.cache/ms-playwright/` (NO USAR)

### Solución para Evitar Problemas
**Usar scripts directos con Node.js en lugar del MCP de Playwright**

### Ejemplo de Script Funcional
```javascript
const { chromium } = require('playwright');

async function navegarSitio() {
  const browser = await chromium.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.goto('https://ejemplo.com');
  
  // Mantener abierto
  await new Promise(() => {});
}

navegarSitio().catch(console.error);
```

### Scripts Creados y Funcionando
1. `navigate_mercadolibre.js` - Navega a MercadoLibre
2. `open_mercadolibre.js` - Abre MercadoLibre simple
3. `123seguros_cotizador.js` - Cotizador de seguros San Cristóbal

### Para Usar Chrome de Windows Existente
1. Ejecutar Chrome con: `chrome.exe --remote-debugging-port=9222`
2. Conectar desde script con: `chromium.connectOverCDP('http://localhost:9222')`