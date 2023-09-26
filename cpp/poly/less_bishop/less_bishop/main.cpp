#include <iostream>

const int BS = 8; // board size
const int CTR = 4; // center of the board

struct Figure
{
    int i;
    int j;
    
    Figure()
    {
        std::cout << "Enter line in range of 1-8:";
        std::cin >> i;
        
        if (i > BS or i < 1) {
            throw std::invalid_argument("Line must be in range of 1-8");
        }
        
        std::cout << "Enter column in range of 1-8:";
        std::cin >> j;
        
        if (j > BS or j < 1) {
            throw std::invalid_argument("column must be in range of 1-8");
        }
    };
};

Figure f;

void printPosition(int str, int col, int size) {
    if (str > 0 and str <= size and col > 0 and col <= size) {
        std::cout << "(" << str << ", " << col << ")" << '\n';
    }
}

int main() {
    int kw = 0; // kernel width
    
    std::cout << "figure position: " << '\n';

    printPosition(f.i, f.j, BS);
    
    std::cout << "figure moves at: " << '\n';
    
    while (++kw <= (CTR + std::abs(CTR - std::min(f.i, f.j)))) {
        //--DEBUG std::cout << "(kernel width: " << nh << ")" << '\n';
        printPosition(f.i + (kw * -1), f.j + (kw * -1), BS); // top left
        printPosition(f.i + (kw * -1), f.j + (kw * +1), BS); // top right
        printPosition(f.i + (kw * +1), f.j + (kw * -1), BS); // bottom left
        printPosition(f.i + (kw * +1), f.j + (kw * +1), BS); // bottom right
    }
    
    return 0;
}
