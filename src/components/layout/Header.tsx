'use client';

import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { LoginStatus } from "@/components/auth/LoginStatus";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full py-3">
      <div className="w-full px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between gap-4 sm:gap-6 lg:gap-8">
          {/* Left: About Us Button */}
          <div className="flex items-center ml-2 sm:ml-4 lg:ml-6">
            <Link
              href="/about"
              className="text-white px-4 py-2 rounded-[15px] font-medium text-sm backdrop-blur-sm border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300"
              style={{backgroundColor: '#06070b'}}
            >
              About Us
            </Link>
          </div>

          {/* Center: Raw White Search Bar with Heart Beat */}
          {pathname !== "/about" && (
            <div className="flex-1 flex justify-center mx-4 sm:mx-6 lg:mx-8">
              <div className="relative max-w-md w-full">
                {/* Search bar container with heart beat animation */}
                <div className="relative heartbeat">
                  {/* Pure white background */}
                  <div className="absolute inset-0 bg-white rounded-full border border-gray-200 shadow-xl"></div>
                  
                  <div className="relative flex items-center">
                    <Search className="absolute left-4 w-5 h-5 text-black z-10" />
                    {/* Pure white input with raw black text */}
                    <input
                      type="text"
                      placeholder="search skin or item"
                      dir="ltr"
                      className="w-full pl-12 pr-6 py-3 rounded-full bg-white text-black placeholder-black/60 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all duration-300 relative z-10"
                      style={{
                        textAlign: 'left'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Right: Login Status Component */}
          <div className="flex items-center mr-2 sm:mr-4 lg:mr-6">
            <LoginStatus
              // Demo state - replace with your actual auth state
              isAuthenticated={false} // Change to true to see authenticated state
              // avatarUrl="https://example.com/avatar.jpg" // User's avatar URL
              // userName="John Doe" // User's display name
              onLogin={() => {
                // TODO: Implement Steam login flow
                // Example: window.location.href = '/api/auth/steam';
                console.log('Login clicked - implement Steam OAuth flow');
              }}
              onProfileClick={() => {
                // TODO: Implement profile action
                // Example: router.push('/profile') or toggle dropdown
                console.log('Profile clicked - implement profile navigation');
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
