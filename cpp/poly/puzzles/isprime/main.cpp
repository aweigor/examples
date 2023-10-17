#include <iostream>
using namespace std;

int main() {
  
  int i, n;
  bool is_prime = true;

  cout << "Введите положительное целое число: " << '\n';
  cin >> n;

  if (n < 0) {
    cout << n << "Ошибка, введено отрицательное число." << '\n';
    return 1;
  }

  // 0 and 1 are not prime numbers
  if (n == 0 || n == 1) {
    is_prime = false;
  }

  // loop to check if n is prime
  for (i = 2; i <= n/2; ++i) {
    if (n % i == 0) {
      is_prime = false;
      break;
    }
  }

  if (is_prime)
    cout << n << " Число простое." << '\n';
  else
    cout << n << " Число не является простым" << '\n';

  return 0;
}
