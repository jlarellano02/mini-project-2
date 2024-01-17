async function getData(data) {
    let my_obj = await fetch(data);
    let my_text = await my_obj.text();
    let menu = JSON.parse(my_text);

    for (let i = 0; i < menu.length; i++) {
        let row = 
            "<div class='col-lg-3'><div class='card mt-3'>" + "<img src='" +
            menu[i].image + 
            "' class='card-img-top'><div class='card-body'>" + 
            "<h1>" + 
            menu[i].menu_name + "</h1>" +
            "<p class='card-title'><i>" +
            menu[i].description + "</i></p>" + 
            "<p class='card-title'><b>Price: </b>" + menu[i].price + "</p>"
            + "<a href='#' class='btn btn-primary'>Add to Cart</a></div></div></div>";

        $("#card-section").append(row);
    }
}

getData("http://localhost:3000/api/menu/");