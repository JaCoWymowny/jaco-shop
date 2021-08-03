const selectMenu = document.querySelector('.form__options select');
const html = document.querySelector('html');

function changeArrow() {
  if (selectMenu.className === 'closed__image') {
    selectMenu.classList.remove('.closed__image');
    selectMenu.className = 'opened__image';
  }
  else {
    selectMenu.classList.remove('.opened__image');
    selectMenu.className = 'closed__image';
  }
}

html.addEventListener('click', function(e) {
  if (e.target !== selectMenu) {
    selectMenu.className = 'closed__image';
  }
})

selectMenu.addEventListener('click', changeArrow);


// selectMenu.addEventListener('click', function() {
//   if (selectMenu.style.backgroundImage === )
//   selectMenu.style.backgroundImage = 'url("../images/arrow2.png")';
// })
//


//if (selectMenu.style.backgroundImage === "url(\"images/arrow.png\")")

//<script src="js/toogle.js"></script>
