import wings from "../assets/product/Chicken/wings.jpg";
import grill from "../assets/product/Chicken/grill-combo.jpg";
import grillCombo from "../assets/product/Chicken/grill2.jpg";
import curry from "../assets/product/Chicken/curry.jpg";
import currySpicy from "../assets/product/Chicken/spicyCurry.jpg";
import curryMild from "../assets/product/Chicken/mildCurry.jpg";
import egg from "../assets/product/Chicken/egg.jpg";
import extraCurry from "../assets/product/Chicken/extraCurry.jpg";
import butter from "../assets/product/Chicken/butter.jpg";

import mutton from "../assets/product/Mutton/mutton.jpg";
import muttonCombo from "../assets/product/Mutton/muttonCombo.jpg";
import muttonCoke from "../assets/product/Mutton/muttonCoke.jpg";
import muttonMayo from "../assets/product/Mutton/muttonMayo.jpg";
import muttonBriyani from "../assets/product/Mutton/muttonbriyani.jpg";
import muttonCurry from "../assets/product/Mutton/mutton-curry.jpg";
import muttonBone from "../assets/product/Mutton/muttonBone.jpg";
import muttonBoneless from "../assets/product/Mutton/muttonBoneless.jpg";
import fries from "../assets/product/Mutton/frenchFries.jpg";
import food from "../assets/product/Mutton/frenchFries.jpg";
import Cheese from "../assets/product/Mutton/frenchFries.jpg";

const productInfo = [
  // 🐔 Chicken
  {
    id: 1,
    name: "Spicy Chicken Wings",
    cost: "$3.50",
    image: wings,
    description: "Crispy and spicy chicken wings tossed in a hot sauce.",
    category: "Chicken",
  },
  {
    id: 2,
    name: "Chicken Grill Combo",
    cost: "$5.90",
    image: grill,
    description: "Grilled chicken served with fries, salad, and dip.",
    category: "Chicken",
    type: "Combo",
    combo: [
      {
        name: "Choose your Combo Variations",
        options: [
          { name: "Grill + French Fries + Pepsi", price: "$0", cover: grill },
          {
            name: "Grill + Fries + Coke + Burger",
            price: "$8.12",
            cover: grillCombo,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Butter Chicken",
    cost: "$4.75",
    image: butter,
    description: "Rich and creamy butter chicken cooked in tomato gravy.",
    category: "Chicken",
  },
  {
    id: 4,
    name: "Chicken Curry",
    cost: "$4.25",
    image: curry,
    description: "Aromatic chicken curry cooked with traditional spices.",
    category: "Chicken",
    type: "Modifier",
    modifiers: [
      {
        name: "Choose your Type",
        options: [
          { name: "Spicy", price: 0, cover: currySpicy },
          { name: "Mild", price: 1, cover: curryMild },
        ],
      },
      {
        name: "Add-ons",
        options: [
          { name: "Boiled Egg", price: 1, cover: egg },
          { name: "Extra Gravy", price: 2, cover: extraCurry },
        ],
      },
    ],
  },

  // 🐐 Mutton
  {
    id: 5,
    name: "Mutton Sukka",
    cost: "$6.80",
    image: mutton,
    description: "Dry-fried mutton cubes cooked in chettinad style.",
    category: "Mutton",
  },
  {
    id: 6,
    name: "Mutton Combo Special",
    cost: "$7.90",
    image: muttonCombo,
    description: "Mutton gravy, rice, egg, and side salad combo.",
    category: "Mutton",
    type: "Combo",
    combo: [
      {
        name: "Choose your Combo Variations",
        options: [
          { name: "Mutton Gravy + Coke", price: "$0", cover: muttonCoke },
          {
            name: "Mutton Chukka + mayo",
            price: "$8.12",
            cover: muttonMayo,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Mutton Biryani",
    cost: "$8.30",
    image: muttonBriyani,
    description: "Fragrant basmati rice with juicy mutton pieces.",
    category: "Mutton",
  },
  {
    id: 8,
    name: "Mutton Curry",
    cost: "$7.40",
    image: muttonCurry,
    description: "Slow-cooked mutton in spicy red curry.",
    category: "Mutton",
    type: "Modifier",
    modifiers: [
      {
        name: "Choose your Type",
        options: [
          { name: "With Bone", price: 0, cover: muttonBone },
          { name: "Boneless", price: 1, cover: muttonBoneless },
        ],
      },
      {
        name: "Add-ons",
        options: [
          { name: "Extra Masala", price: 1, cover: muttonBone },
          { name: "Potato Pieces", price: 2, cover: fries },
        ],
      },
    ],
  },

  // 🥩 Beef
  {
    id: 9,
    name: "Beef Ularthiyathu",
    cost: "$6.25",
    image: food,
    description: "Kerala-style beef fry with coconut slivers.",
    category: "Beef",
  },
  {
    id: 10,
    name: "Beef Meal Combo",
    cost: "$7.25",
    image: food,
    description: "Beef curry, rice, papad, and vegetable sides.",
    category: "Beef",
    type: "Combo",
  },
  {
    id: 11,
    name: "Pepper Beef Roast",
    cost: "$6.75",
    image: food,
    description: "Spicy beef roast seasoned with black pepper.",
    category: "Beef",
  },
  {
    id: 12,
    name: "Beef Curry",
    cost: "$6.55",
    image: food,
    description: "Beef simmered in onion-tomato masala.",
    category: "Beef",
    type: "Modifier",
    modifiers: [
      {
        name: "Choose your Type",
        options: [
          { name: "Thick Gravy", price: 0, cover: Cheese },
          { name: "Thin Gravy", price: 1, cover: Cheese },
        ],
      },
      {
        name: "Add-ons",
        options: [
          { name: "Extra Meat", price: 2, cover: Cheese },
          { name: "Add Liver", price: 1.5, cover: Cheese },
        ],
      },
    ],
  },
];
export default productInfo;
