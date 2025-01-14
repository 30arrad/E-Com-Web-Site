document.addEventListener("DOMContentLoaded", () => {
    const orderHistory = document.getElementById("order-history");
  
    // Sample data for order history
    const orders = [
      {
        id: "12345",
        date: "2023-12-01",
        total: "৳ 500",
        status: "Delivered",
      },
      {
        id: "67890",
        date: "2023-11-15",
        total: "৳ 1790",
        status: "Shipped",
      },
      {
        id: "11223",
        date: "2023-10-25",
        total: "৳ 5690",
        status: "Cancelled",
      },
    ];
  
    // Render orders
    orders.forEach((order) => {
      const li = document.createElement("li");
      li.className =
        "p-4 border border-gray-300 rounded flex justify-between items-center bg-gray-50";
  
      li.innerHTML = `
        <div>
          <p><strong>Order ID:</strong> ${order.id}</p>
          <p><strong>Date:</strong> ${order.date}</p>
          <p><strong>Total:</strong> ${order.total}</p>
        </div>
        <span
          class="text-sm ${
            order.status === "Delivered"
              ? "text-green-500"
              : order.status === "Shipped"
              ? "text-yellow-500"
              : "text-red-500"
          }"
        >
          ${order.status}
        </span>
      `;
  
      orderHistory.appendChild(li);
    });
  });