import food from "../assets/1.jpg";
import chukka from "../assets/chukka.jpg";
import kalaki from "../assets/kalakki.jpg";
import chicken from "../assets/chicken.jpg";
import fried from "../assets/grill.jpg";
import nalli from "../assets/nalli.jpg";
import gravy from "../assets/mutton.jpg";
import Cheese from "../assets/chesse.jpg";

const productInfo = [
  {
    id: 1,
    name: "Chicken Chukka",
    cost: "$ 2.90",
    image: chukka,
    description:
      "This refreshing Blue Mojito combines the classic flavors of mint, lime, and rum with a splash of blue curaçao for a vibrant twist. Perfect for summer gatherings, its striking blue color and invigorating taste make it a standout cocktail",
    category: "Chicken",
    type: "Modifier",
    modifiers: [
      {
        name: "Choose your Type",
        options: [
          { name: "Gravy", price: 0, cover: Cheese },
          { name: "Dry", price: 1, cover: Cheese },
        ],
      },
      {
        name: "Add-ons",
        options: [
          { name: "Extra Spicy", price: 1, cover: Cheese },
          { name: "Extra Mayo", price: 2, cover: Cheese },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Chicken Gravy",
    description:
      "This refreshing Blue Mojito combines the classic flavors of mint, lime, and rum with a splash of blue curaçao for a vibrant twist. Perfect for summer gatherings, its striking blue color and invigorating taste make it a standout cocktail",
    cost: "$ 4.35",
    image: chukka,
    category: "Chicken",
  },
  {
    id: 3,
    name: "Chicken Grill",
    description:
      "This refreshing Blue Mojito combines the classic flavors of mint, lime, and rum with a splash of blue curaçao for a vibrant twist. Perfect for summer gatherings, its striking blue color and invigorating taste make it a standout cocktail",
    cost: "$ 4.35",
    image: chicken,
    category: "Chicken",
    type: "Combo",
  },
  {
    id: 4,
    name: "Fied Chicken",
    description:
      "This refreshing Blue Mojito combines the classic flavors of mint, lime, and rum with a splash of blue curaçao for a vibrant twist. Perfect for summer gatherings, its striking blue color and invigorating taste make it a standout cocktail",
    cost: "$ 4.35",
    image: fried,
    category: "Chicken",
    type: "Modifier",
    modifiers: [
      {
        name: "Choose your Modz",
        options: [
          { name: "Bone less", price: 0, cover: Cheese },
          { name: "With Bone", price: 1, cover: Cheese },
        ],
      },
      {
        name: "Add-ons",
        options: [
          { name: "Spicy Masala", price: 1, cover: Cheese },
          { name: "Thousand Island", price: 2, cover: Cheese },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Mutton Kalaki",
    description:
      "This refreshing Blue Mojito combines the classic flavors of mint, lime, and rum with a splash of blue curaçao for a vibrant twist. Perfect for summer gatherings, its striking blue color and invigorating taste make it a standout cocktail",
    cost: "$ 78.3",
    image: kalaki,
    category: "Mutton",
  },
  {
    id: 6,
    name: "Mutton Nalli",
    description:
      "This refreshing Blue Mojito combines the classic flavors of mint, lime, and rum with a splash of blue curaçao for a vibrant twist. Perfect for summer gatherings, its striking blue color and invigorating taste make it a standout cocktail",
    cost: "$ 78.3",
    image: nalli,
    category: "Mutton",
  },
  {
    id: 7,
    name: "Mutton gravy",
    description:
      "This refreshing Blue Mojito combines the classic flavors of mint, lime, and rum with a splash of blue curaçao for a vibrant twist. Perfect for summer gatherings, its striking blue color and invigorating taste make it a standout cocktail",
    cost: "$ 78.3",
    image: gravy,
    category: "Mutton",
    type: "Combo",
  },
  {
    id: 8,
    name: "Mutton Grill",
    description:
      "This refreshing Blue Mojito combines the classic flavors of mint, lime, and rum with a splash of blue curaçao for a vibrant twist. Perfect for summer gatherings, its striking blue color and invigorating taste make it a standout cocktail",
    cost: "$ 78.3",
    image: food,
    category: "Mutton",
  },
  {
    id: 9,
    name: "Beef Curry",
    description:
      "This refreshing Blue Mojito combines the classic flavors of mint, lime, and rum with a splash of blue curaçao for a vibrant twist. Perfect for summer gatherings, its striking blue color and invigorating taste make it a standout cocktail",
    cost: "$ 12.32",
    image: food,
    category: "Beef",
    type: "Modifier",
    modifiers: [
      {
        name: "Choose your type",
        options: [
          { name: "Dry", price: 0, cover: Cheese },
          { name: "gravy", price: 1, cover: Cheese },
        ],
      },
      {
        name: "Add-ons",
        options: [
          { name: "Extra Cheese", price: 1, cover: Cheese },
          { name: "Extra Spicy", price: 2, cover: Cheese },
        ],
      },
    ],
  },
  {
    id: 10,
    name: "Beef Chukka",
    description:
      "This refreshing Blue Mojito combines the classic flavors of mint, lime, and rum with a splash of blue curaçao for a vibrant twist. Perfect for summer gatherings, its striking blue color and invigorating taste make it a standout cocktail",
    cost: "$ 12.32",
    image: food,
    category: "Beef",
    type: "Combo",
  },
  { id: 11, name: "Dry Beef", cost: "$ 12.32", image: food, category: "Beef" },
  {
    id: 12,
    name: "Beef Masala",
    description:
      "This refreshing Blue Mojito combines the classic flavors of mint, lime, and rum with a splash of blue curaçao for a vibrant twist. Perfect for summer gatherings, its striking blue color and invigorating taste make it a standout cocktail",
    cost: "$ 12.32",
    image: food,
    category: "Beef",
  },
  {
    id: 13,
    name: "Chicken Briyani",
    description:
      "This refreshing Blue Mojito combines the classic flavors of mint, lime, and rum with a splash of blue curaçao for a vibrant twist. Perfect for summer gatherings, its striking blue color and invigorating taste make it a standout cocktail",
    cost: "$ 1.25",
    image: food,
    category: "Briyani",
  },
  {
    id: 14,
    name: "Mutton briyani",
    description:
      "This refreshing Blue Mojito combines the classic flavors of mint, lime, and rum with a splash of blue curaçao for a vibrant twist. Perfect for summer gatherings, its striking blue color and invigorating taste make it a standout cocktail",
    cost: "$ 1.25",
    image: food,
    category: "Briyani",
  },
  {
    id: 15,
    name: "Beef Briyani",
    description:
      "This refreshing Blue Mojito combines the classic flavors of mint, lime, and rum with a splash of blue curaçao for a vibrant twist. Perfect for summer gatherings, its striking blue color and invigorating taste make it a standout cocktail",
    cost: "$ 1.25",
    image: food,
    category: "Briyani",
    type: "Modifier",
    modifiers: [
      {
        name: "Choose your type",
        options: [
          { name: "Mandi Type", price: 0, cover: Cheese },
          { name: "Kerala type", price: 1, cover: Cheese },
        ],
      },
      {
        name: "Add-ons",
        options: [
          { name: "Extra Spicy", price: 1, cover: Cheese },
          { name: "Extra Sides", price: 2, cover: Cheese },
        ],
      },
    ],
  },
  {
    id: 16,
    name: "Naatu Kozhi briyani",
    description:
      "This refreshing Blue Mojito combines the classic flavors of mint, lime, and rum with a splash of blue curaçao for a vibrant twist. Perfect for summer gatherings, its striking blue color and invigorating taste make it a standout cocktail",
    cost: "$ 1.25",
    image: food,
    category: "Briyani",
  },
  {
    id: 17,
    name: "Tuqilla Shot",
    description:
      "This refreshing Blue Mojito combines the classic flavors of mint, lime, and rum with a splash of blue curaçao for a vibrant twist. Perfect for summer gatherings, its striking blue color and invigorating taste make it a standout cocktail",
    cost: "$ 2.65",
    image: food,
    category: "Drinks",
  },
  {
    id: 18,
    description:
      "This refreshing Blue Mojito combines the classic flavors of mint, lime, and rum with a splash of blue curaçao for a vibrant twist. Perfect for summer gatherings, its striking blue color and invigorating taste make it a standout cocktail",
    name: "Whisky",
    cost: "$ 2.65",
    image: food,
    category: "Drinks",
  },
  {
    id: 19,
    name: "Lable Cocktail",
    description:
      "This refreshing Blue Mojito combines the classic flavors of mint, lime, and rum with a splash of blue curaçao for a vibrant twist. Perfect for summer gatherings, its striking blue color and invigorating taste make it a standout cocktail",
    cost: "$ 2.65",
    image: food,
    category: "Drinks",
  },
  {
    id: 20,
    name: "Mango Cocktail",
    description:
      "This refreshing Blue Mojito combines the classic flavors of mint, lime, and rum with a splash of blue curaçao for a vibrant twist. Perfect for summer gatherings, its striking blue color and invigorating taste make it a standout cocktail",
    cost: "$ 2.65",
    image: food,
    category: "Drinks",
  },
  {
    id: 21,
    name: "Non Veg Meals",
    description:
      "This refreshing Blue Mojito combines the classic flavors of mint, lime, and rum with a splash of blue curaçao for a vibrant twist. Perfect for summer gatherings, its striking blue color and invigorating taste make it a standout cocktail",
    cost: "$ 4.36",
    image: food,
    category: "Meals",
  },
  {
    id: 22,
    name: "Special Meals",
    description:
      "This refreshing Blue Mojito combines the classic flavors of mint, lime, and rum with a splash of blue curaçao for a vibrant twist. Perfect for summer gatherings, its striking blue color and invigorating taste make it a standout cocktail",
    cost: "$ 4.36",
    image: food,
    category: "Meals",
  },
  {
    id: 23,
    name: "Thaali Meals",
    description:
      "This refreshing Blue Mojito combines the classic flavors of mint, lime, and rum with a splash of blue curaçao for a vibrant twist. Perfect for summer gatherings, its striking blue color and invigorating taste make it a standout cocktail",
    cost: "$ 4.36",
    image: food,
    category: "Meals",
  },
  {
    id: 24,
    name: "Fish Meals",
    description:
      "This refreshing Blue Mojito combines the classic flavors of mint, lime, and rum with a splash of blue curaçao for a vibrant twist. Perfect for summer gatherings, its striking blue color and invigorating taste make it a standout cocktail",
    cost: "$ 4.36",
    image: food,
    category: "Meals",
  },
];

export default productInfo;
