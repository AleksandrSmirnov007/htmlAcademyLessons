import pygame
import time

pygame.init()
screen_width = 1000
screen_height = 500
screen = pygame.display.set_mode(( screen_width, screen_height))

background_color = (255, 255, 255)

screen.fill(background_color)

# рисуем прямоугольник
black = (0, 0, 0)

rect_x = 50
rect_y = 50
rect_width = 50
rect_height = 50
pygame.draw.rect(screen, black, (rect_x, rect_y, rect_width, rect_height))

pygame.display.flip()

# показываем окно, пока пользователь не нажмет кнопку "Закрыть"

while True:
  screen.fill(background_color)
  if rect_x <= 200:
    rect_x = rect_x + 1
  if rect_x > 200:
    rect_y = rect_y + 1
  if rect_y > 200:
    rect_x = rect_x - 2
  if rect_x < 0:
    rect_y = rect_y - 2
  time.sleep(0.001)

  pygame.draw.rect(screen, black, (rect_x, rect_y, rect_width, rect_height))
  pygame.display.flip()

  for ivent in pygame.event.get():
    if ivent.type == pygame.QUIT:
      pygame.quit()
      exit()

