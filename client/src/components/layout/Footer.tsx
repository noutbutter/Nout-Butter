import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold">NOUT</h3>
            <p className="text-muted-foreground max-w-xs">
              Asian-inspired nut butters made with heritage ingredients and bold flavors.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Shop</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bundles</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Stay in the loop</h4>
            <p className="text-muted-foreground mb-4">Subscribe for recipes, drops, and more.</p>
            <div className="flex gap-2">
              <Input 
                placeholder="email@example.com" 
                className="bg-transparent border-white/20 text-white placeholder:text-white/40 focus:border-primary" 
              />
              <Button>Join</Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Nout Foods. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
