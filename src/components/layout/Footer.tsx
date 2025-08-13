import Link from 'next/link';
import { Github, Twitter, MessageCircle, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/20" style={{ backgroundColor: '#06070b' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">OC</span>
              </div>
              <span className="font-bold text-xl text-white">Onlycs</span>
            </div>
            <p className="text-sm text-white/70">
              The premier destination for CS:GO and CS2 skin trading. 
              Find the best deals on weapon skins, knives, and gloves.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/items" className="text-white/70 hover:text-white transition-colors">
                  Browse Items
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-white/70 hover:text-white transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/market-stats" className="text-white/70 hover:text-white transition-colors">
                  Market Stats
                </Link>
              </li>
              <li>
                <Link href="/price-history" className="text-white/70 hover:text-white transition-colors">
                  Price History
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/items?category=pistols" className="text-white/70 hover:text-white transition-colors">
                  Pistols
                </Link>
              </li>
              <li>
                <Link href="/items?category=rifles" className="text-white/70 hover:text-white transition-colors">
                  Rifles
                </Link>
              </li>
              <li>
                <Link href="/items?category=snipers" className="text-white/70 hover:text-white transition-colors">
                  Sniper Rifles
                </Link>
              </li>
              <li>
                <Link href="/items?category=knives" className="text-white/70 hover:text-white transition-colors">
                  Knives
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-white/70 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white/70">
            © 2024 CS Marketplace. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-white/50 text-center">
          <p>
            Counter-Strike: Global Offensive and CS2 are registered trademarks of Valve Corporation. 
            This site is not affiliated with Valve Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
}
