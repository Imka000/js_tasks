const ul = document.querySelector('#ul');
const btn = document.querySelector('#btn');
const showParagraph = () =>{
    const liParagraph = document.createElement('li');
    liParagraph.innerText = 'пункт';
    ul.append(liParagraph);
};

btn.addEventListener('click', showParagraph);
