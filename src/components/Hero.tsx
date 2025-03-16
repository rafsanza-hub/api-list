
import { useState, useEffect } from 'react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="beranda" 
      className="relative min-h-screen pt-24 pb-16 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white pointer-events-none" />
      
      {/* Animated dots pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }} />
      </div>
      
      {/* Content */}
      <div className="container max-w-5xl mx-auto px-6 z-10">
        <div className="text-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <p className="text-sm font-medium text-blue-600">Koleksi API Lokal Indonesia</p>
            </div>
          </div>
          
          <h1 
            className={`text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            APIketan Indonesia
          </h1>
          
          <p 
            className={`max-w-3xl mx-auto text-lg text-gray-600 mb-10 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            Pustaka lengkap API lokal di Indonesia. Temukan, uji, dan integrasikan berbagai layanan API yang tersedia untuk kebutuhan aplikasi Anda.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            <a 
              href="#koleksi" 
              className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium transition-all duration-300 shadow-lg shadow-blue-200"
            >
              Jelajahi Koleksi
            </a>
            <a 
              href="#kategori" 
              className="px-8 py-3 rounded-lg bg-white text-gray-800 font-medium border border-gray-200 transition-all duration-300"
            >
              Lihat Kategori
            </a>
          </div>
        </div>
        
        {/* Statistics */}
        <div 
          className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="font-bold text-3xl text-blue-600 mb-2">12+</div>
            <div className="text-gray-600">API Lokal</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="font-bold text-3xl text-blue-600 mb-2">6+</div>
            <div className="text-gray-600">Kategori</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="font-bold text-3xl text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">Indonesia</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-8 h-12 rounded-full border-2 border-gray-300 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-pulse-subtle" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
