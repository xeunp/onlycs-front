'use client';

export default function AboutPage() {
  return (
    <div 
      className="text-white w-full min-h-screen p-8" 
      style={{ backgroundColor: '#06070b' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-pulse">
            About Onlycs
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            The premier destination for CS:GO and CS2 skin trading, built by gamers for gamers.
          </p>
        </div>

        {/* Main Telegram CTA Section */}
        <div className="mb-16">
          <div className="group relative overflow-hidden bg-gradient-to-br from-blue-600/30 via-cyan-500/20 to-blue-800/30 backdrop-blur-lg rounded-3xl p-12 border border-blue-400/30 hover:border-blue-300/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-cyan-400/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
              <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-40 animation-delay-700"></div>
              <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping opacity-50 animation-delay-1000"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <div className="mb-8">
                {/* Animated Telegram icon */}
                <div className="inline-flex items-center justify-center w-24 h-24 mb-6 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12 shadow-lg shadow-blue-500/30">
                  <svg className="w-12 h-12 text-white animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 mb-4 group-hover:scale-105 transition-transform duration-300">
                  Need Help?
                </h2>
                
                <p className="text-xl md:text-2xl text-white/90 mb-6 group-hover:text-white transition-colors duration-300">
                  Get instant support on Telegram!
                </p>
                
                <div className="space-y-4 mb-8">
                  <p className="text-lg text-blue-200 font-medium animate-pulse">
                    ⚡ Lightning fast responses
                  </p>
                  <p className="text-lg text-cyan-200 font-medium animate-pulse animation-delay-300">
                    🎮 Expert CS:GO & CS2 knowledge
                  </p>
                  <p className="text-lg text-blue-200 font-medium animate-pulse animation-delay-600">
                    🔒 Secure and private conversations
                  </p>
                </div>
              </div>
              
              {/* Main CTA Button */}
              <a 
                href="https://t.me/onlycsirSupport" 
                className="group/btn relative inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:via-cyan-400 hover:to-blue-400 text-white text-xl font-bold px-12 py-6 rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/40 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                
                <svg className="w-8 h-8 group-hover/btn:scale-125 group-hover/btn:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                
                <span className="relative z-10 group-hover/btn:tracking-wider transition-all duration-300">
                  Contact Support Now
                </span>
                
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur opacity-20 group-hover/btn:opacity-40 transition-opacity duration-300"></div>
              </a>
              
              {/* Telegram Username Display */}
              <div className="mt-8 p-4 bg-black/30 rounded-xl border border-blue-400/20 backdrop-blur-sm">
                <p className="text-blue-300 text-sm mb-2">Direct Telegram Contact:</p>
                <p className="text-2xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 font-bold">
                  @onlycsirSupport
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Telegram Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:bg-blue-950/20">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">Instant Responses</h3>
            <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
              Get help immediately with real-time messaging
            </p>
          </div>
          
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:bg-cyan-950/20">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔒</div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">Secure & Private</h3>
            <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
              End-to-end encrypted conversations for your safety
            </p>
          </div>
          
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:bg-green-950/20">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎮</div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">Gaming Experts</h3>
            <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
              Support from experienced CS:GO & CS2 players
            </p>
          </div>
        </div>

        {/* Call to Action Footer */}
        <div className="text-center bg-gradient-to-r from-blue-900/30 via-cyan-800/20 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 mb-4 animate-pulse">
            Ready to Get Started?
          </h3>
          <p className="text-white/80 text-lg mb-6">
            Join thousands of satisfied customers who trust our Telegram support
          </p>
          <a 
            href="https://t.me/onlycsirSupport" 
            className="inline-flex items-center gap-3 text-blue-300 hover:text-cyan-300 font-semibold text-lg hover:scale-105 transition-all duration-300"
          >
            <span>Start chatting now</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
