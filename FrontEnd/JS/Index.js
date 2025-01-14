// Load all items into the grid

AddAllItems();

function AddAllItems() {
  const Hoodies = document.getElementById('items-Hoodies');
  let innerHTML = ``;

  Items.forEach((item) => {
    innerHTML += `
      <div class="bg-white p-4 shadow-md rounded-lg">
        <a href="#">
          <img src="${item.item_img}" alt="Product" class="w-full h-40 object-cover rounded">
        </a>
        <h3 class="font-bold mt-4">${item.item_Name}</h3>
        <p class="text-gray-500 mt-1">${item.item_Price}</p>
        <button 
          class="mt-4 w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 viewDetails" 
          data-id="${item.id}">
          View Cart
        </button>
      </div>
    `;
  });

  Hoodies.innerHTML = innerHTML;

  // Add event listeners to buttons
  document.querySelectorAll('.viewDetails').forEach((button) => {
    button.addEventListener('click', (e) => {
      const itemId = e.target.getAttribute('data-id');
      const selectedItem = Items.find((item) => item.id === itemId);
      openModal(selectedItem);
    });
  });
}



// Function to open modal with item details
function openModal(item) {
  const modal = document.getElementById('modal');
  const modalContent = `
    <div class="p-4">
      <div class="flex items-center space-x-4">
        <img 
          src="${item.item_img}" 
          alt="Product" 
          class="w-24 h-24 object-cover rounded">
        <p class="font-medium">${item.item_Name}</p>
      </div>
      <div class="mt-4 text-center">
        <p class="font-bold">Choose Size</p>
        <div class="flex justify-center space-x-2 mt-2">
          <button class="border px-4 py-2 rounded hover:bg-gray-100">M</button>
          <button class="border px-4 py-2 rounded hover:bg-gray-100">L</button>
          <button class="border px-4 py-2 rounded hover:bg-gray-100">XL</button>
          <button class="border px-4 py-2 rounded hover:bg-gray-100">XXL</button>
        </div>
      </div>
    </div>
    <div class="flex justify-between px-4 py-2 border-t">
      <button id="cancelBtn" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Cancel</button>
      <button class="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600">Add to Cart</button>
    </div>
  `;
  modal.querySelector('.p-4').innerHTML = modalContent;
  modal.classList.remove('hidden');

  // Close modal when clicking the cancel button or outside the modal
  document.getElementById('cancelBtn').addEventListener('click', closeModal);
}

// Function to close modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
}

const closeModalBtn = document.getElementById('closeModalBtn');

// Close modal on clicking close buttons or background
closeModalBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});


// Youtube Video

// let bagItems;
// onLoad();

// function onLoad() {
//   let bagItemsStr = localStorage.getItem('bagItems');
//   bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
//   AddAllItems();
//   displayBagIcon();
// }

// function addToBag(itemId) {
//   bagItems.push(itemId);
//   localStorage.setItem('bagItems', JSON.stringify(bagItems));
//   displayBagIcon();
// }

// function displayBagIcon() {
//   let bagItemCountElement = document.getElementById('bag-item-count');
//   if (bagItems.length > 0) {
//     console.log('I am here');
//     bagItemCountElement.style.visibility = 'visible';
//     bagItemCountElement.innerText = bagItems.length;
//   } else {
//     bagItemCountElement.style.visibility = 'hidden';
//   }
// }



