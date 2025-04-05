
import { useState, useEffect } from 'react';
import ApiCard from './ApiCard';
import SearchBar from './SearchBar';
import { apiData, categories } from '../lib/api-data';

export function ApiCollection() {
  const [visibleApis, setVisibleApis] = useState(apiData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('koleksi');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterApis(query, selectedCategory);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    filterApis(searchQuery, category);
  };

  const filterApis = (query: string, category: string) => {
    let filtered = apiData;
    
    if (query) {
      const lowercaseQuery = query.toLowerCase();
      filtered = filtered.filter(
        api => 
          api.name.toLowerCase().includes(lowercaseQuery) ||
          api.description.toLowerCase().includes(lowercaseQuery) ||
          api.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
      );
    }
    
    if (category) {
      filtered = filtered.filter(api => api.category === category);
    }
    
    setVisibleApis(filtered);
  };

  return (
    <section id="koleksi" className="py-16 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-4">Koleksi API Lokal Indonesia</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Temukan berbagai API lokal yang dapat digunakan untuk memperkaya aplikasi Anda dengan data dan layanan Indonesia.
          </p>
        </div>
        
        <SearchBar 
          onSearch={handleSearch} 
          onFilter={handleCategoryFilter}
          categories={categories}
        />
        
        {visibleApis.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleApis.map((api, index) => (
              <ApiCard key={api.id} api={api} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 animate-fade-in">
            <svg
              className="w-12 h-12 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-1">
              Tidak ditemukan API
            </h3>
            <p className="text-gray-500">
              Coba ubah filter pencarian Anda
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ApiCollection;
