// main.cpp

#include <iostream>

extern int GetValue1();
extern int GetValue2();

int main() { std::cout << GetValue1() << "\n" << GetValue2() << "\n"; }

// ❯ g++ odr.cpp f1.cpp f2.cpp
// ❯ ./a.out
// 1
// 1

// ❯ g++ odr.cpp f2.cpp f1.cpp
// ❯ ./a.out
// 2
// 2