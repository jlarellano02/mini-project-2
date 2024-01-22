async function getCartData(data) {
  let my_obj = await fetch(data);
  let my_text = await my_obj.text();
  let cart = JSON.parse(my_text);

  // Function to update the cart table
  function updateCartTable() {
    let table = "<table class='table'><thead><tr><th>Item</th><th>Price</th><th>Quantity</th><th>Total Price</th><th>Action</th></tr></thead><tbody>";
    let totalCartPrice = 0;

    for (let i = 0; i < cart.length; i++) {
      let totalPrice = cart[i].price * cart[i].quantity;
      totalCartPrice += totalPrice;

      table += `<tr>
        <td>${cart[i].menu_name}</td>
        <td>${cart[i].price.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}</td>
        <td>
          <button class="btn btn-primary decrease_quantity" data-id="${cart[i].id}">-</button>
          <span class="quantity">${cart[i].quantity}</span>
          <button class="btn btn-primary increase_quantity" data-id="${cart[i].id}">+</button>
        </td>
        <td>${totalPrice.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}</td>
        <td><button class="btn btn-danger remove_item" data-id="${cart[i].id}">Remove</button></td>
      </tr>`;
    }

    table += `</tbody><tfoot><tr><td colspan="3"></td><td>Total:</td><td>${totalCartPrice.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}</td><td></td></tr></tfoot></table>`;
    $("#cart-items").html(table);

    // Rebind event handlers after updating the table
    bindEventHandlers();
  }

  // Function to bind event handlers
  function bindEventHandlers() {
    $(".increase_quantity").click(function () {
      let itemId = $(this).data("id");
      let item = cart.find(item => item.id === itemId);
      item.quantity++;
      updateCartTable();
    });

    $(".decrease_quantity").click(function () {
      let itemId = $(this).data("id");
      let item = cart.find(item => item.id === itemId);
      item.quantity = Math.max(1, item.quantity - 1);
      updateCartTable();
    });

    $(".remove_item").click(function () {
      let itemId = $(this).data("id");
      if (confirm("Are you sure you want to remove this item from the cart?")) {
        cart = cart.filter(item => item.id !== itemId);
        updateCartTable();
      }
    });
  }

  // Initial table setup
  updateCartTable();
}

getCartData("http://localhost:3000/api/cart/");
