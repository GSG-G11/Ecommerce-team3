const product = [ 
    {id : 0,
    name : "",
    price : 20,
    ImgUrl : " ",
    description : "",

},{
    id : 0,
    name : "",
    price : 20,
    ImgUrl : " ",
    description : "",
},
{
    id : 0,
    name : "",
    price : 20,
    ImgUrl : " ",
    description : "",
}
];
// seler add product
const addbtn = document.querySelector('.mycart');
const ProductBox = document.querySelectorAll('.box');

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

function addProduct(){
    addbtn.addEventListener('click' , (e)=>{
        if(e.target.className == 'mycart'){
           
        }

    })
};
 function deleteProduct(){

 }


//seller --> add , view , delete , edit ,filter ,search
//buyer --> view cart , add to cart , delete prod , total price , filter, search 
// with testing and local storge 

// ayman--> cart, readme file
//manar --> add to card , view proudct 
//jehad --> pop up -- add product , edit ,delete 
//mostafa --> filter , check testing 

addProduct();
deleteProduct()
