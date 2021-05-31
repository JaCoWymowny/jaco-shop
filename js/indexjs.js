let btn = document.querySelector('.hamburger');
let div = document.querySelector('.hamburger-list');

btn.addEventListener('click', () =>{
    if(div.style.display === 'none'){
        div.style.display = 'block';
    }else {
        div.style.display = 'none';
    }
})