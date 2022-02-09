const product = [
    {
    id : 0,
    name : "Coat For Dogs",
    price : 50,
    ImgUrl : " ",
    inCart:0
},
{
    id : 1,
    name : "Coat For Cats",
    price : 50,
    ImgUrl : " ",
    inCart:0
}
];

// Count Number of product inside a user cart 
function addtocart(){
    let addtocart = document.querySelectorAll('.add-to-cart-btn');
    let cards = document.querySelectorAll('.card')

    for(let i = 0 ;i < addtocart.length ; i++){
        addtocart[i].addEventListener("click" , (c) =>{
            ProductNum()
        })
    }
 }
// exist item in local storge 
function OnLoadProuNum(){
    let prodNum = localStorage.getItem('ProductNum');
    if(prodNum){
        document.querySelector('nav .cart-count').textContent = prodNum;
    }
}
function ProductNum(){
    let prodNum = localStorage.getItem('ProductNum');
    prodNum = parseInt(prodNum);
    if(prodNum){
        localStorage.setItem('ProductNum' , prodNum + 1)
        document.querySelector('nav .cart-count').textContent = prodNum + 1;
    }else{
        localStorage.setItem('ProductNum' , 1)
       document.querySelector('nav .cart-count').textContent=1;
    }

}
OnLoadProuNum() // this fun must run firstly 
addtocart();


//create add product function
//1- click add
//2- pop up widow will display
//3- put data inside iputs
//4- set item in local storge
//5- alrate 'your proudect is created'
//6- proudct is added

// view products
//1- save item in local storge and array

// delete product
//1- get del btn
//2- remove item
