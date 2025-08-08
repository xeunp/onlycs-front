import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full py-4">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl bg-gradient-to-r from-black/80 via-black/60 to-black/80 rounded-[30px] p-4 shadow-lg relative overflow-hidden border border-gray-700/30">
          {/* Black fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 rounded-[30px]"></div>
          
          <div className="flex h-12 items-center relative z-10">
            {/* Login Button explicitly positioned on the left */}
            <Link
              href="/login"
              className="ml-0 mr-auto bg-gradient-to-r from-black to-gray-800 text-white px-6 py-2 rounded-[30px] border border-gray-600/50 hover:border-gray-400 hover:text-gray-200 hover:shadow-lg hover:shadow-black/30 transition-all duration-300 font-medium flex items-center gap-2"
            >
              <Image 
                src="/Steam_logo.svg" 
                alt="Steam Logo" 
                width={20} 
                height={20} 
                className="w-5 h-5"
              />
              Login with Steam
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
