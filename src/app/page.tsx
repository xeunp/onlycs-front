import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SkinItemsGrid } from "@/components/items/SkinItemsGrid";
import { mockSkinItems, weaponCategories } from "@/data/mockData";
import { Search, TrendingUp, Shield, Zap } from "lucide-react";

export default function HomePage() {
  // Get featured items (first 8 items)
  const featuredItems = mockSkinItems.slice(0, 8);
  
  const categories = [
    { id: 1, name: 'Rifles', icon: '🔫', count: 245 },
    { id: 2, name: 'Pistols', icon: '🔫', count: 189 },
    { id: 3, name: 'Knives', icon: '🔪', count: 156 },
    { id: 4, name: 'Gloves', icon: '🧤', count: 89 },
    { id: 5, name: 'Snipers', icon: '🎯', count: 67 },
    { id: 6, name: 'SMGs', icon: '💥', count: 124 },
  ];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-hero-gradient-start to-hero-gradient-end py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <Badge variant="outline" className="mb-6 bg-onlycs-blue/10 text-onlycs-blue border-onlycs-blue/20 block w-fit ml-auto">
            Onlycs - Made by gamers, for gamers &lt;3
            </Badge>
            
            <div className="absolute top-0 right-0 p-8 max-w-2xl" dir="rtl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-right">
                بزرگ ترین سایت خرید
                <span className="text-onlycs-blue">
                  {" "}skin های CS2 
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-0 text-right">
                Discover rare weapon skins, knives, and gloves. Join thousands of traders 
                in the most trusted Counter-Strike marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
