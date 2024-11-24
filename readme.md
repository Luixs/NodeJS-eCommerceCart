# 🛒 Shopee Cart Simulation 🛒


![Node.js](https://img.shields.io/badge/Node.js-v20.0+-green?style=flat&logo=node.js) ![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=flat)

A **back-end** engine that manages items and sub-items of an e-commerce, is this case, **the Shopee Cart** 🚀  
> **Based on the "DIO" NodeJs course, by Felipão**, with improvements implemented for a more automated dynamic system.

## 🔧 Features 

- **Feature Flags:** Items and events are configured in a specific file.
- **Random Generation:**  
  - The name, price, id and quantity of the items in the cart are **randomly generated** at the beginnig.
  - **BUSINESS RULE**: Ensure that items can't repeated.
- **Random Cart Event Simulation**: The system chooses some events at random
  - Add new Item.
  - Completely remove an item
  - Reduce the quantity of an item in the cart.
- **Dynamic Calculation:** The total amount of the purchase is displayed on the console after the events have been applied.

## 🎮 Demo 

When you run the project, you will see:

-  1️⃣ An initial, randomly generated cart.
-  2️⃣ Events applied to the cart(eg. adding or removing items).
-  3️⃣ Total amount of the purchase calculated and displayed at the end.

## 📂 Project structure 

```plaintext
📦 shopee-card
├── 📁src
│   └── app.js                  # Inital Project File
|   ├── 📁 config
│   └── └───── constants.js     # Uten abd event settings
|   ├── 📁 functions
│   └── └───── utils.js         # Reusable project functions
|   ├── 📁 services
│   └── └───── cart.js          # Cart Business rules and functions
│   └── └───── item.js          # Item Business rules and functions
├── package.json                # Depencencies and scripts
└── README.md                   # Documentation

```

## 🛠️ How to run the project?


```bash

git clone https://github.com/Luixs/NodeJS-eCommerceCart.git # 1️⃣ Clone 
npm i                                                       # 2️⃣ Install Packages
npm run-project                                             # 3️⃣ Run the project using this command
