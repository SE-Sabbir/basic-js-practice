// premitive data type example

let a = 10;
let b = a

console.log('the result of a =>', a)
console.log('the result of b =>', b)
b = 20;
console.log('2nd time the result of b =>', b)
console.log('2nd time the result of a =>', a)


// non- premitive data type example

let obj1 = {
    a: 20
}
let obj2 = obj1;

console.log('the result of obj1 =>', obj1)
console.log('the result of obj2 =>', obj2)

obj2.a = 15;
console.log('2nd time the result of obj2 =>', obj2)
console.log('2nd time the result of obj1 =>', obj1)

