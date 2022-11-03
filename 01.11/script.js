const pc = document.querySelector('#pc[alt="PC"]');
const showDescription = () =>{
    console.log(pc);
}
pc.onclick = showDescription;

const links = document.querySelector('a[href="https://megacom.kg"]');
const showLinks = () => {
    console.log(links);
}
links.onmouseenter = showLinks;
