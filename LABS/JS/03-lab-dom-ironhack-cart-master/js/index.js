// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').valueAsNumber;
  const calcSubtotal = parseFloat(price) * quantity;
  product.querySelector('.subtotal span').innerText = calcSubtotal;

  return calcSubtotal;
  //... your code goes here
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  let total = 0;
  allProducts.forEach((item) => (total += updateSubtotal(item)));
  // for loop
  // for (let item of allProducts) { totalValue += updateSubtotal(item)}
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const row = target.parentNode.parentNode;
  const parent = row.parentNode;
  parent.removeChild(row);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  // 1st Part - assigning variables which we need later
  const createRow = document.querySelector('.create-product');
  let newProdNameInput = createRow.querySelector('input');
  let newProdNameValue = newProdNameInput.value;
  let newProdPriceInput = createRow.querySelector("input[type='number']");
  let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2);

  // 2nd Pard
  const newTableRow = document.createElement('tr');
  newTableRow.className = 'product';
  newTableRow.innerHTML = `
        <td class="name">
        <span>${newProdNameValue}</span>
      </td>
      <td class="price">$<span>${newProdPriceValue}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
  `;

  //3rd Part
  // Agarrr el padre de los rows mediante un poco de DOM
  const parent = document.querySelector('#cart tbody');

  //assignar newTable row con toda la info al parent
  parent.appendChild(newTableRow);

  //recibir logica de botones
  const removeBtn = newTableRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  // limpiar los inputs
  newProdNameInput.value = '';
  newProdPriceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  for (let removeBtn of removeBtns) {
    removeBtn.addEventListener('click', removeProduct);
  }
  // removeBtns.forEach((button) =>
  //   button.addEventListener('click', removeProduct)
  // );

  // DOM Para crear productos
  const createBtn = document.querySelector('#create');
  if (createBtn) {
    createBtn.addEventListener('click', createProduct);
  }
});
