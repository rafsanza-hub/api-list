
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilter: (category: string) => void;
  categories: string[];
}

export function SearchBar({ onSearch, onFilter, categories }: SearchBarProps) {
  const [query, setQuery] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="w-full bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl shadow-sm p-4 md:p-6 mb-8 animate-fade-in">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg 
              className="w-4 h-4 text-gray-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="search"
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-200 rounded-lg bg-white/50 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            placeholder="Cari API..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <select
            className="bg-white/50 border border-gray-200 text-gray-900 text-sm rounded-lg block p-3 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            onChange={(e) => onFilter(e.target.value)}
          >
            <option value="">Semua Kategori</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="px-5 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium transition-all duration-200"
          >
            Cari
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;

