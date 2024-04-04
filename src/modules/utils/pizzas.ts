import { Ipizza } from "./types";
import PizzaPepperoni from "/public/PizzaPepperoni.jpg";
import PizzaAbacaxi from "/public/PizzaAbacaxi.jpg";
import PizzaRedonda from "/public/PizzaRedonda.jpg";
import BBQChickenPizza from "/public/BBQChickenPizza.jpg";
import PizzaTomate from "/public/PizzaTomate.jpg";
export const pizzas: Ipizza[] = [
  {
    name: "Pepperoni Pizza",
    image: PizzaPepperoni.src,
    price: 29.9,
    description: "One of the best tasty Pepperoni and cheese pizza!",
  },
  {
    name: "Pineapple Pizza",
    image: PizzaAbacaxi.src,
    price: 29.9,
    description: "One of the best tasty Pineapple and cheese pizza!",
  },
  {
    name: "Classic Pizza",
    image: PizzaRedonda.src,
    price: 29.9,
    description: "One of the best tasty Classic pizza!",
  },
  {
    name: "BBQ Chicken Pizza",
    image: BBQChickenPizza.src,
    price: 29.9,
    description: "One of the best tasty Barbecue and chicken pizza!",
  },
  {
    name: "Tomato Pizza",
    image: PizzaTomate.src,
    price: 29.9,
    description: "One of the best tasty Tomato pizza!",
  },


]