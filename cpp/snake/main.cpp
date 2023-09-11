#include <iostream>
using namespace std;

#include <windows.h>

int nScreenWidth = 120;
int nScreenHeight = 30;

int main()
{
  wchar_t *screen = new wchar_t[nScreenWidth * nScreenHeight];
  for (int i = 0; i < nScreenWidth * nScreenHeight; i++) screen[i] = L' ';
  HANDLE hConsole = CreateConsoleScreenBuffer(GENERIC_READ | GENERIC_WRITE, 0, NULL, CONSOLE_TEXTMODE_BUFFER, NULL);
  SetConsoleActiveScreenBuffer(hConsole);
  DWORD dwBytesWritten = 0;

  return 0;
}

