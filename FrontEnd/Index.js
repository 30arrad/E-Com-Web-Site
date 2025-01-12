// console.log("Arrad ");

let Hoodies = document.getElementById('items-Hoodies');

// console.log(Hoodies);

// const Item = {
//   id: '001',
//   item_img : `Images/Hoodies/H-1.jpg`,
//   item_Name : `Women's Casual Top`,
//   item_Price : `Tk : 300`
// }

let innerHTML = ``;
Items.forEach( Items => {
  innerHTML += `
     <div class="bg-white p-4 shadow-md rounded-lg">
      <a href="">
       <img src="${Items.item_img}" alt="Product" class="w-full h-40 object-cover rounded">
      </a>
      <h3 class="font-bold mt-4">${Items.item_Name}</h3>
      <p class="text-gray-500 mt-1">${Items.item_Price}</p>
      <button class="mt-4 w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700">Wishlist</button>
      <button class="mt-4 w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700">Add to cart</button>
    </div>
  `
});

Hoodies.innerHTML = innerHTML;

