import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useRoute, Link } from "wouter";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ArrowLeft, Check, Truck, ShieldCheck } from "lucide-react";
import { useState } from "react";
import NotFound from "@/pages/not-found";

// Asset Imports
import sesameImg from "@assets/generated_images/jar_of_black_sesame_butter.png";
import misoImg from "@assets/generated_images/jar_of_miso_cashew_butter.png";
import chiliImg from "@assets/generated_images/jar_of_chili_peanut_crisp_butter.png";
import { useToast } from "@/hooks/use-toast";

const imageMap: Record<string, string> = {
  "product-sesame": sesameImg,
  "product-miso": misoImg,
  "product-chili": chiliImg,
};

export default function ProductPage() {
  const [, params] = useRoute("/product/:id");
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  
  const product = products.find(p => p.id === params?.id);

  if (!product) return <NotFound />;

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity}x ${product.name} added to your bag.`,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 mb-8">
          <Link href="/shop">
            <a className="inline-flex items-center text-sm font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
            </a>
          </Link>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Image Gallery */}
          <div className={`aspect-square rounded-3xl ${product.color} flex items-center justify-center p-12 sticky top-32`}>
            <img 
              src={imageMap[product.image]} 
              alt={product.name}
              className="w-full h-full object-contain drop-shadow-2xl animate-in zoom-in-90 duration-700"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-8 pt-4">
            <div>
              <h1 className="text-5xl md:text-6xl font-display font-black mb-4 leading-tight">{product.name}</h1>
              <p className="text-2xl text-muted-foreground font-light">{product.tagline}</p>
            </div>

            <div className="text-3xl font-bold font-display">${product.price}</div>

            <div className="prose prose-lg text-muted-foreground">
              <p>{product.description}</p>
            </div>

            <div className="border-y border-border py-8 space-y-6">
              <div>
                <h4 className="font-bold uppercase tracking-wider text-sm mb-3">Ingredients</h4>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <span key={ing} className="bg-secondary/5 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-wider text-sm mb-3">Highlights</h4>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center text-muted-foreground">
                      <Check className="w-4 h-4 mr-2 text-primary" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-full p-1">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-full h-10 w-10"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-full h-10 w-10"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <Button 
                  size="lg" 
                  className="flex-1 rounded-full text-lg h-14 bg-primary hover:bg-primary/90 text-white font-bold"
                  onClick={handleAddToCart}
                >
                  Add to Cart — ${(product.price * quantity).toFixed(2)}
                </Button>
              </div>
              <p className="text-center text-xs text-muted-foreground pt-2">
                Free shipping on orders over $50. No questions asked returns.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground bg-secondary/5 p-4 rounded-xl">
                <Truck className="w-5 h-5 text-primary" />
                <span>Ships within 24 hours</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground bg-secondary/5 p-4 rounded-xl">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
