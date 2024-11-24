/**************************************************************************************
// @LuisStarlino |  03/05/2023  15"50
/***************************************************************************************/
import { createItem, getRandomItems } from "./services/item.js";
import { getRandomEvents, getRandomValue } from './functions/utils.js';
import * as cartService from './services/cart.js';


//------------------------------------------------
// --- Main Engine 
//------------------------------------------------
console.log(`\n--------------------------------------------`);
console.log(` --- 💳 Welcome to you Shopee Cart 💳 ---`);
console.log(`     🤖 Random Engine Selected!    🤖 `);
console.log(`     ⚙️      Configuration          ⚙️`);
console.log(`--------------------------------------------`);

let myCart = []; // TODO: Add this later... | let myWishlist = []; |

//------------------------------------------------
// --- R1: Get random products
//------------------------------------------------
var itemsRandom = await getRandomItems();

//------------------------------------------------
// --- R2: Adding all products in the cart
//------------------------------------------------
itemsRandom.forEach(async (p) => {
    await cartService.handleCart(myCart, p, "A");
})

//------------------------------------------------
// --- R3: Random Events
//------------------------------------------------
await getRandomEvents().then(async (r) => {

    r.forEach(async (e) => {

        
        // --- get item
        let i = await getRandomValue(myCart.length) - 1;
        let randomDelete = await getRandomValue(myCart[i].quantity);

        // --- do random handle
        await cartService.handleCart(myCart, myCart[i], e.id, e.id == "DQ" ? randomDelete : null);
    })
});

//------------------------------------------------
// --- R4: Display Cart and total
//------------------------------------------------
await cartService.displayCart(myCart);
await cartService.calculateTotal(myCart);