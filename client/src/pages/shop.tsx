import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { products } from "@/lib/data";

// Asset Imports
import sesameImg from "@assets/generated_images/jar_of_black_sesame_butter.png";
import misoImg from "@assets/generated_images/jar_of_miso_cashew_butter.png";
import chiliImg from "@assets/generated_images/jar_of_chili_peanut_crisp_butter.png";

const imageMap: Record<string, string> = {
  "product-sesame": sesameImg,
  "product-miso": misoImg,
  "product-chili": chiliImg,
};

export default function Shop() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="pt-32 pb-12 container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-display font-black mb-6">SHOP ALL</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Small batch. Big flavor. Explore our collection of heritage-inspired spreads.
        </p>
      </div>

      <section className="pb-32 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <a className="group block space-y-6">
                <div className={`relative aspect-[4/5] overflow-hidden rounded-2xl ${product.color} p-10 flex items-center justify-center`}>
                  <img 
                    src={imageMap[product.image]} 
                    alt={product.name}
                    className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-black">
                    ${product.price}
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-display font-bold mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-3">{product.tagline}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.slice(0, 2).map((feature, i) => (
                      <span key={i} className="text-xs border border-border px-2 py-1 rounded-md text-muted-foreground">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
