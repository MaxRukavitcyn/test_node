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

let hui = new Hui();
console.log(hui);
