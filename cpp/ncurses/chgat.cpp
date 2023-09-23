#include <ncurses.h>

int main(int argc, char *argv[])
{
  initscr(); // curses mode
  
  start_color();

  init_pair(1, COLOR_CYAN, COLOR_BLACK);

  printw("Big string Big string Big string Big string Big string Big string Big string");

  mvchgat(0, 0, -1, A_BLINK, 1, NULL); // <pos1, pos2, num_char(-1 - till end), attribute, color index (0 - no color), ?? always NULL>

  refresh();
  getch();
  endwin();

  return 0;
}
