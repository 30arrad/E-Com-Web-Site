// console.log("Arrad ");
AddAllItems();
AllItemsModals()



function AddAllItems()  {

let Hoodies = document.getElementById('items-Hoodies');
let innerHTML = ``;
Items.forEach( Items => {
  innerHTML += `
     <div class="bg-white p-4 shadow-md rounded-lg">
      <a href="">
       <img src="${Items.item_img}" alt="Product" class="w-full h-40 object-cover rounded">
      </a>
      <h3 class="font-bold mt-4">${Items.item_Name}</h3>
      <p class="text-gray-500 mt-1">${Items.item_Price}</p>
      <button id="Wishlist" class="mt-4 w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700">Wishlist</button>
      <button id="AddToCart" class="mt-4 w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700">Add to cart</button>
    </div>
  `
});

Hoodies.innerHTML = innerHTML;

};


function AllItemsModals() {
  let Hoodies = document.getElementById('AddToCart');
let modal = document.getElementById('modal');
let closeModalBtn = document.getElementById('closeModalBtn');
let cancelBtn = document.getElementById('cancelBtn');


// Open modal function
function openModal() {
  modal.classList.remove('hidden');
}

// Close modal function
function closeModal() {
  modal.classList.add('hidden');
}

// Event listeners
Hoodies.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);


    // Close modal when clicking outside modal content
    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeModal();
    });
}









