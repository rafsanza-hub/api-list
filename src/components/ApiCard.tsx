
import { ApiItem } from '../lib/api-data';
import { useEffect, useRef, useState } from 'react';

interface ApiCardProps {
  api: ApiItem;
  index: number;
}

export function ApiCard({ api, index }: ApiCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (cardRef.current) observer.unobserve(cardRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-medium px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
            {api.category}
          </span>
          {api.isOpenSource ? (
            <span className="text-xs font-medium px-3 py-1 bg-green-50 text-green-600 rounded-full">
              Open Source
            </span>
          ) : (
            <span className="text-xs font-medium px-3 py-1 bg-amber-50 text-amber-600 rounded-full">
              Proprietary
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{api.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{api.description}</p>
        
        <div className="flex items-center text-xs text-gray-500 mb-4">
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 7h.01" />
              <path d="M17 7h.01" />
              <path d="M7 12h.01" />
              <path d="M17 12h.01" />
              <path d="M7 17h.01" />
              <path d="M17 17h.01" />
            </svg>
            {api.provider}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {api.tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2 mt-4">
          <a 
            href={api.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 text-sm font-medium bg-blue-600 text-white rounded-lg transition-all duration-200"
          >
            Lihat API
          </a>
          <a 
            href={api.documentationUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 text-sm font-medium bg-white text-gray-800 border border-gray-200 rounded-lg transition-all duration-200"
          >
            Dokumentasi
          </a>
        </div>
      </div>
    </div>
  );
}

export default ApiCard;
