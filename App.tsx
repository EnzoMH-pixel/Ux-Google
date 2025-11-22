import React, { useState, useMemo } from 'react';
import { FilterBar } from './components/FilterBar';
import { MetricCard } from './components/MetricCard';
import { MetricCategory } from './types';
import { METRICS_DATA } from './constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowUpRight, Twitter, Instagram, Linkedin } from 'lucide-react';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MetricCategory>(MetricCategory.ALL);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMetrics = useMemo(() => {
    let filtered = METRICS_DATA;

    // Filter by Category
    if (selectedCategory !== MetricCategory.ALL) {
      filtered = filtered.filter((metric) => metric.categories.includes(selectedCategory));
    }

    // Filter by Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((metric) => 
        metric.name.toLowerCase().includes(q) ||
        (metric.acronym && metric.acronym.toLowerCase().includes(q)) ||
        metric.shortDescription.toLowerCase().includes(q) ||
        metric.definition.toLowerCase().includes(q)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 max-w-[1600px] mx-auto w-full">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 text-stone-900">
             <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                 <span className="text-white font-bold text-lg font-display">M</span>
             </div>
             <span className="font-semibold text-stone-900 tracking-tight font-display">UX Metrics</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors shrink-0">
            Submit metric
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </nav>

      <main className="px-6 md:px-12 max-w-[1600px] mx-auto pb-20">
        
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center pt-12 pb-12 gap-8 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-slate-900 leading-[1.1]">
            Design inspiration <br className="hidden md:block" />
            featuring only the top <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">UX Metrics</span> in the industry.
          </h1>
          
          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-stone-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-3.5 bg-stone-50 border border-stone-200 rounded-full text-base placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-sm hover:bg-stone-100"
              placeholder="Search metrics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </section>

        {/* Filter Bar */}
        <div className="mb-12">
           <FilterBar selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
        </div>

        {/* Grid Content */}
        <AnimatePresence mode='wait'>
            {filteredMetrics.length === 0 ? (
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
                    className="flex flex-col items-center justify-center py-32 text-center bg-stone-50 rounded-[2.5rem]"
                 >
                    <div className="p-6 rounded-full bg-stone-200 mb-4">
                        <Search className="w-8 h-8 text-stone-500" />
                    </div>
                    <h3 className="text-xl font-bold text-stone-800 font-display">No metrics found</h3>
                    <p className="text-stone-500 mt-2">Try adjusting your filters or search query.</p>
                    <button 
                      onClick={() => { setSelectedCategory(MetricCategory.ALL); setSearchQuery(''); }} 
                      className="mt-6 text-orange-600 font-medium hover:underline"
                    >
                      Clear all filters
                    </button>
                 </motion.div>
            ) : (
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
                >
                <AnimatePresence>
                  {filteredMetrics.map((metric) => (
                      <MetricCard key={metric.id} data={metric} />
                  ))}
                </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-100 py-16 bg-white">
         <div className="px-6 md:px-12 max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg font-display">M</span>
               </div>
               <span className="font-semibold text-stone-900 tracking-tight font-display">UX Metrics</span>
            </div>
            
            <div className="flex gap-8 text-sm text-stone-500 font-medium">
               <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
               <a href="#" className="hover:text-black transition-colors">Cookie Policy</a>
            </div>

            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-stone-200 transition-colors">
                  <Twitter className="w-4 h-4" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-stone-200 transition-colors">
                  <Instagram className="w-4 h-4" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-stone-200 transition-colors">
                  <Linkedin className="w-4 h-4" />
               </a>
            </div>
         </div>
         <div className="mt-12 text-center text-xs text-stone-400">
            © 2024 UX Metrics. All rights reserved.
         </div>
      </footer>
    </div>
  );
};

export default App;