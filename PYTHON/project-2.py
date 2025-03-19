import pygame
import math

pygame.init()
screen_width = 500
screen_height = 500
screen = pygame.display.set_mode(( screen_width, screen_height))
pygame.display.set_caption("Геометрические фигуры")

# задаем название окна
pygame.display.set_caption("Белый фон")


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
  for ivent in pygame.event.get():
    if ivent.type == pygame.QUIT:
      pygame.quit()
      exit()

