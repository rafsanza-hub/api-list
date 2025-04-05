
import { useState, useEffect } from 'react';
import { cn } from "../lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300",
        scrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            FetchAPI.id
            </span>
            <div className="hidden md:flex ml-2 text-sm font-medium text-muted-foreground">
              Indonesia
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#beranda" 
              className="text-sm font-medium text-foreground/80 transition-all duration-200"
            >
              Beranda
            </a>
            <a 
              href="#koleksi" 
              className="text-sm font-medium text-foreground/80 transition-all duration-200"
            >
              Koleksi API
            </a>
            <a 
              href="#kategori" 
              className="text-sm font-medium text-foreground/80 transition-all duration-200"
            >
              Kategori
            </a>
            <a 
              href="#tentang" 
              className="text-sm font-medium text-foreground/80 transition-all duration-200"
            >
              Tentang
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/rafsanza-hub/fetchapi-id" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-full w-9 h-9 bg-secondary/80 flex items-center justify-center transition-all duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-5 h-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
