function Uni(name: string): any {
  console.log(`init of ${name}`);
  return function() {
    console.log(`calling ${name}`);
  }
}

@Uni('class')
class MyClass {
  @Uni('property')
  props?: any;

  @Uni('property')
  static props2?: any;

  @Uni('method')
  method(@Uni('method_parameter') _: any) {

  }
  @Uni('method')
  method2(@Uni('method_parameter') _: any) {}

  constructor(@Uni('constructor_parameter') _: any) {}
}

export {};