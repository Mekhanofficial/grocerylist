 // Default grocery items
  let groceryItems = [
    { name: "plantain", price: 200 },
    { name: "chicken", price: 4200 },
    { name: "butter", price: 1800 }
  ];

  // Render grocery list
  function refreshCart() {
    const list = document.getElementById("list");
    list.innerHTML = "";

    if (groceryItems.length === 0) {
      list.innerHTML = `
        <div class="empty-state">
          <i>🛒</i>
          <p>Your grocery list is empty</p>
          <p>Add items to get started</p>
        </div>`;
    } else {
      groceryItems.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <div class="item-info">
            <span class="item-name">${item.name}</span>
            <span class="item-price">₦${item.price.toFixed(2)}</span>
          </div>
          <button class="danger-btn" onclick="deleteItem(${index})">Delete</button>
        `;
        list.appendChild(li);
      });
    }

    document.getElementById("itemCount").textContent = 
      `${groceryItems.length} item${groceryItems.length !== 1 ? "s" : ""}`;
  }

  // Add item
  function addItem() {
    const name = document.getElementById("itemName").value.trim();
    const price = parseFloat(document.getElementById("itemPrice").value);

    if (name === "" || isNaN(price) || price <= 0) {
      alert("Please enter a valid item name and price.");
      return;
    }

    groceryItems.push({ name, price });
    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";
    refreshCart();
  }

  // Delete item
  function deleteItem(index) {
    groceryItems.splice(index, 1);
    refreshCart();
  }

  // Calculate total
  function calculateTotal() {
    const total = groceryItems.reduce((sum, item) => sum + item.price, 0);
    document.getElementById("totalDisplay").textContent = `₦${total.toFixed(2)}`;
  }

  // Event listeners
  document.getElementById("addBtn").addEventListener("click", addItem);
  document.getElementById("totalBtn").addEventListener("click", calculateTotal);

  // showcart
  refreshCart();