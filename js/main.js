let toggle = document.querySelector('.toggle');
let nav = document.querySelector('nav');
let close = document.querySelector('.close');
let nameCom = document.querySelector('.nam-comp');
let most_page = document.querySelector('.most-page');
let most_link_ul = document.querySelector('.most-link ul');
let minus = document.querySelector('.fa-minus');
let plus = document.querySelector('.fa-plus');
let par = document.querySelector('.par');
toggle.onclick = function(){
    nav.classList.add('open'); 
    toggle.style.display = 'none';
    nameCom.style.display = 'none';
};
close.onclick = function(){
    nav.classList.remove('open');
    toggle.style.display = 'block';
    nameCom.style.display = 'block';
};
most_page.onmouseover = function(){
    most_link_ul.style.display = 'block';
}
most_link_ul.onmouseover = function(){
    most_link_ul.style.display = 'block';
}
most_link_ul.onmouseout = function(){
    most_link_ul.style.display = 'none';
}
/*Plus & Minus Onclick*/
plus.onclick = function(){
    par.style.display = 'inline';
}








// document.onkeyup = function (e){
//     if(e.key === " "){
//         nav.classList.remove("open");
//     }
// };




