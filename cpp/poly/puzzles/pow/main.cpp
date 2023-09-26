#include <iostream>
#include <cmath>

bool isInteger(const std::string& s) {
    return !s.empty() && s.find_first_not_of("0123456789") == std::string::npos;
}

int main(int argc, const char * argv[]) {
    std::string userInput;
    
    float number = 0.0;
    int power = 0;
    
    while (true) {
        std::cout << "Введите число: " << '\n';
        std::cin >> userInput;
        
        try
        {
            number = std::stof(userInput);
        }
        catch (...)
        {
            std::cout << "ЧИСЛО *** ..." << '\n';
            continue;
        }
        
        number = stoi(userInput);
        
        std::cout << "Введите степень (целое число): " << '\n';
        std::cin >> userInput;
        
        if (not isInteger(userInput)) {
            std::cout << "ЦЕЛОЕ ЧИСЛО *** ..." << '\n';
            continue;
        }
        
        power = stoi(userInput);
        
        break;
    }
    
    std::cout << "Результат: " << std::pow(number, power) << '\n';
    
    return 0;
}
