let addProductButton = document.querySelector('.add-product-btn'),
    productName = document.getElementById('product-name'),
    productPrice = document.getElementById('product-price'),
    productCategory = document.getElementById('product-category'),
    productDescription = document.getElementById('product-description'),
    productImage = document.getElementById('product-image'),
    produtPopUp = document.querySelector('.add-products-popup'),
    cancelButton = document.querySelector('.cancel'),
    saveButton = document.querySelector('.save'),
    productBoxes = document.querySelectorAll('.box'),
    allInputs = document.querySelectorAll('.popup-form input'),
    productContainer = document.querySelector('.products-container');

    // Array to Add Prodcuts on it
let arryofProducts = [];

// Get Products From local Storage
if (localStorage.getItem("products")) {
  arryofProducts = JSON.parse(localStorage.getItem("products"));
  }

  getDataFromLocalStorage();

    // When Click on Add Product Button PoPUp Will appear
    addProductButton.onclick = function(){
      allInputs.forEach(function(e){
        e.value = "";
      })
      if(!produtPopUp.classList.contains('show')){
        produtPopUp.classList.add('show');
      }
    }

    // When Click on Cancel  Button PoPUp Will close
    cancelButton.onclick = function(){
      if(produtPopUp.classList.contains('show')){
        produtPopUp.classList.remove('show');
      }
    }
  
  saveButton.onclick = function () {
        addProductToArray(productName.value,
                          `${productPrice.value}$`,
                          productCategory.value,
                          productDescription.value,
                          `images/${productImage.value.slice(-5)}`); // Add Task To Array Of Tasks
        produtPopUp.classList.remove('show');
  
    //document.querySelector('.products-container').innerHTML = "";
    addElementsToPageFrom(arryofProducts);
    produtPopUp.classList.remove('show');
  };

  //Add Product Specifications to Product objects
  if (!localStorage.getItem("products")){
    productBoxes.forEach(function(e){
      addProductToArray(e.lastElementChild.children[0].innerHTML,
                        e.lastElementChild.children[2].innerHTML,
                        e.getAttribute('data-category'),
                        e.lastElementChild.children[1].innerHTML,
                        e.children[0].getAttribute('src'));
    });
  }

  productContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('box')) {
      deleteProdctWith(e.target.getAttribute("data-id"));
      e.target.remove()
    }
  })

  // Push each product to the array
  function addProductToArray(name,price,category,description,image) {
    const product = {
      id: Date.now(),
      name: name,
      price: price,
      category: category,
      description: description,
      image: image,
      completed: false,
    };
    // Push Product To Array Of Products
    arryofProducts.push(product);
    // Add Products To Page
    //addElementsToPageFrom(arryofProducts);
    // Add Products To Local Storage
    addDataToLocalStorageFrom(arryofProducts);
  }
  
  function addElementsToPageFrom(arryofProducts) {
  document.querySelector('.products-container').innerHTML = "";
  arryofProducts.forEach(function(product){
    let newBox = document.createElement('div');
    newBox.className='box';
    newBox.setAttribute("data-id", product.id);
    newBox.setAttribute('data-category',product.category);
    let newBoxImage = document.createElement('img');
    newBoxImage.setAttribute('src', product.image);
    newBox.append(newBoxImage);
    let productInfo = document.createElement('div');
    productInfo.className ='product-info';
    let pName = document.createElement('h3');
    pName.appendChild(document.createTextNode(product.name));
    let pDescription = document.createElement('p');
    pDescription.appendChild(document.createTextNode(product.description));
    let pPrice = document.createElement('span');
    pPrice.className='price';
    pPrice.appendChild(document.createTextNode(product.price));
    productInfo.append(pName,pDescription,pPrice);
    newBox.append(productInfo);
    document.querySelector('.products-container').appendChild(newBox);
  })
  }
  

  function addDataToLocalStorageFrom(arryofProducts) {
    window.localStorage.setItem("products", JSON.stringify(arryofProducts));
  }

  function getDataFromLocalStorage() {
    let data = window.localStorage.getItem("products");
    if (data) {
      let products = JSON.parse(data);
      addElementsToPageFrom(products);
    }
  }

  function deleteProdctWith(productId) {
    arryofProducts = arryofProducts.filter((product) => product.id != productId);
    addDataToLocalStorageFrom(arryofProducts);
  }
