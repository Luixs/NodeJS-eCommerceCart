/**************************************************************************************
// @LuisStarlino |  23/11/2023  15"45
//  --- Service responsible to handling items rules.
/***************************************************************************************/
import { SYSTEM_CONFIG, DUMMY_ITEMS } from '../config/constants.js';
import { getRandomFloatValue, getRandomValue } from '../functions/utils.js';
import { v4 as uuidv4 } from 'uuid';

export async function getRandomItems() {
    let itemsCount = await getRandomValue(SYSTEM_CONFIG.items.maxInCart);
    let items = [];

    while (items.length < itemsCount) {

        // --- random config's
        let randomIndexName = await getRandomValue(DUMMY_ITEMS.length);
        let randomPrice = await getRandomFloatValue(SYSTEM_CONFIG.items.maxValue);
        let randomItemQuantity = await getRandomValue(SYSTEM_CONFIG.items.maxQuantity);
        
        // --- Already add?
        let currentIndex = items.findIndex((i) => i.name == DUMMY_ITEMS[randomIndexName-1].toUpperCase());

        if(currentIndex === -1) {
            let newItem = await createItem(DUMMY_ITEMS[randomIndexName-1], randomPrice, randomItemQuantity);
            items.push(newItem);
        }
    }

    // --- Display engine
    console.log(`▫️ Random initial items: ${itemsCount}`);

    // --- Return item
    return items;
}

export async function createItem(name, price, quantity) {
    return {
        id: uuidv4(),
        name: name.toUpperCase(),
        price,
        quantity,
        subtotal: () => quantity * price
    };
}
