const a = () =>{
    let birth = parseFloat(prompt('Введите свой год рождения'));
    let current = parseFloat(prompt('Введите текущий год'));
    alert(`Вам ${birth - current} лет`);
}
a();