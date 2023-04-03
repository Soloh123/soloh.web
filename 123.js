
var cart = [];

function addToCart() {
  
  var item = {
    name: "inheritance",
    price: $12
  };
  cart.push(item);
  
  document.getElementById("cart-count").innerHTML = cart.length;
  
  
  alert("Product added to cart!");
}

