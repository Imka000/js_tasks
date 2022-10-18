let a = [1, 2, 5, 6, 88, 5];
let result = 0;
for (let i = 0; i < a.length; i++){
    result += a[i];
}
console.log(result);


let x = [10, 20, 30, 70, 520, 140, 150, 123, 124, 125];
let result2 = 0;
for(let i = 0; i < x.length; i++){
    result2 += x[i] * x[i];
}
console.log(result2);


let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let c = [];
for (let i = 0; i < b.length; i++){
    if (b[i] % 2 === 0){
        c.push(b[i]);
    }
}
console.log(c);