function hello() {
    alert('Привет,JavaScript');
}
hello()

function number(x = 30) {
    return document.write(x * x * x);
}
number();

function getName() {
    let name = 'Василий';
    alert('Привет,' + name);
    if (name === undefined){
        alert('Привет,гость')
    }
}
getName()

function a(double) {
    let b = [];
    for (let i = 0; i < double.length; i++) {
        b.push(double[i] * 2);
    }
    return console.log(b);
}
a([1, 2, 3, 5]);