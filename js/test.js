const {
    ProductNum,totalCost
    
}  = require('./logic.js');

describe('Testing Product num return value' , ()=>{
    test('Should return product numbers when given add to cart' , () =>{
    const actual = ProductNum()
    const expected = 
        expect().toBe()
    })
})

describe("remove from cart", () => {
    let CartItem = localStorage.getItem("ProductsInCart");

    test("Should Return the ProductsInCart empty ", ()=> {
        const actual = CartItem ;
        const expected = removefromcart();
        expect(actual).toEqual(expected);
    });
});


