import Link from 'next/link';
import { Github, Twitter, MessageCircle, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cs-blue rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">CS</span>
              </div>
              <span className="font-bold text-xl">Marketplace</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The premier destination for CS:GO and CS2 skin trading. 
              Find the best deals on weapon skins, knives, and gloves.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/items" className="text-muted-foreground hover:text-foreground transition-colors">
                  Browse Items
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-muted-foreground hover:text-foreground transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/market-stats" className="text-muted-foreground hover:text-foreground transition-colors">
                  Market Stats
                </Link>
              </li>
              <li>
                <Link href="/price-history" className="text-muted-foreground hover:text-foreground transition-colors">
                  Price History
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/items?category=pistols" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pistols
                </Link>
              </li>
              <li>
                <Link href="/items?category=rifles" className="text-muted-foreground hover:text-foreground transition-colors">
                  Rifles
                </Link>
              </li>
              <li>
                <Link href="/items?category=snipers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sniper Rifles
                </Link>
              </li>
              <li>
                <Link href="/items?category=knives" className="text-muted-foreground hover:text-foreground transition-colors">
                  Knives
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © 2024 CS Marketplace. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-muted-foreground text-center">
          <p>
            Counter-Strike: Global Offensive and CS2 are registered trademarks of Valve Corporation. 
            This site is not affiliated with Valve Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
}
