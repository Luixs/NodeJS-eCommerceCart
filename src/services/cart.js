/**************************************************************************************
// @LuisStarlino |  23/11/2023  15"40
//  --- Service responsible for handling cart rules
/***************************************************************************************/
async function handleCart(cart, item, action, quantity = null) {

    switch (action) {
        case "A": // Add
            await addItem(cart, item);
            break;
        case "D": // Delete
            await deleteItem(cart, item?.id, quantity);
            break;
        case "DQ": // Delete Quantity
            await deleteItem(cart, item?.id, quantity);
            break;

    }

};


async function calculateTotal(cart) {
    let total = cart.reduce((t, item) => t + (item.price * item.quantity), 0);
    console.log(`🎁 Total ---->  R$${total.toFixed(2)} `);
}

async function displayCart(cart) {
    console.log(`\n🛒 SHOPEE CART LIST 🛒`);
    cart.forEach((item, i) => {
        console.log(`⬜  ${i + 1}. ${item.name} - R$${item.price} | ${item.quantity}x | Subtotal = R$${(item.quantity * item.price).toFixed(2)}`);
    });
    console.log(`🛒 -----------------------------\n`);
}

//------------------------------------------------
// INTERNAL FUNCTION'S
//------------------------------------------------

// --- Add new item
async function addItem(c, i) {

    // --- Already Add?
    let indexFound = c.findIndex((p)=> p.id === i.id);

    if(indexFound == -1) return c.push(i);
    else return c[indexFound].quantity += 1;
    
};

// --- Remove one or all for this itens in the card
async function deleteItem(cart, id, quantity) {
    const index = cart.findIndex((i) => i.id === id);
    if (index != -1 && !quantity) { // --- Delete all
        cart.splice(index, 1);
    } else if (quantity == cart[index].quantity) { // Delete all 
        cart.splice(index, 1);
    } else { 
        cart[index].quantity -= quantity
    }

}


//------------------------------------------------
// EXPORT
//------------------------------------------------
export {
    calculateTotal,
    displayCart,
    handleCart
}