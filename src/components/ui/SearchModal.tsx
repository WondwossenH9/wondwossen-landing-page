'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Command, ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'product' | 'blog' | 'documentation';
  icon?: string;
}

// Mock search results - in a real app, this would come from an API
const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    title: 'AI-Powered Analytics',
    description: 'Advanced analytics platform with machine learning capabilities',
    url: '/products/analytics',
    type: 'product',
  },
  {
    id: '2',
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions for enterprise applications',
    url: '/solutions/cloud',
    type: 'page',
  },
  {
    id: '3',
    title: 'Getting Started Guide',
    description: 'Learn how to set up your first project with TechCorp',
    url: '/docs/getting-started',
    type: 'documentation',
  },
  {
    id: '4',
    title: 'The Future of Enterprise AI',
    description: 'Exploring the latest trends in artificial intelligence for business',
    url: '/blog/future-enterprise-ai',
    type: 'blog',
  },
  {
    id: '5',
    title: 'API Documentation',
    description: 'Complete API reference and integration guides',
    url: '/docs/api',
    type: 'documentation',
  },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) => 
            prev < results.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => 
            prev > 0 ? prev - 1 : results.length - 1
          );
          break;
        case 'Enter':
          e.preventDefault();
          if (results[selectedIndex]) {
            window.location.href = results[selectedIndex].url;
            onClose();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  useEffect(() => {
    const searchResults = async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));

      // Filter mock results based on query
      const filtered = mockSearchResults.filter(
        result =>
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          result.description.toLowerCase().includes(query.toLowerCase())
      );

      setResults(filtered);
      setSelectedIndex(0);
      setIsLoading(false);
    };

    const timeoutId = setTimeout(searchResults, 300);
    return () => clearTimeout(timeoutId);
  }, [query]);

  const getTypeIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'product':
        return '🚀';
      case 'page':
        return '📄';
      case 'blog':
        return '📝';
      case 'documentation':
        return '📚';
      default:
        return '🔍';
    }
  };

  const getTypeColor = (type: SearchResult['type']) => {
    switch (type) {
      case 'product':
        return 'text-primary-600 dark:text-primary-400';
      case 'page':
        return 'text-secondary-600 dark:text-secondary-400';
      case 'blog':
        return 'text-accent-600 dark:text-accent-400';
      case 'documentation':
        return 'text-success-600 dark:text-success-400';
      default:
        return 'text-secondary-600 dark:text-secondary-400';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-2xl border border-secondary-200 dark:border-secondary-700 overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center p-4 border-b border-secondary-200 dark:border-secondary-700">
                <Search className="w-5 h-5 text-secondary-400 mr-3" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search anything..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent text-foreground placeholder-secondary-500 focus:outline-none text-lg"
                />
                <div className="flex items-center space-x-2 text-xs text-secondary-500">
                  <kbd className="px-2 py-1 bg-secondary-100 dark:bg-secondary-700 rounded">
                    ⌘K
                  </kbd>
                </div>
                <button
                  onClick={onClose}
                  className="ml-2 p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {isLoading ? (
                  <div className="p-8 text-center">
                    <div className="loading-dots">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <p className="text-secondary-500 mt-2">Searching...</p>
                  </div>
                ) : results.length > 0 ? (
                  <div className="py-2">
                    {results.map((result, index) => (
                      <motion.a
                        key={result.id}
                        href={result.url}
                        className={`block px-4 py-3 hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors ${
                          index === selectedIndex
                            ? 'bg-secondary-100 dark:bg-secondary-700'
                            : ''
                        }`}
                        onClick={onClose}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="flex items-start space-x-3">
                          <span className="text-lg">{getTypeIcon(result.type)}</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <h3 className="font-medium text-foreground truncate">
                                {result.title}
                              </h3>
                              <span className={`text-xs px-2 py-1 rounded-full bg-secondary-100 dark:bg-secondary-700 ${getTypeColor(result.type)}`}>
                                {result.type}
                              </span>
                            </div>
                            <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1 line-clamp-2">
                              {result.description}
                            </p>
                            <p className="text-xs text-secondary-500 mt-1">
                              {result.url}
                            </p>
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                ) : query ? (
                  <div className="p-8 text-center">
                    <Search className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
                    <p className="text-secondary-500">No results found for "{query}"</p>
                    <p className="text-sm text-secondary-400 mt-1">
                      Try different keywords or check your spelling
                    </p>
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <Search className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
                    <p className="text-secondary-500">Start typing to search</p>
                    <div className="flex items-center justify-center space-x-4 mt-4 text-xs text-secondary-400">
                      <div className="flex items-center space-x-1">
                        <ArrowUp className="w-3 h-3" />
                        <ArrowDown className="w-3 h-3" />
                        <span>Navigate</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ArrowRight className="w-3 h-3" />
                        <span>Select</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Command className="w-3 h-3" />
                        <span>K</span>
                        <span>Search</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 