import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SkinItemsGrid } from "@/components/items/SkinItemsGrid";
import { mockSkinItems, weaponCategories } from "@/data/mockData";
import { Search, TrendingUp, Shield, Zap } from "lucide-react";

export default function HomePage() {
  // Get featured items (first 8 items)
  const featuredItems = mockSkinItems.slice(0, 8);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cs-dark via-gray-900 to-cs-dark py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/cs-bg-pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 bg-onlycs-blue/10 text-onlycs-blue border-onlycs-blue/20">
              ✨ Onlycs - Premium CS:GO & CS2 Marketplace
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Trade Premium
              <span className="text-onlycs-blue bg-gradient-to-r from-onlycs-blue to-blue-400 bg-clip-text text-transparent">
                {" "}Onlycs Skins
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover rare weapon skins, knives, and gloves. Join thousands of traders 
              in the most trusted Counter-Strike marketplace.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/items">
                <Button size="lg" variant="cs" className="min-w-[200px]">
                  <Search className="w-5 h-5 mr-2" />
                  Browse Items
                </Button>
              </Link>
              <Link href="/collections">
                <Button size="lg" variant="outline" className="min-w-[200px] border-white/20 text-white hover:bg-white/10">
                  View Collections
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-cs-blue/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-cs-blue" />
              </div>
              <h3 className="text-xl font-semibold">Secure Trading</h3>
              <p className="text-muted-foreground">
                All transactions are protected with industry-leading security measures.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-cs-blue/10 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-cs-blue" />
              </div>
              <h3 className="text-xl font-semibold">Real-time Prices</h3>
              <p className="text-muted-foreground">
                Get the most accurate market prices updated in real-time.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-cs-blue/10 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-cs-blue" />
              </div>
              <h3 className="text-xl font-semibold">Instant Delivery</h3>
              <p className="text-muted-foreground">
                Receive your items instantly after successful payment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our extensive collection of CS:GO and CS2 items organized by weapon type.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {weaponCategories.map((category) => (
              <Link key={category.id} href={`/items?category=${category.slug}`}>
                <div className="group p-6 bg-card border rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
                  <div className="w-12 h-12 bg-cs-blue/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-cs-blue/20 transition-colors">
                    <span className="text-cs-blue font-bold text-sm">
                      {category.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm group-hover:text-cs-blue transition-colors">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Items</h2>
              <p className="text-muted-foreground">
                Handpicked premium skins from our marketplace
              </p>
            </div>
            <Link href="/items">
              <Button variant="outline">
                View All Items
              </Button>
            </Link>
          </div>
          
          <SkinItemsGrid items={featuredItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cs-blue to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our community of traders and discover the best deals on premium CS skins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/items">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                Start Shopping
              </Button>
            </Link>
            <Link href="/sell">
              <Button size="lg" variant="outline" className="min-w-[200px] border-white/20 text-white hover:bg-white/10">
                Sell Your Items
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
