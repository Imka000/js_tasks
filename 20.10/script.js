const numbers = [-5,  10,  5, 55,  -1, 22,  -4 , 36, -45];
const negative = numbers.filter(number => number < 0);
console.log(negative);

const a = (x, y) => {
    let condition = x > y ? 1 : -1;
    return x === y ? 0 : condition;
}
let result = a(100,120);
alert(result);