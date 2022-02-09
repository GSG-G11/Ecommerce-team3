const products = [
  {
    id: 1,
    name: "Coat For Dogs",
    price: 50,
    image: " ",
    inCart: 0,
    ProductTag: "CoatForDogs",
    category:'Dog'
  },
  {
    id: 2,
    name: "Coat For Dogs",
    price: 50,
    image: " ",
    inCart: 0,
    ProductTag: "CoatForDogs",
    category:'Dog'
  },
  {
    id: 3,
    name: "Pet Grooming Brush",
    price: 31,
    image: " ",
    inCart: 0,
    ProductTag: "PetGroomingBrush",
    category:'Dog'
  },
  {
    id: 4,
    name: "Food Bowl",
    price: 20,
    image: " ",
    inCart: 0,
    ProductTag: "FoodBowl",
    category:'Cat'
  },
  {
    id: 5,
    name: "Pet Bowl Affiliate",
    price: 15,
    ImgUrl: " ",
    inCart: 0,
    ProductTag: "PetBowlAffiliate",
    category:'Cat'
  },
];

// Count Number of product inside a user cart
function addtocart() {
  let addtocart = document.querySelectorAll(".add-to-cart-btn");

  for (let i = 0; i < addtocart.length; i++) {
    addtocart[i].addEventListener("click", (c) => {
      ProductNum(products[i]);
      totalCost(products[i]);
    });
  }
}

// exist item in local storge
function OnLoadProuNum() {
  let prodNum = localStorage.getItem("ProductNum");
  if (prodNum) {
    document.querySelector("nav .cart-count").textContent = prodNum;
  }
}

//Sum the Product num *************************
function ProductNum(product) {
  let prodNum = localStorage.getItem("ProductNum");
  prodNum = parseInt(prodNum);
  if (prodNum) {
    localStorage.setItem("ProductNum", prodNum + 1);
    document.querySelector("nav .cart-count").textContent = prodNum + 1;
  } else {
    localStorage.setItem("ProductNum", 1);
    document.querySelector("nav .cart-count").textContent = 1;
  }

  SetItemProd(product); // to save item in local storge
}

//Set item product *************************
function SetItemProd(product) {
  //setp 3
  let CartItem = localStorage.getItem("ProductsInCart");
  CartItem = JSON.parse(CartItem); // to return object ,not string
  //output : undefined , so ..
  //count
  if (CartItem != null) {
    if (CartItem[product.id] == undefined) {
      CartItem = {
        ...CartItem,
        [product.id]: product
      };
    }
    CartItem[product.id].inCart += 1; // == products['id']
  } else {
    //step 1
    product.inCart = 1;
    //setp 2
    CartItem = {
      [product.id]: product, //select the product obj and save inside storge with it prop
    };
  }

  localStorage.setItem("ProductsInCart", JSON.stringify(CartItem));
}

//count to total Price *************************
function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}


//Display the Products inside the Cart *************************
function displayCart() {
  let cartProducts = localStorage.getItem("ProductsInCart");
  cartProducts = JSON.parse(cartProducts);

  let cartCost = localStorage.getItem("totalCost");
  let ProductsCartHolder = document.querySelector(".card-group");

  if (cartProducts && ProductsCartHolder) {
    ProductsCartHolder.innerHTML = "";
    Object.values(cartProducts).map((item) => {
      ProductsCartHolder.innerHTML += `
            <div class="card">
            <button class="" style="cursor: pointer; border: none; display: flex;"><a class="to-cart-a">  <i class="bx bx-x delete_btn"></i> </a></button>
              <img
                src="images/${item.id}.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h3 class="card-title">${item.name}</h3>
                <h5>1258 bids, 359 watchers $5.95 for shipping</h5>
                <p class="card-text">${item.price}$</p>
                <div class="reating-holder">
                  <div class="rating">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                  </div>
                  <button type="button" class="btn btn-primary">
                    Checkout
                  </button>
                </div>
              </div>
            `;
      let totalPice = (document.querySelector(
        ".total-price"
      ).textContent = `${cartCost} $`);
    });
  }
}

//Remove Product form cart*************************
function removefromcart() {
  let removefromcart = document.querySelectorAll(".delete_btn");
  let cards = document.querySelectorAll(".card");
  for (let i = 0; i < removefromcart.length; i++) {
    removefromcart[i].addEventListener("click", (c) => {
     window.localStorage.removeItem('ProductsInCart');
     window.localStorage.removeItem('ProductNum');
     window.localStorage.removeItem('totalCost');
    });
  }
}

function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("products");
  if (data) {
    let products = JSON.parse(data);
    addElementsToPageFrom(products);
  }
}

OnLoadProuNum(); // this fun must run firstly
displayCart(); // should display when page load
addtocart();
removefromcart();
getDataFromLocalStorage()


if (typeof module !== "undefined") {
  module.exports = {
    ProductNum,
    totalCost,
    removefromcart,
    products,
    prodNum,
    cartCost
}
}

