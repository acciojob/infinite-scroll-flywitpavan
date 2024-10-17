//your code here!
// Select the 'infi-list' element
const infiList = document.getElementById('infi-list');

// Function to add list items
let itemCounter = 1;
function addListItems(count) {
  for (let i = 0; i < count; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${itemCounter}`;
    infiList.appendChild(listItem);
    itemCounter++;
  }
}

// Add initial 10 items to the list
addListItems(10);

// Function to check if user has scrolled to the bottom
function isBottomOfList() {
  return infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight;
}

// Add more items when user scrolls to the bottom
infiList.addEventListener('scroll', () => {
  if (isBottomOfList()) {
    addListItems(2); // Add 2 more items when the user reaches the bottom
  }
});

