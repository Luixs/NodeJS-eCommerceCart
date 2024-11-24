/**
* @LuisStarlino
* Created AT: 24/11/2024 | 09:10
*/

import { SYSTEM_CONFIG } from "../config/constants.js";

export async function getRandomValue(maxV) {
    return Math.floor(Math.random() * maxV) + 1;
}

export async function getRandomFloatValue(maxV) {
    return (Math.random() * maxV).toFixed(2);
}

export async function getRandomEvents() {

    
    let events = []

    while (events.length < SYSTEM_CONFIG.events.max) {

        // --- random config's
        let randomIndexName = await getRandomValue(SYSTEM_CONFIG.events.types.length) - 1;

        // --- Already add?
        let currentIndex = events.findIndex((e) => e.id == SYSTEM_CONFIG.events.types[randomIndexName].id) //items.findIndex((i) => i.name == DUMMY_ITEMS[randomIndexName-1].toUpperCase());

        if (currentIndex === -1) events.push(SYSTEM_CONFIG.events.types[randomIndexName]);
    }

    // --- Display engine
    console.log(`▫️ Random Events : ${events.map(e=> `'${e.name}' `)}`);

    // --- Return events
    return events;
}