#include <iostream>

struct Figure
{
    int i;
    int j;
    
    Figure()
    {
        std::cout << "Enter line in range of 1-8:";
        std::cin >> i;
        
        if (i > 8 or i < 1) {
            throw std::invalid_argument("Line must be in range of 1-8");
        }
        
        std::cout << "Enter column in range of 1-8:";
        std::cin >> j;
        
        if (j > 8 or j < 1) {
            throw std::invalid_argument("column must be in range of 1-8");
        }
    };
};

Figure f;

int main() {
    std::cout << "f.i is: " << f.i << '\n';
    std::cout << "f.j is: " << f.j << '\n';
    
    return 0;
}
