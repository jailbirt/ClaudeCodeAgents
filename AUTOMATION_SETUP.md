# Configuración de Automatización Web - ClaudeCodeAgentMaker

## ⚡ Setup Rápido

### 1. Verificar si Chrome está corriendo
```bash
# En WSL/Linux
curl http://localhost:9222 2>/dev/null || echo "Chrome NO está corriendo"
```

### 2. Iniciar Chrome con debugging remoto
```bash
# En Windows CMD/PowerShell
chrome.exe --remote-debugging-port=9222

# O usar el archivo batch creado
start_chrome_debug.bat
```

### 3. Conectar desde Playwright
```javascript
const { chromium } = require('playwright');
const browser = await chromium.connectOverCDP('http://localhost:9222');
```

## 📁 Scripts Disponibles

- **gmail_compose_better.js** - Redactar correos en Gmail
- **send_email.js** - Enviar correos
- **fix_email_recipient.js** - Corregir destinatarios
- **connect_and_navigate.js** - Navegación básica
- **123seguros_cotizador.js** - Cotizar seguros

## ❗ Importante

- **NO** instalar Playwright browsers (`npx playwright install`)
- **SIEMPRE** usar el Chrome existente en puerto 9222
- **VERIFICAR** primero si Chrome está corriendo antes de cualquier automatización

## 🔄 Proceso de Automatización

1. Claude verifica si Chrome está en puerto 9222
2. Si no está, pide al usuario que lo inicie
3. Se conecta y ejecuta las acciones solicitadas
4. Mantiene la sesión activa (cookies, login, etc.)

## 💡 Notas

- El Chrome mantiene tu sesión (estás logueado en Gmail, etc.)
- Los scripts se mantienen activos con `await new Promise(() => {})`
- Usar Ctrl+C para terminar los scripts