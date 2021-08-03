const productLine = document.querySelector('.summary_products');
const ordersLine = document.querySelector('.summary_orders');
const packageLine = document.querySelector('.summary_package');
const accountingLine = document.querySelector('.summary_accounting');
const terminalLine = document.querySelector('.summary_terminal');
const totalSum = document.querySelector('.total_sum');
const allOfCostLine = document.querySelectorAll('.summary_calc');
const firstNumberInput = document.querySelector('.numbers_first-field');
const secondNumberInput = document.querySelector('.numbers-second-field');
const packageListChoiceText = document.querySelector('#dropdown_select');
const packageFullList = document.querySelectorAll('.dropdown li');
const firstCheckbox = document.querySelector('#first-value');
const secondCheckbox = document.querySelector('#second-value');

function showProductCost() {
  let sum = 0;
  if (firstNumberInput.value <= 0) {
    productLine.style.display = 'none';
  } else {
    productLine.style.display = 'flex';
    productLine.children[1].textContent = firstNumberInput.value + ' * 5 $';
    sum = firstNumberInput.value * 5;
  }
  productLine.children[2].textContent = sum + ' $';
}

function showOrderCost() {
  let sum = 0;
  if (secondNumberInput.value <= 0) {
    ordersLine.style.display = 'none';
  } else {
    ordersLine.style.display = 'flex';
    ordersLine.children[1].textContent = secondNumberInput.value + ' * 2 $';
    sum = secondNumberInput.value * 2;
  }
  ordersLine.children[2].textContent = sum + ' $';
}



function showCheckboxCost() {
  if (!firstCheckbox.checked) {
    accountingLine.style.display = 'none';
  } else {
    accountingLine.style.display = 'flex';
    accountingLine.children[2].textContent = firstCheckbox.value  + ' $';
  }
  if (!secondCheckbox.checked) {
    terminalLine.style.display = 'none';
  } else {
    terminalLine.style.display = 'flex';
    terminalLine.children[2].textContent =secondCheckbox.value + ' $';
  }
}


firstNumberInput.addEventListener('input', showProductCost);
secondNumberInput.addEventListener('input', showOrderCost);
firstCheckbox.addEventListener('change', showCheckboxCost);
secondCheckbox.addEventListener('change', showCheckboxCost);






// function calculator() {
//   let firstSum = 0;
//   let secondSum = 0;
//   let counter = 0;
//
//   firstNumberInput.addEventListener('input', function () {
//     if (firstNumberInput.value <= 0) {
//       productLine.style.display = 'none';
//     } else {
//       productLine.style.display = 'flex';
//       productLine.children[1].textContent = firstNumberInput.value + ' * 5 $';
//       firstSum = firstNumberInput.value * 5;
//     }
//     productLine.children[2].textContent = firstSum + ' $';
//   })
//
//   secondNumberInput.addEventListener('input', function() {
//     if (secondNumberInput.value <= 0) {
//       ordersLine.style.display = 'none';
//     } else {
//       ordersLine.style.display = 'flex';
//       ordersLine.children[1].textContent = secondNumberInput.value + ' * 2 $';
//       secondSum = secondNumberInput.value * 2;
//     }
//     ordersLine.children[2].textContent = secondSum + ' $';
//   })
//
//   firstCheckbox.addEventListener('change', function() {
//     if (!firstCheckbox.checked) {
//       accountingLine.style.display = 'none';
//     } else {
//       accountingLine.style.display = 'flex';
//       accountingLine.children[2].textContent = firstCheckbox.value  + ' $';
//     }
//   })
//
//   secondCheckbox.addEventListener('change', function() {
//     if (!secondCheckbox.checked) {
//       terminalLine.style.display = 'none';
//     } else {
//       terminalLine.style.display = 'flex';
//       terminalLine.children[2].textContent =secondCheckbox.value + ' $';
//     }
//   })
//
//   packageFullList.forEach((el) => {
//     el.addEventListener('click', function() {
//       packageLine.style.display = 'flex';
//       packageLine.children[1].textContent = el.textContent;
//       packageLine.children[2].textContent = el.value + ' $';
//     })
//   })
// }
// calculator();




