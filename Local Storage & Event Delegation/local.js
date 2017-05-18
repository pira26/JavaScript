const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {

    e.preventDefault();

    const text = (this.querySelector('[name=item]')).value;

    const item = {
      text,
      done: false
    };

    items.push(item);
    populate(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();

  //console.log(item);
}

const populate = (plates = [], platesList) => {

  platesList.innerHTML = plates.map((plate, i) => {
    return `<li>
        <input type="checkbox" data-index=${i} id="items${i}" ${plate.done ? 'checked' : ''} />
        <label for="items${i}">${plate.text}</label>
      </li>`;
  }).join('');
}

const toggleDone = (e) => {

  if(!e.target.matches('input')) return;

  const element = e.target;
  const index = element.dataset.index;
  //console.log(index);

  items[index].done = !items[index].done;

  localStorage.setItem('items', JSON.stringify(items));

  populate(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populate(items, itemsList);
