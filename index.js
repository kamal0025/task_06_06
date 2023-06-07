var system = require("./resources/system");
const express = require("express");
app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

let shoppingCart = [];

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

app.listen(system.port, () => {
  console.log("listining on 8080 ");
});
