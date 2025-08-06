import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu,
  Heart
} from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full py-4">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl bg-red-500 rounded-[30px] p-4 shadow-case-hardened-glow relative overflow-hidden border-4 border-yellow-400">
          {/* Case hardened pattern overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-case-hardened-cyan/30 via-transparent to-case-hardened-blue/20 rounded-[30px]"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-case-hardened-teal/20 via-transparent to-case-hardened-cyan/10 rounded-[30px]"></div>
          
          <div className="flex h-12 items-center justify-between relative z-10">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-case-hardened-cyan to-case-hardened-blue rounded-[30px] flex items-center justify-center shadow-case-hardened-inner">
                <span className="text-white font-bold text-sm">OC</span>
              </div>
              <span className="font-bold text-xl text-white drop-shadow-sm">Onlycs</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/items" className="text-sm font-medium text-white/90 hover:text-white transition-colors px-4 py-2 rounded-[30px] hover:bg-case-hardened-cyan/20 hover:shadow-case-hardened-inner">
                All Items
              </Link>
              <Link href="/items?category=pistols" className="text-sm font-medium text-white/90 hover:text-white transition-colors px-4 py-2 rounded-[30px] hover:bg-case-hardened-cyan/20 hover:shadow-case-hardened-inner">
                Pistols
              </Link>
              <Link href="/items?category=rifles" className="text-sm font-medium text-white/90 hover:text-white transition-colors px-4 py-2 rounded-[30px] hover:bg-case-hardened-cyan/20 hover:shadow-case-hardened-inner">
                Rifles
              </Link>
              <Link href="/items?category=snipers" className="text-sm font-medium text-white/90 hover:text-white transition-colors px-4 py-2 rounded-[30px] hover:bg-case-hardened-cyan/20 hover:shadow-case-hardened-inner">
                Snipers
              </Link>
              <Link href="/collections" className="text-sm font-medium text-white/90 hover:text-white transition-colors px-4 py-2 rounded-[30px] hover:bg-case-hardened-cyan/20 hover:shadow-case-hardened-inner">
                Collections
              </Link>
            </nav>

            {/* Search */}
            <div className="hidden lg:flex items-center space-x-2 flex-1 max-w-md mx-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-case-hardened-cyan w-4 h-4" />
                <Input
                  placeholder="Search for weapons..."
                  className="pl-10 bg-case-hardened-dark/50 border-case-hardened-cyan/30 text-white placeholder:text-case-hardened-cyan/70 rounded-[30px] focus:border-case-hardened-cyan focus:ring-case-hardened-cyan/50"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-case-hardened-cyan/20 hover:text-case-hardened-cyan rounded-[30px] transition-all">
                <Search className="w-5 h-5" />
              </Button>
              
              <Button variant="ghost" size="icon" className="text-white hover:bg-case-hardened-cyan/20 hover:text-case-hardened-cyan rounded-[30px] transition-all">
                <Heart className="w-5 h-5" />
              </Button>
              
              <Button variant="ghost" size="icon" className="relative text-white hover:bg-case-hardened-cyan/20 hover:text-case-hardened-cyan rounded-[30px] transition-all">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-case-hardened-cyan text-case-hardened-dark text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  0
                </span>
              </Button>
              
              <Button variant="ghost" size="icon" className="text-white hover:bg-case-hardened-cyan/20 hover:text-case-hardened-cyan rounded-[30px] transition-all">
                <User className="w-5 h-5" />
              </Button>
              
              <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-case-hardened-cyan/20 hover:text-case-hardened-cyan rounded-[30px] transition-all">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="lg:hidden pt-4 relative z-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-case-hardened-cyan w-4 h-4" />
              <Input
                placeholder="Search for weapons..."
                className="pl-10 bg-case-hardened-dark/50 border-case-hardened-cyan/30 text-white placeholder:text-case-hardened-cyan/70 rounded-[30px] focus:border-case-hardened-cyan focus:ring-case-hardened-cyan/50"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
