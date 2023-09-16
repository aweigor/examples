// f1.cpp

static struct S {
  int Value() { return 1; }
} s1;

int GetValue1() { return s1.Value(); }