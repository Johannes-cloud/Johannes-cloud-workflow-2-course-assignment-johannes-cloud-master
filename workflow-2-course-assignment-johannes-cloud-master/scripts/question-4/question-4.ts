import { bread, cheese, lettuce, milk, tomato } from './items';

// Create an interface called "Item" with the following variables and types:
// id: number
// name: string
// price: number

export interface ExampleItem {
  id: number;
  name: string;
  price: number;
}

export class ShoppingCart {
  // Add the correct array type to cart
  cart: Array<ExampleItem> = [];

  // Add the correct return type
  getCostTotal() {
    const costTotal = this.cart.reduce((total, currentItem) => {
      total += currentItem.price;
      return total;
    }, 0);
    return costTotal;
  }

  // Add the correct return type
  getNumberOfItems() {
    return this.cart.length;
  }

  // Add the correct return type
  getCart() {
    return [...this.cart];
  }

  // Set the parameter to be of the Item type and set the return
  //    type to be of the correct type
  addToCart(item: ExampleItem) {
    const itemExists = this.cart.find((currentItem) => {
      if (currentItem.id === item.id) {
        return true;
      }
    });
    if (!itemExists) {
      this.cart.push(item);
    }
  }

  // Set the parameter to be of the Item type and set the return
  //    type to be of the correct type
  removeFromCart(item: ExampleItem) {
    const newCart = this.cart.filter((currentItem) => {
      if (currentItem.id !== item.id) {
        return true;
      }
    });
    this.cart = [...newCart];
  }
}

// Examples, feel free to delete
const myCart = new ShoppingCart();
myCart.addToCart(bread);
myCart.removeFromCart(bread);
