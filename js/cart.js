async function getData(data) {
    let my_obj = await fetch(data);
    let my_text = await my_obj.text();
    let cart = JSON.parse(my_text);

    for (let i = 0; i < cart.length; i++) {
        let row = 
            "<table class='table'><tr>" + 
            "<th>Item</th>" + 
            "<th>Price</th>" + 
            "<th>Quantity</th>" + 
            "<th>Total</th>" +
            "</tr><tr>" + 
            "<td>" + cart[i].cart_name + "</td>" +
            "<td>" + cart[i].price + "</td>" +
            "<td>" + cart[i].quantity + "</td>" +
            "<td>" + cart[i].price + "</td>" +
            "</tr></table>";

        $("#cart-items").append(row);
    }
}

getData("http://localhost:3000/api/cart/");