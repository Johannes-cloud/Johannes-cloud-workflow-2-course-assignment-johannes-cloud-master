import * as items from "./items";
import { ShoppingCart } from "./question-4";

test("When you add one item to cart, total items increase by one", ()=> {
    const myCart = new ShoppingCart();
    const startCartLength = myCart.getNumberOfItems()
    myCart.addToCart(items.bread)
    const endCartLength = myCart.getNumberOfItems()
    const cartTotal = myCart.getCostTotal()

    expect(startCartLength).toEqual(0)
    expect(endCartLength).toEqual(1)
    expect(cartTotal).toBe(9.25)
})

test("When you add three items to cart, total items increase by three and the total price is correct", ()=> {
    const myCart = new ShoppingCart();
    const startCartLength = myCart.getNumberOfItems()
    myCart.addToCart(items.bread)
    myCart.addToCart(items.cheese)
    myCart.addToCart(items.tomato)
    const endCartLength = myCart.getNumberOfItems()
    const cartTotal = myCart.getCostTotal()

    expect(startCartLength).toEqual(0)
    expect(endCartLength).toEqual(3)
    expect(cartTotal).toBe(9.25 + 5.95 +3.5)
})

test("You are unable to add the same item three times", ()=> {
    const myCart = new ShoppingCart();
    const startCartLength = myCart.getNumberOfItems()
    myCart.addToCart(items.bread)
    myCart.addToCart(items.bread)
    myCart.addToCart(items.bread)
    const endCartLength = myCart.getNumberOfItems()
    const cartTotal = myCart.getCostTotal()

    expect(startCartLength).toEqual(0)
    expect(endCartLength).toEqual(3)
    expect(cartTotal).toBe(9.25*3)
})

test("You can add 2 separate items with addToCart and then remove a single item", ()=> {
    const myCart = new ShoppingCart();
    const startCartLength = myCart.getNumberOfItems()
    myCart.addToCart(items.bread)
    myCart.addToCart(items.cheese)
    myCart.removeFromCart(items.bread)
    const endCartLength = myCart.getNumberOfItems()
    const cartTotal = myCart.getCostTotal()

    expect(startCartLength).toEqual(0)
    expect(endCartLength).toEqual(1)
    expect(cartTotal).toBe(5.95)
})