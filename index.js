var system = require("./resources/system");
const express = require("express");
app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

let shoppingCart = [
  { name: "Tshirt", price: "45" },
  { name: "shirt", price: "50" },
  { name: "cargo", price: "60" },
];

app.get("/", (req, res) => {
  res.render("index", { shoppingCart });
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/add", (req, res) => {
  const newItem = {
    name: req.body.name,
    price: req.body.price,
  };
  shoppingCart.push(newItem);
  res.redirect("/");
});

app.get("/remove/:index", (req, res) => {
  const index = req.params.index;
  shoppingCart.splice(index, 1);
  res.redirect("/");
});

app.get("/edit/:index", (req, res) => {
  const index = req.params.index;
  const selectedItem = shoppingCart[index];
  res.render("edit", { selectedItem, index });
});

app.post("/edit/:index", (req, res) => {
  const index = req.params.index;
  shoppingCart[index].name = req.body.name;
  shoppingCart[index].price = req.body.price;
  res.redirect("/");
});

app.listen(system.port, () => {
  console.log("listining on 8080 ");
});
