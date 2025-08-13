export default function HomePage() {
  return (
    <div 
      className="text-white w-full min-h-screen" 
      style={{ backgroundColor: '#06070b' }}
    >
      {/* Hero Section */}
      <div 
        className="text-center p-8 flex flex-col justify-center items-center"
        style={{ minHeight: '70vh' }}
      >
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
          Welcome to Onlycs
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8">
          Premium CS:GO & CS2 Skins Marketplace
        </p>
        <div className="text-lg text-white/60">
          Discover the best weapon skins, knives, and gloves
        </div>
      </div>

      {/* Category Cards Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Browse Categories
          </h2>
          
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            
            {/* AWP Category */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/80 to-purple-900/80 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer transform hover:scale-105 h-64">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="relative z-10 flex items-center justify-center h-full p-6">
                <h3 className="text-3xl font-black text-white text-center tracking-wider">
                  AWP
                </h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Knives Category */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-900/80 to-orange-900/80 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer transform hover:scale-105 h-64">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="relative z-10 flex items-center justify-center h-full p-6">
                <h3 className="text-3xl font-black text-white text-center tracking-wider">
                  KNIVES
                </h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* More Category - Takes up 2 columns on lg screens */}
            <div className="lg:col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-900/80 to-teal-900/80 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer transform hover:scale-105 h-64">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="relative z-10 flex items-center justify-center h-full p-6">
                <div className="text-center">
                  <h3 className="text-4xl font-black text-white mb-2 tracking-wider">
                    MORE CATEGORIES
                  </h3>
                  <p className="text-lg text-white/80">
                    Explore all weapon types
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Rifle Category */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-900/80 to-amber-900/80 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer transform hover:scale-105 h-64">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="relative z-10 flex items-center justify-center h-full p-6">
                <div className="text-center">
                  <h3 className="text-3xl font-black text-white mb-1 tracking-wider">
                    RIFLE
                  </h3>
                  <p className="text-sm text-white/70 font-bold">
                    AK & M4 Series
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Accessory Category */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-900/80 to-rose-900/80 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer transform hover:scale-105 h-64">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="relative z-10 flex items-center justify-center h-full p-6">
                <h3 className="text-3xl font-black text-white text-center tracking-wider">
                  ACCESSORY
                </h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
