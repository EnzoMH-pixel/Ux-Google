import React from 'react';
import { MetricCategory } from '../types';
import { CATEGORIES } from '../constants';

interface FilterBarProps {
  selectedCategory: MetricCategory;
  onSelect: (category: MetricCategory) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ selectedCategory, onSelect }) => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-4 flex">
      <div className="flex gap-2.5 min-w-max mx-auto px-6 md:px-0">
        <button
          onClick={() => onSelect(MetricCategory.ALL)}
          className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-200 border ${
            selectedCategory === MetricCategory.ALL
              ? 'bg-stone-900 border-stone-900 text-white shadow-md'
              : 'bg-white border-stone-200 text-stone-500 hover:border-stone-300 hover:text-stone-700'
          }`}
        >
          All
        </button>

        {CATEGORIES.filter(c => c !== MetricCategory.ALL).map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-200 border ${
              selectedCategory === category
                ? 'bg-stone-900 border-stone-900 text-white shadow-md'
                : 'bg-white border-stone-200 text-stone-500 hover:border-stone-300 hover:text-stone-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};