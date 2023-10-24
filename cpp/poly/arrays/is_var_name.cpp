#include <iostream>
#include <cctype>

bool isVarName(char testing[]) {
  bool ret = true;
  
  if (!std::isalpha(testing[0]) && !(testing[0] == '_')) return false;
  
  for (int i = 1; testing[i] != '\0'; i++)
  {
    if ( !std::isalpha(testing[i])
      && !std::isdigit(testing[i])
      && !(testing[i] == '_')
    ) {
      ret = false;
      break;
    }
  };
  
  return ret;
};

void test(char *varName) {
  std::cout << (isVarName(varName) ? "passed" : "not passed") << '\n';
};

int main(int argc, const char * argv[]) {
  
  char var_name_1[] = "some_var";
  char var_name_2[] = "1some_var";
  char var_name_3[] = "some&var";
  char var_name_4[] = "some_вар";
  
  ::test(var_name_1);
  ::test(var_name_2);
  ::test(var_name_3);
  ::test(var_name_4);
  
  return 0;
}
