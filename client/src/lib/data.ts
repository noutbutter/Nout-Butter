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
    name: "Midnight Sesame",
    tagline: "100% Black Sesame Butter",
    price: 18,
    description: "A rich, nutty, and savory spread made from roasted black sesame seeds. Stone-ground for 24 hours to achieve liquid gold consistency. Perfect on toast, in smoothies, or drizzled over vanilla ice cream.",
    ingredients: ["Roasted Black Sesame Seeds", "Touch of Maple Syrup", "Sea Salt"],
    image: "product-sesame", // Placeholder key
    color: "bg-stone-900",
    features: ["Antioxidant Rich", "Stone Ground", "No Palm Oil"]
  },
  {
    id: "miso-cashew",
    name: "Golden Miso",
    tagline: "Miso Cashew Butter",
    price: 22,
    description: "The perfect balance of umami and sweet. Creamy roasted cashews blended with organic white miso and a hint of wildflower honey. It's like salted caramel, but better for you.",
    ingredients: ["Roasted Cashews", "Organic White Miso", "Wildflower Honey", "Coconut Oil"],
    image: "product-miso", // Placeholder key
    color: "bg-amber-200",
    features: ["Probiotic", "Umami Bomb", "Creamy Texture"]
  },
  {
    id: "chili-crisp",
    name: "Spicy Crunch",
    tagline: "Chili Peanut Crisp",
    price: 20,
    description: "Not your childhood peanut butter. We took organic roasted peanuts and folded in our house-made szechuan chili crisp for a heat that builds. Savory, spicy, and impossibly addictive.",
    ingredients: ["Roasted Peanuts", "Szechuan Chili Flakes", "Garlic", "Shallots", "Tamari"],
    image: "product-chili", // Placeholder key
    color: "bg-orange-600",
    features: ["Medium Heat", "High Protein", "Savory"]
  }
];

export const reviews = [
  {
    id: 1,
    author: "Sarah J.",
    rating: 5,
    text: "The Black Sesame butter changed my morning routine forever. It's so decadent."
  },
  {
    id: 2,
    author: "Michael C.",
    rating: 5,
    text: "I eat the Chili Peanut Crisp straight from the jar. Don't judge me."
  },
  {
    id: 3,
    author: "Elena R.",
    rating: 5,
    text: "Finally, a nut butter that isn't just sugar. The Miso Cashew is incredible on apples."
  }
];
