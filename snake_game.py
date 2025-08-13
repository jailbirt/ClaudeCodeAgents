import pygame
import random
import sys
from enum import Enum

# Initialize Pygame
pygame.init()

# Constants
WINDOW_WIDTH = 800
WINDOW_HEIGHT = 600
GRID_SIZE = 20
CELL_SIZE = WINDOW_WIDTH // GRID_SIZE
FPS = 10

# Colors
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
DARK_GREEN = (0, 180, 0)
BLUE = (0, 0, 255)
GRAY = (128, 128, 128)

class Direction(Enum):
    UP = (0, -1)
    DOWN = (0, 1)
    LEFT = (-1, 0)
    RIGHT = (1, 0)

class GameState(Enum):
    START = 1
    PLAYING = 2
    GAME_OVER = 3

class Snake:
    def __init__(self):
        self.body = [(GRID_SIZE // 2, GRID_SIZE // 2)]
        self.direction = Direction.RIGHT
        self.grow_flag = False
        
    def move(self):
        head = self.body[0]
        dx, dy = self.direction.value
        new_head = (head[0] + dx, head[1] + dy)
        
        self.body.insert(0, new_head)
        
        if not self.grow_flag:
            self.body.pop()
        else:
            self.grow_flag = False
            
    def grow(self):
        self.grow_flag = True
        
    def set_direction(self, new_direction):
        # Prevent snake from going back into itself
        dx1, dy1 = self.direction.value
        dx2, dy2 = new_direction.value
        if dx1 + dx2 != 0 or dy1 + dy2 != 0:
            self.direction = new_direction
            
    def check_collision(self):
        head = self.body[0]
        
        # Check wall collision
        if head[0] < 0 or head[0] >= GRID_SIZE or head[1] < 0 or head[1] >= GRID_SIZE:
            return True
            
        # Check self collision
        if head in self.body[1:]:
            return True
            
        return False

class Food:
    def __init__(self):
        self.position = None
        self.spawn()
        
    def spawn(self):
        self.position = (random.randint(0, GRID_SIZE - 1), 
                        random.randint(0, GRID_SIZE - 1))
        
    def respawn(self, snake_body):
        while True:
            self.spawn()
            if self.position not in snake_body:
                break

class Game:
    def __init__(self):
        self.screen = pygame.display.set_mode((WINDOW_WIDTH, WINDOW_HEIGHT))
        pygame.display.set_caption("Snake Game")
        self.clock = pygame.time.Clock()
        self.font = pygame.font.Font(None, 36)
        self.big_font = pygame.font.Font(None, 72)
        self.reset_game()
        self.state = GameState.START
        
    def reset_game(self):
        self.snake = Snake()
        self.food = Food()
        self.score = 0
        self.game_speed = FPS
        
    def handle_events(self):
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                return False
                
            if event.type == pygame.KEYDOWN:
                if self.state == GameState.START:
                    if event.key == pygame.K_SPACE:
                        self.state = GameState.PLAYING
                        
                elif self.state == GameState.PLAYING:
                    if event.key == pygame.K_UP or event.key == pygame.K_w:
                        self.snake.set_direction(Direction.UP)
                    elif event.key == pygame.K_DOWN or event.key == pygame.K_s:
                        self.snake.set_direction(Direction.DOWN)
                    elif event.key == pygame.K_LEFT or event.key == pygame.K_a:
                        self.snake.set_direction(Direction.LEFT)
                    elif event.key == pygame.K_RIGHT or event.key == pygame.K_d:
                        self.snake.set_direction(Direction.RIGHT)
                        
                elif self.state == GameState.GAME_OVER:
                    if event.key == pygame.K_SPACE:
                        self.reset_game()
                        self.state = GameState.PLAYING
                    elif event.key == pygame.K_ESCAPE:
                        return False
                        
        return True
        
    def update(self):
        if self.state != GameState.PLAYING:
            return
            
        self.snake.move()
        
        # Check collision with food
        if self.snake.body[0] == self.food.position:
            self.snake.grow()
            self.food.respawn(self.snake.body)
            self.score += 10
            # Increase speed slightly
            self.game_speed = min(self.game_speed + 0.5, 20)
            
        # Check collision with walls or self
        if self.snake.check_collision():
            self.state = GameState.GAME_OVER
            
    def draw_grid(self):
        for x in range(0, WINDOW_WIDTH, CELL_SIZE):
            pygame.draw.line(self.screen, GRAY, (x, 0), (x, WINDOW_HEIGHT), 1)
        for y in range(0, WINDOW_HEIGHT, CELL_SIZE):
            pygame.draw.line(self.screen, GRAY, (0, y), (WINDOW_WIDTH, y), 1)
            
    def draw(self):
        self.screen.fill(BLACK)
        
        if self.state == GameState.START:
            self.draw_start_screen()
        elif self.state == GameState.PLAYING:
            self.draw_game()
        elif self.state == GameState.GAME_OVER:
            self.draw_game_over_screen()
            
        pygame.display.flip()
        
    def draw_start_screen(self):
        title = self.big_font.render("SNAKE GAME", True, GREEN)
        title_rect = title.get_rect(center=(WINDOW_WIDTH // 2, WINDOW_HEIGHT // 2 - 100))
        self.screen.blit(title, title_rect)
        
        start_text = self.font.render("Press SPACE to Start", True, WHITE)
        start_rect = start_text.get_rect(center=(WINDOW_WIDTH // 2, WINDOW_HEIGHT // 2))
        self.screen.blit(start_text, start_rect)
        
        controls_text1 = self.font.render("Controls: Arrow Keys or WASD", True, WHITE)
        controls_rect1 = controls_text1.get_rect(center=(WINDOW_WIDTH // 2, WINDOW_HEIGHT // 2 + 100))
        self.screen.blit(controls_text1, controls_rect1)
        
    def draw_game(self):
        # Draw grid
        self.draw_grid()
        
        # Draw snake
        for i, segment in enumerate(self.snake.body):
            x = segment[0] * CELL_SIZE
            y = segment[1] * CELL_SIZE
            if i == 0:  # Head
                pygame.draw.rect(self.screen, DARK_GREEN, (x + 2, y + 2, CELL_SIZE - 4, CELL_SIZE - 4))
            else:  # Body
                pygame.draw.rect(self.screen, GREEN, (x + 2, y + 2, CELL_SIZE - 4, CELL_SIZE - 4))
                
        # Draw food
        food_x = self.food.position[0] * CELL_SIZE
        food_y = self.food.position[1] * CELL_SIZE
        pygame.draw.circle(self.screen, RED, 
                         (food_x + CELL_SIZE // 2, food_y + CELL_SIZE // 2), 
                         CELL_SIZE // 2 - 2)
        
        # Draw score
        score_text = self.font.render(f"Score: {self.score}", True, WHITE)
        self.screen.blit(score_text, (10, 10))
        
    def draw_game_over_screen(self):
        # Draw the last frame of the game
        self.draw_game()
        
        # Overlay
        overlay = pygame.Surface((WINDOW_WIDTH, WINDOW_HEIGHT))
        overlay.set_alpha(180)
        overlay.fill(BLACK)
        self.screen.blit(overlay, (0, 0))
        
        # Game over text
        game_over_text = self.big_font.render("GAME OVER", True, RED)
        game_over_rect = game_over_text.get_rect(center=(WINDOW_WIDTH // 2, WINDOW_HEIGHT // 2 - 100))
        self.screen.blit(game_over_text, game_over_rect)
        
        # Final score
        score_text = self.font.render(f"Final Score: {self.score}", True, WHITE)
        score_rect = score_text.get_rect(center=(WINDOW_WIDTH // 2, WINDOW_HEIGHT // 2))
        self.screen.blit(score_text, score_rect)
        
        # Restart options
        restart_text = self.font.render("Press SPACE to Play Again", True, WHITE)
        restart_rect = restart_text.get_rect(center=(WINDOW_WIDTH // 2, WINDOW_HEIGHT // 2 + 60))
        self.screen.blit(restart_text, restart_rect)
        
        quit_text = self.font.render("Press ESC to Quit", True, WHITE)
        quit_rect = quit_text.get_rect(center=(WINDOW_WIDTH // 2, WINDOW_HEIGHT // 2 + 100))
        self.screen.blit(quit_text, quit_rect)
        
    def run(self):
        running = True
        while running:
            running = self.handle_events()
            self.update()
            self.draw()
            self.clock.tick(self.game_speed)
            
        pygame.quit()
        sys.exit()

if __name__ == "__main__":
    game = Game()
    game.run()