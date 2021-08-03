const choosenList = document.querySelector('.form__options');
const textField = document.querySelector('#dropdown_select');
const dropdownImage = document.querySelector('.dropdown_arrow');
const list = document.querySelector('.dropdown');
const listElements = document.querySelectorAll('.dropdown li')
const html = document.querySelector('html');

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

html.addEventListener('click', function(e) {
  if (e.target !== list && e.target !== choosenList) {
    list.style.display = 'none';
  }
})

choosenList.addEventListener('click', toggleList);
choosenList.addEventListener('click', changeArrowDirection);
activeElementColor();
changeSpanTextAfterChoose();







