/**************************************************************************************
// @LuisStarlino |  23/11/2023  15"40
//  --- {}
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
    console.log(`🎁 Total R$${total.toFixed(2)} `);
}

async function displayCart(cart) {
    console.log(`\n🛒  ------------ SHOPEE CART LIST ------------ 🛒`);
    cart.forEach((item, i) => {
        console.log(`⬜  ${i + 1}. ${item.name} - R$${item.price} | ${item.quantity}x | Subtotal = R$${item.quantity * item.price}`);
    });
    console.log(`🛒  ------------------------------------------------ 🛒`);

}

//------------------------------------------------
// INTERNAL FUNCTION'S
//------------------------------------------------
// --- Add new item
async function addItem(c, i) {
    return c.push(i);
};

// --- Remove one or all for this itens in the card
async function deleteItem(cart, id, quantity) {

    const index = cart.findIndex((i) => i.id === id);


    if (index != -1 && !quantity) { // --- Delete all
        cart.splice(index, 1);
    } else if (quantity == cart[index].quantity) {
        cart.splice(index, 1);
    } else {
        cart[index].quantity -= quantity
        //await cart[index].quantity = cart[index].quantity - quantity;
    }

}




export {
    calculateTotal,
    displayCart,
    handleCart
}