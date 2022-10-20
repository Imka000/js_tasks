const myFunc = (str, num) => {
    let a = [];
    for (let i = 0; i < num; i++){
        a.push(num[i] = str);
    }
    return a;
}
let result =  myFunc("Imran", 4);
console.log(result);


const date = (x) => {
    let b = [];
    for (let i = x.length - 1; i >= 0; i--){
        b.push(x[i]);
    }
    return b;
}

let result1 = date([1, 2, 3]);
console.log(result1);