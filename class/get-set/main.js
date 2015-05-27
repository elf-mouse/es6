console.log('class的取值函数（getter）和存值函数（setter）');

class MyClass {
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

console.log(inst.prop);
// 'getter'
