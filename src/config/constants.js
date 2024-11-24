export const SYSTEM_CONFIG = {
    "items": {
        maxInCart: 3,               // --- integer
        maxValue: 150.00,           // --- integer | float
        maxQuantity: 5              // --- integer
    },
    "events": {
        max: 1,                     // --- number of times the robot will add, remove or manipulate an item
        types: [
            {
                id: "A",
                name: "Add item"
            },
            {
                id: "D",
                name: "Delete item"
            },
            {
                id: "DQ",
                name: "Delete quantity"
            }
        ]
    }
}

export const DUMMY_ITEMS = ["Mousepad", "Notebook", "Pencil", "Powerbank", "Random Book 1", "Random Book 2", "Nike AirForce1"]