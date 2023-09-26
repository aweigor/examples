#include <iostream>
#include <map>

std::map<int, std::string> RomanBase;
int baseIndex[5] = {1, 5, 10, 50, 100};

void fillBase() {
    RomanBase[baseIndex[4]] = "C";
    RomanBase[baseIndex[3]] = "L";
    RomanBase[baseIndex[2]] = "X";
    RomanBase[baseIndex[1]] = "V";
    RomanBase[baseIndex[0]] = "I";
}

bool isInteger(const std::string& s) {
    return !s.empty() && s.find_first_not_of("0123456789") == std::string::npos;
}

std::string baseToRoman(int base) {
    return RomanBase[baseIndex[base]];
}

int baseToDecimal(int base) {
    return baseIndex[base];
}

std::string romanDecompose(int n, int base, std::string result = "")
{
    int rcount = n / baseToDecimal(base); // number of roman signs
    int next = n % baseToDecimal(base);
    
    while (rcount--) {
        result += baseToRoman(base);
    }
    
    if (next > 0 && base--) {
        return romanDecompose(next, base, result);
    }
    
    return result;
}

int main(int argc, const char * argv[])
{
    std::string userInput;
    
    fillBase();
    
    while(true) {
        std::cout << "Введите целое положительное число меньше 400: " << '\n';
        std::cin >> userInput;
        
        if (not isInteger(userInput)
            or stoi(userInput) < 0
            or stoi(userInput) > 400
        ) {
            std::cout << "ЦЕЛОЕ ЧИСЛО МЕНЬШЕ 400 *** ..." << '\n';
            continue;
        }
        
        break;
    }
    
    std::cout << "Римская запись числа " << userInput << ":" << '\n';
    std::cout << romanDecompose(stoi(userInput), 4) << '\n';
    
    return 0;
}
