export function addMenuElement() {
  // create new div
  const menuDiv = document.createElement('div');
  menuDiv.className = 'menu';

  // drinks heading
  const drinksHeader = document.createElement('h1');
  drinksHeader.textContent = 'Drinks';
  drinksHeader.className = 'drinks-header';

  // create list with 6 drink items
  const drinksList = document.createElement('ul');
  drinksList.innerHTML = `
    <li>Matcha</li>
    <li>Matcha Latte</li>
    <li>Matcha Frappe</li>
    <li>Matcha Tea Float</li>
    <li>Matcha Lemonade</li>
    <li>Matcha Bubble Tea</li>
  `;

  // desserts heading
  const dessertsHeader = document.createElement('h1');
  dessertsHeader.textContent = 'Desserts';
  dessertsHeader.className = 'desserts-header';

  // create list with 6 dessert items
  const dessertsList = document.createElement('ul');
  dessertsList.innerHTML = `
    <li>Matcha Soft Serve</li>
    <li>Matcha Shaved Ice</li>
    <li>Matcha Brownie</li>
    <li>Matcha Tiramisu</li>
    <li>Matcha Mochi</li>
    <li>Matcha Cheesecake</li>
  `;

  // add elements to new div
  menuDiv.appendChild(drinksHeader);
  menuDiv.appendChild(drinksList);
  menuDiv.appendChild(dessertsHeader);
  menuDiv.appendChild(dessertsList);

  // add div into the DOM
  document.getElementById('content').appendChild(menuDiv);
}
