let capital = prompt('Столица Кыргызстана?');
if(capital === 'Бишкек'){
    alert('Верно');
} else{
    alert('Не знаете?');
}

let a = prompt('Кто пришел?');
if (a === null){
    alert('Вход отменен');
} else{
    alert('Я вас не знаю');
}
let b = prompt('Пароль');
if(b === 'Черный властелин'){
    alert('Добро пожаловать');
} else if(b === null){
    alert('Вход отменен');
} else{
    alert('Пароль неверный');
}