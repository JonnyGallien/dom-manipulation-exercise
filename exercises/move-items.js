/**
 * SORTING NODES WITHIN A CONTAINER
 * Please, make sure to read the following files in the exercises-info folder before you start
 * * 01 SelectNodes.md
*/

/**
 * @task
 * Select all elements that have class of "item" as a NodeList.
 * Store them in the allItems variable
 * Example: const allItems = <Your code>;
 */

// Your code goes here...
const nodeList = document.getElementsByClassName('item');
const allItems = Array.from(nodeList);



/**
 * @task
 * Select the main container by the id of "main"
 * Store it in the main constant
 * Example: const main = <Your code>
 * */

// Your code goes here
const main = document.getElementById('main');


/**
 * @task
 * Select the favorites container by id of "favs"
 * Store it in the favs constant
 * Example: const favs = <Your code>;
 */

// Your code goes here
const favs = document.getElementById('favs');


/**
 * @task
 * Create the updateCollections(id, direction) function that follows the list of requirements:
 * Takes an argument of the item id (number)
 * Take an argument of direction as a string value of 'toMain' or 'toFavs'
 * Moves the element from the current parent to the new parent (from main to favs or vice versa)
 * Changes the icon of the element: fa-heart-circle-plus for main, fa-heart-crack for favs items.
 */

// Your code goes here

function removePrevElm(id) {
  const elm = document.getElementById(id);
  elm.remove()
}

function addNewElm(newClass, id, location) {
  const newChild = document.createElement('div');
  newChild.setAttribute('id', id);
  newChild.classList.add('item');
  const newI = document.createElement('i');
  newI.classList.add('fa-solid');
  newI.classList.add(newClass);
  newChild.appendChild(newI);
  newChild.appendChild(document.createTextNode(`Card Title ${id}`));
  location.appendChild(newChild);
  addEvent(newChild);
}

function updateCollections(id, direction) {
  const mainI = 'fa-heart-circle-plus';
  const favsI = 'fa-heart-crack';
  removePrevElm(id);
  console.log(direction);
  if (direction === 'toMain') {
    addNewElm(mainI, id, main)
  } else {
    addNewElm(favsI, id, favs);
  }
}


/**
 * @task
 * Iterate through the every item in allItems NodeList and apply the
 * addEventListener click event to each item.
 * The item click must execute/call the following:
 * * Get the current item's parent id ('main' or 'favs')
 * * Get the current item id (a number value)
 * * Set the direction constant to be equal to 'toFavs' or 'toMain', based off the current location
 * * The direction means the collection to move the item into, when the item is clicked
 * * If the correct item's location is the parent of id 'main' -> the direction is 'toFavs'
 * * If the correct item's location is the parent of id 'favs' -> the direction is 'toMain'
 * * Make the updateCollections function call, assign the item Id and the direction defined above
 */

// Your code goes here...
function addEvent(item) {
  item.addEventListener('click', function() {
    const itemId = this.id;
    const itemParentId = this.parentNode.id;
    const direction = itemParentId === 'main' ? 'toFavs' : 'toMain' ;
    updateCollections(itemId, direction);
  })
}


for (item of allItems) {
  addEvent(item);
}


