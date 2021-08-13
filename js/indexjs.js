const btn = document.querySelector('.hamburger');
const div = document.querySelector('.hamburger-list');
const closeMenuIcon = document.querySelector('.fa-bars');
const openMenuIcon = document.querySelector('.fa-times-circle');


btn.addEventListener('click', function() {
    if(div.style.display === 'block'){
        div.style.display = 'none';
        closeMenuIcon.classList.remove('hidden');
        openMenuIcon.classList.add('hidden');
    }else {
        div.style.display = 'block';
        closeMenuIcon.classList.add('hidden');
        openMenuIcon.classList.remove('hidden');
    }
})