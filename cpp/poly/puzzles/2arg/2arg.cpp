#include <iostream>

bool isInteger(const std::string& s) {
    return !s.empty() && s.find_first_not_of("0123456789") == std::string::npos;
}

int main(int argc, const char * argv[]) {
    // insert code here...
    
    std::string userInput;
    
    int itr = 0; // number of iterations
    int sum = 0; // summary
    int aver = 0; // average
    int max = std::numeric_limits<int>::min(); // maximum
    int min = std::numeric_limits<int>::max();; // minimum positive
    int ct; // current input
    
    
    while (true) {
        std::cout << "Введите любое целое число: " << '\n';
        std::cin >> userInput;
        
        if (not isInteger(userInput)) {
            std::cout << "ЦЕЛОЕ ЧИСЛО *** ..." << '\n';
            continue;
        }
            
        
        ct = stoi(userInput);
        
        if (ct == 0)
            break;
        
        sum += ct;
        aver = (aver + ct) / 2;
        
        if (ct > max)
            max = ct;
        
        if (ct > 0 and ct < min)
            min = ct;
        
        ++itr;
    }
    
    std::cout << "Сумма: " << sum << '\n';
    std::cout << "Среднее: " << aver << '\n';
    std::cout << "Максимальное: " << max << '\n';
    std::cout << "Минимальное: " << min << '\n';
    std::cout << "Количество введенных чисел: " << itr << '\n';
    
    
    return 0;
}
