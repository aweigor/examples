// f2.cpp

static struct S {
  int Value() { return 2; }
} s2;

int GetValue2() { return s2.Value(); }