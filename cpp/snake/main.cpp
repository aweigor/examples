//
//  main.cpp
//  snake2
//
//  Created by igor on 12.09.2023.
//

#include <iostream>
#include <ncurses.h>

int main()
{
    initscr();
    printw("Hello, world.");
    refresh();
    getch();
    endwin();
    return 0;
}
