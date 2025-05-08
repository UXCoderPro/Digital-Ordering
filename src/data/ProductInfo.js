import food from "../assets/1.jpg";
import chukka from "../assets/chukka.jpg";
import kalaki from "../assets/kalakki.jpg";
import chicken from "../assets/chicken.jpg";
import fried from "../assets/grill.jpg";
import nalli from "../assets/nalli.jpg";
import gravy from "../assets/mutton.jpg";

const productInfo = [
  {
    name: "Chicken Chukka",
    cost: "$ 2.90",
    image: chukka,
    category: "Chicken",
    type: "Modifier",
  },
  { name: "Chicken Gravy", cost: "$ 4.35", image: chukka, category: "Chicken" },
  {
    name: "Chicken Grill",
    cost: "$ 4.35",
    image: chicken,
    category: "Chicken",
    type: "Combo",
  },
  {
    name: "Fied Chicken",
    cost: "$ 4.35",
    image: fried,
    category: "Chicken",
    type: "Modifier",
  },
  { name: "Mutton Kalaki", cost: "$ 78.3", image: kalaki, category: "Mutton" },
  { name: "Mutton Nalli", cost: "$ 78.3", image: nalli, category: "Mutton" },
  {
    name: "Mutton gravy",
    cost: "$ 78.3",
    image: gravy,
    category: "Mutton",
    type: "Combo",
  },
  { name: "Mutton Grill", cost: "$ 78.3", image: food, category: "Mutton" },
  {
    name: "Beef Curry",
    cost: "$ 12.32",
    image: food,
    category: "Beef",
    type: "Modifier",
  },
  {
    name: "Beef Chukka",
    cost: "$ 12.32",
    image: food,
    category: "Beef",
    type: "Combo",
  },
  { name: "Dry Beef", cost: "$ 12.32", image: food, category: "Beef" },
  { name: "Beef Masala", cost: "$ 12.32", image: food, category: "Beef" },
  { name: "Chicken Briyani", cost: "$ 1.25", image: food, category: "Briyani" },
  { name: "Mutton briyani", cost: "$ 1.25", image: food, category: "Briyani" },
  {
    name: "Beef Briyani",
    cost: "$ 1.25",
    image: food,
    category: "Briyani",
    type: "Modifier",
  },
  {
    name: "Naatu Kozhi briyani",
    cost: "$ 1.25",
    image: food,
    category: "Briyani",
  },
  { name: "Tuqilla Shot", cost: "$ 2.65", image: food, category: "Drinks" },
  { name: "Whisky", cost: "$ 2.65", image: food, category: "Drinks" },
  { name: "Lable Cocktail", cost: "$ 2.65", image: food, category: "Drinks" },
  { name: "Mango Cocktail", cost: "$ 2.65", image: food, category: "Drinks" },
  { name: "Non Veg Meals", cost: "$ 4.36", image: food, category: "Meals" },
  { name: "Special Meals", cost: "$ 4.36", image: food, category: "Meals" },
  { name: "Thaali Meals", cost: "$ 4.36", image: food, category: "Meals" },
  { name: "Fish Meals", cost: "$ 4.36", image: food, category: "Meals" },
];

export default productInfo;
