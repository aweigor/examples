#include <iostream>
#include <string>

bool isNumberSubstring(int source, int target) {
    char sourceString[10];
    char targetString[10];
    sprintf(sourceString, "%d", source);
    sprintf(targetString, "%d", target);
    return std::strstr(sourceString, targetString);
}

int main(int argc, const char * argv[]) {
    std::cout << isNumberSubstring(890, 100);
    return 0;
}
