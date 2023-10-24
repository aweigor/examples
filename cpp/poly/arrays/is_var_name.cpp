#include <iostream>
#include <cctype>

bool isVarName(char testing[], int size) {
  bool ret = true;
  
  if (std::isdigit(testing[0])) return false;
  
  for (int i = 1; i < size; i++)
  {
    
    if (not std::isalpha(testing[i])
        && !std::isdigit(testing[i])
        && !(testing[i] == '_')
    ) {
      ret = false;
      break;
    }
  };
  
  return ret;
};

void test(char *varName, int size) {
  std::cout << (isVarName(varName, size) ? "passed" : "not passed") << '\n';
};

int main(int argc, const char * argv[]) {
  
  char var_name_1[] = "some_var";
  char var_name_2[] = "1some_var";
  char var_name_3[] = "some&var";
  char var_name_4[] = "some_вар";
  
  ::test(var_name_1, 8);
  ::test(var_name_2, 9);
  ::test(var_name_3, 8);
  ::test(var_name_4, 8);
  
  return 0;
}
