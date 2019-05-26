let sor = {
  emp1:{f1:{q1:'val1'}},
  emp2:{f1:{q1:'val2'}},
  emp3:{f1:{q1:'val3'}},
  emp4:{f2:{}}

}
let f = (res, key)=>key.split('.').reduce((acc, key)=>acc && acc[key]? acc[key] : undefined, res);
let emp1 = f(sor, 'emp2.f1.q1');
console.log(emp1);

emp1 = sor.emp2.f1.q1;
console.log(emp1);

console.log(f(sor, 'emp4.f1.q1')); //undefined

// console.log(sor.emp4.f1.q1) //error
