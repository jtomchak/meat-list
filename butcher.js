let nameInput = document.getElementById("name");
let priceInput = document.getElementById("price");
let cutInput = document.getElementById("cut");
let addMeatButton = document.getElementById("addMeatButton");
let meatForm = document.getElementById("meatForm");
let unorderedListOfMeats = document.getElementById("meatList");
let meatList = [];

addMeatButton.addEventListener("click", function(event) {
  event.preventDefault();
  //This will happen DAMN IT you click the button!!!
  //Get values from inputes, create instance of meat
  //add it to an array of meat to list
  let meat = new Meat(nameInput.value, priceInput.value, cutInput.value);
  meatList.push(meat);
  meatForm.reset();
  console.log(meatList);
  appendMeatList();
});

function appendMeatList() {
  //remove all items from ul
  var newestMeat = meatList[meatList.length - 1];
  var item = document.createElement("li");
  item.appendChild(document.createTextNode(newestMeat.name));
  unorderedListOfMeats.appendChild(item);
}

var Meat = function(name, price, cut) {
  this.name = name;
  this.price = price;
  this.cut = cut;
  this.calculateTax = function() {
    return this.price * 0.08;
  };
  this.total = function() {
    return this.price + this.calculateTax();
  };
};
//create a method that will provide that finally total of price and sales tax
//Butcher opens another store across city lines,
//the sales tax there is 0.091 for raw meat!
//Modify our Meat constructor to work for both locations

let dinner = new Meat("porkchop", 10.99, "butt");
let steak = new Meat("steak", 10.99, "t-bone");
let vegan = new Meat("Soy", 10.99, "ewwww");
console.log(dinner.calculateTax());
console.log(dinner.total());
