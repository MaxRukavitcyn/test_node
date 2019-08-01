interface MyTuple extends Array<number | string> {
    0: number;
    1: string;
    length: 2; // это литеральный тип '2', это не значение!
}
const mytuple: MyTuple = [123, 'abc'];
console.log(mytuple);

function f(hui: string): string {
    return "hui "+ hui;
}

console.log(f('hui'));

class MyType {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

function f1(mess: MyType): MyType {
    return mess;
}

console.log(f1(new MyType("Max", 28)));

