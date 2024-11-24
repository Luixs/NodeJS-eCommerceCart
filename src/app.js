/**************************************************************************************
// @LuisStarlino |  03/05/2023  15"50
/***************************************************************************************/
import * as cartService from './services/cart.js';
import { createItem } from "./services/item.js";

//  --- Main Engine 
console.log(`--------- 💳 Welcome to you Shopee Cart ---------`);
let myCart = [];
let myWishlist = [];

let item1 = await createItem("hotwells ferrari", 20, 5);
let item2 = await createItem("hotwells buggati", 39.99, 1);

await cartService.handleCart(myCart, item1, "A");
await cartService.handleCart(myCart, item2, "A");
await cartService.displayCart(myCart);
await cartService.handleCart(myCart, item1, "DQ", 3);
await cartService.displayCart(myCart);
// await cartService.calculateTotal(myCart)
// await cartService.handleCart(myCart, item2, "D");

await cartService.calculateTotal(myCart)



// console.log(myCart);






