const ex = require("express");
const fs = require("fs");
const mi = require("./menu_items");
const cors = require("cors");

const app = ex();
app.use(ex.json());
app.use(cors());
const m = mi.menu;

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.get("/api/menu", (req, res) => {
    res.send(m);
});

// API
// app.get("/api/books", (req, res) => {
//     res.send(b);
// });

// app.get("/api/books/:id", (req, res) => {
//     let book;
//     for (let i = 0; i < b.books.length; i++) {
//         if (b[i].id === Number(req.params.id)) {
//             book = b[i];
//             break;
//         }
//     }

//     if (book) {
//         res.send(book);
//         console.log(book);
//     } else {
//         let err = "Book not found";
//         res.status(404);
//         res.send(err);
//         console.log(err);
//     }
// });

// Main website
app.get("/index", (req, res) => {
    console.log("Someone accessed the main page");
    fs.readFile("index.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    });
});


app.listen(3000);
console.log("Starting server...");