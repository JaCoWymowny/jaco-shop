const choosenList = document.querySelector('.form__options');
const textField = document.querySelector('#dropdown_select');
const dropdownImage = document.querySelector('.dropdown_arrow');
const list = document.querySelector('.dropdown');
const listElements = document.querySelectorAll('.dropdown li');

const btn = document.querySelector('.hamburger');
const div = document.querySelector('.hamburger-list');
const closeMenuIcon = document.querySelector('.fa-bars');
const openMenuIcon = document.querySelector('.fa-times-circle');
const title = document.querySelector('.page-logo');


// Hamburger Menu
btn.addEventListener('click', function() {
  if(div.style.display === 'flex'){
    div.style.display = 'none';
    closeMenuIcon.classList.remove('hidden');
    openMenuIcon.classList.add('hidden');
    title.style.display = 'block';
  }else {
    div.style.display = 'flex';
    closeMenuIcon.classList.add('hidden');
    openMenuIcon.classList.remove('hidden');
    title.style.display = 'none';
  }
})

// dropdown Open/close style
function toggleList() {
  if (list.style.display === 'none') {
    list.style.display = 'flex';
  } else {
    list.style.display = 'none';
  }
}

function changeArrowDirection() {
  if (list.style.display === 'flex') {
  dropdownImage.style.transform = 'rotate(180deg)';
  } else {
    dropdownImage.style.transform = '';
  }
}

function activeElementColor() {
  listElements.forEach((el) => {
    el.addEventListener('mouseover', function() {
      this.style.background = 'var(--primary-color)';
    })
    el.addEventListener('mouseout', function() {
      this.style.background = 'var(--white-color)';
    })
  })
}

function changeSpanTextAfterChoose() {
  listElements.forEach((el) => {
    el.addEventListener('click', function() {
      textField.innerHTML = el.textContent;
    })
  })
}

choosenList.addEventListener('click', toggleList);
choosenList.addEventListener('click', changeArrowDirection);
activeElementColor();
changeSpanTextAfterChoose();







