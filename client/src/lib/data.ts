export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  description: string;
  ingredients: string[];
  image: string;
  color: string;
  features: string[];
}

// These images will be replaced by the generated ones in the components
export const products: Product[] = [
  {
    id: "black-sesame",
    name: "Black Sesame",
    tagline: "Macadamia Nuts With Decadent Black Sesame",
    price: 18,
    description: "A rich, nutty, and savory spread made from roasted black sesame seeds and buttery macadamia nuts. Stone-ground for 24 hours to achieve liquid gold consistency. Perfect on toast, in smoothies, or drizzled over vanilla ice cream.",
    ingredients: ["Roasted Black Sesame Seeds", "Macadamia Nuts", "Touch of Maple Syrup", "Sea Salt"],
    image: "product-sesame",
    color: "bg-stone-900",
    features: ["Antioxidant Rich", "Stone Ground", "No Palm Oil"]
  },
  {
    id: "matcha",
    name: "Matcha",
    tagline: "Coming Soon",
    price: 0,
    description: "Vibrant ceremonial grade matcha blended with creamy nuts. A concentrated burst of energy and antioxidants in every spoonful.",
    ingredients: ["Roasted Cashews", "Ceremonial Grade Matcha", "Coconut Oil"],
    image: "product-matcha",
    color: "bg-[#4D7C0F]", // Deep Matcha Green
    features: ["Coming Soon"]
  },
  {
    id: "ube",
    name: "Ube",
    tagline: "Coming Soon",
    price: 0,
    description: "Earthy, sweet, and vibrantly purple. Our take on the classic Filipino yam, blended into a silky nut spread.",
    ingredients: ["Roasted Almonds", "Purple Yam (Ube)", "Coconut Milk"],
    image: "product-ube",
    color: "bg-[#7E22CE]", // Ube Purple
    features: ["Coming Soon"]
  }
];

export const reviews = [
  {
    id: 1,
    author: "Lily C.",
    rating: 5,
    text: "It's soooo good and so addicting"
  },
  {
    id: 2,
    author: "Calum K.",
    rating: 5,
    text: "I eat the Black Sesame straight from the jar. Don't judge me"
  },
  {
    id: 3,
    author: "Jack G.",
    rating: 5,
    text: "This stuff is fire. The Black Sesame is a winner"
  }
];
