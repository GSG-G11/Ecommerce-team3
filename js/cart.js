function createBoxInCart(){
    //testing
    let primary = document.querySelector('.btn.btn-primary')
    primary.addEventListener("click" ,()=>{
        let ProductsCartHolder = document.querySelector('.card-group')
        let ProductBox = document.createElement('div');
        ProductBox.className = 'card';
        ProductsCartHolder.appendChild(ProductBox);
        ProductBox.innerHTML += `<i class="bx bx-x"></i>
        <img
          src="images/headset_300.png"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h3 class="card-title">Fresh Headset</h3>
          <h5>1258 bids, 359 watchers $5.95 for shipping</h5>
          <p class="card-text">$13.95</p>
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
        </div>`
    })
//     taskbox.innerHTML += `<input type="checkbox" class="form-check-input">
// <label class="form-check-label" for="exampleCheck1">${taskInput.value}</label>`
 }
 createBoxInCart();