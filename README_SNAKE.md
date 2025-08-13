# Snake Game en Python

Un juego clásico de Snake implementado en Python usando Pygame.

## Requisitos

- Python 3.6+
- Pygame

## Instalación

1. Instala Pygame:
```bash
pip install pygame
```

## Cómo jugar

1. Ejecuta el juego:
```bash
python snake_game.py
```

2. Controles:
   - **Teclas de dirección** o **WASD**: Mover la serpiente
   - **Espacio**: Iniciar juego / Reiniciar después de Game Over
   - **ESC**: Salir del juego (en la pantalla de Game Over)

## Características

- Serpiente que crece al comer comida
- Incremento de velocidad conforme crece la serpiente
- Sistema de puntuación
- Pantallas de inicio y game over
- Detección de colisiones con paredes y con la propia serpiente
- Gráficos simples pero atractivos

## Reglas del juego

1. La serpiente se mueve continuamente en la dirección actual
2. Come la comida roja para crecer y ganar puntos
3. Evita chocar con las paredes o contigo mismo
4. El juego se vuelve más rápido conforme creces

¡Disfruta el juego!