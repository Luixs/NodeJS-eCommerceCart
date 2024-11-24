/**************************************************************************************
// @LuisStarlino |  23/11/2023  15"45
//  --- {}
/***************************************************************************************/
import { v4 as uuidv4 } from 'uuid';
export async function createItem(name, price, quantity) {
    return {
        id: uuidv4(),
        name: name.toUpperCase(),
        price,
        quantity,
        subtotal: () => quantity * price
    };
}
