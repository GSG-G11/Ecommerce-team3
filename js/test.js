const {ProductNum,products,product,prodNum,cartCost,removefromcart} = require('./logic.js');
const {addProductToArray,deleteProdctWith} = require('./index.js');


describe('Testing Product num return value' , ()=>{
    //sum proudct price
    test('Should return product price when add to cart' , () =>{
        let actual = totalCost(products[product.price])
        let expected =totalCost(cartCost + products[product.price])
        expect(actual).toBe(expected);
    });

    //count proudct number
    test('Should return product Number when  add to cart' , () =>{
        let actual = ProductNum(1)
        let expected =ProductNum(2)
        expect(actual).toBe(expected);
    });

    //count proudct number
    test('Should return product Number when  add to cart' , () =>{
        let actual = ProductNum(0)
        let expected =ProductNum(1)
        expect(actual).toEqual(expected);
    });
describe("remove from cart", () => {
    let CartItem = localStorage.getItem("ProductsInCart");

    test("Should Return the ProductsInCart empty ", ()=> {
        const actual = CartItem ;
        const expected = removefromcart();
        expect(actual).toEqual(expected);
    });
});


    describe('Testing Product num return value' , ()=>{
        test('test length of array of products to check if product added' , () =>{
        const actual = addProductToArray(arryofProducts);
        const expected = arryofProducts.length++;
        expect(actual).toBe(expected)
        })
        test('test length of array of products to check if product removed' , () =>{
            const actual = deleteProdctWith(productId);
            const expected = arryofProducts.length--;
            expect(actual).toBe(expected)
        })
    })
})
