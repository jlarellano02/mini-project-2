async function getData(data) {
    let my_obj = await fetch(data);
    let my_text = await my_obj.text();
    let menu = JSON.parse(my_text);

    for (let i = 0; i < menu.length; i++) {
        let row = 
            "<div class='col-lg-3'><div class='card mt-3'>" + "<img src='img/" +
            menu[i].image + 
            "' class='card-img-top'><div class='card-body'>" + 
            "<h5>" + 
            menu[i].menu_name + "</h5>" +
            "<p class='card-title'><i>" +
            menu[i].description + "</i></p>" + 
            "<p class='card-title'><b>Price: </b>" + menu[i].price + "</p>"
            + "<a href='cart.html' class='btn btn-primary' id='add_to_cart'>Add to Cart</a></div></div></div>";

        $("#card-section").append(row);
    }
}

getData("http://localhost:3000/api/menu/");