// Create the dropdown container
const dropdown = document.createElement("div");
dropdown.style.position = "relative";
dropdown.style.display = "inline-block";

// Create the dropdown button
const button = document.createElement("button");
button.textContent = "Dropdown";
button.style.padding = "10px 20px";
button.style.cursor = "pointer";
dropdown.appendChild(button);

// Create the dropdown menu
const menu = document.createElement("div");
menu.style.display = "none";
menu.style.position = "absolute";
menu.style.backgroundColor = "#f9f9f9";
menu.style.minWidth = "160px";
menu.style.boxShadow = "0px 8px 16px rgba(0, 0, 0, 0.2)";
menu.style.zIndex = "1";
menu.style.padding = "5px 0";

// Add menu items
const items = ["Option 1", "Option 2", "Option 3"];
items.forEach((text) => {
  const item = document.createElement("a");
  item.textContent = text;
  item.href = "#";
  item.style.display = "block";
  item.style.color = "black";
  item.style.padding = "10px 15px";
  item.style.textDecoration = "none";
  item.style.cursor = "pointer";
  item.onmouseover = () => (item.style.backgroundColor = "#f1f1f1");
  item.onmouseout = () => (item.style.backgroundColor = "");
  menu.appendChild(item);
});

// Append the menu to the dropdown
dropdown.appendChild(menu);

// Append the dropdown to the document body
document.body.appendChild(dropdown);

// Add event listeners
button.addEventListener("click", () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Close the menu when clicking outside
document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target)) {
    menu.style.display = "none";
  }
});
