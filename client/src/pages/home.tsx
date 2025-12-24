import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/ui/marquee";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { products, reviews } from "@/lib/data";
import { ArrowRight, Star } from "lucide-react";

// Asset Imports
import heroBg from "@assets/generated_images/black_sesame_paste_texture_and_color_background.png";
import sesameImg from "@assets/generated_images/jar_of_black_sesame_butter.png";
import misoImg from "@assets/generated_images/jar_of_miso_cashew_butter.png";
import chiliImg from "@assets/generated_images/jar_of_chili_peanut_crisp_butter.png";

const imageMap: Record<string, string> = {
  "product-sesame": sesameImg,
  "product-miso": misoImg,
  "product-chili": chiliImg,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Artistic nut butter swirl" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto pt-32">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-black leading-[0.9] tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            ROOTED IN HERITAGE.<br />MADE TO SHARE.
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 text-white/90 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            The next generation of nut butters. Bold Asian flavors that honor tradition and defy expectations.
          </p>
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <Link href="/shop">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg font-bold">
                Shop The Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee Separator */}
      <div className="bg-secondary py-6 border-y border-white/10">
        <Marquee className="text-secondary-foreground font-display font-bold text-2xl uppercase tracking-widest opacity-80">
          <span>Asian Inspired</span>
          <span>•</span>
          <span>Stone Ground</span>
          <span>•</span>
          <span>No Palm Oil</span>
          <span>•</span>
          <span>Bold Flavors</span>
          <span>•</span>
          <span>Small Batch</span>
          <span>•</span>
          <span>Heritage Ingredients</span>
          <span>•</span>
        </Marquee>
      </div>

      {/* Product Showcase */}
      <section className="py-32 px-4 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-black mb-4">THE COLLECTION</h2>
            <p className="text-muted-foreground text-lg max-w-md">Distinctly Asian flavors crafted into creamy, versatile spreads.</p>
          </div>
          <Link href="/shop">
            <Button variant="outline" className="group rounded-full px-6">
              View All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <a className="group block space-y-6">
                <div className={`relative aspect-[4/5] overflow-hidden rounded-2xl ${product.color} p-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]`}>
                  <img 
                    src={imageMap[product.image]} 
                    alt={product.name}
                    className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-black">
                    ${product.price}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-muted-foreground">{product.tagline}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </section>

      {/* Story/Brand Section */}
      <section className="bg-secondary text-secondary-foreground py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <img 
                src={heroBg} 
                alt="Texture close up" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <span className="text-accent font-bold tracking-widest uppercase">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-display font-black leading-tight">
              MORE THAN JUST<br /><span className="text-primary">NUT BUTTER.</span>
            </h2>
            <p className="text-lg text-secondary-foreground/80 leading-relaxed">
              We started Nout with a simple question: why are nut butter flavors so... beige?
              <br /><br />
              Drawing from our heritage, we infuse premium nuts with bold Asian ingredients like
              earthy black sesame, umami-rich miso, and fiery chili crisp. No fillers, just flavor.
            </p>
            <Button variant="link" className="text-white p-0 h-auto text-lg hover:text-primary transition-colors">
              Read our full story &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-32 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-display font-bold mb-16">COMMUNITY FAVORITES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl border border-border/50 hover:shadow-lg transition-shadow text-left">
              <div className="flex gap-1 text-primary mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-display text-xl mb-6 leading-relaxed">"{review.text}"</p>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">— {review.author}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
