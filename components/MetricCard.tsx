import React, { useState } from 'react';
import { MetricData } from '../types';
import { AbstractGraphic } from './AbstractGraphic';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Target, ListChecks } from 'lucide-react';

interface MetricCardProps {
  data: MetricData;
}

export const MetricCard: React.FC<MetricCardProps> = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Dark Mode Minimalist Style
  const cardBaseClasses = "bg-black text-white overflow-hidden shadow-xl";
  const borderRadius = "rounded-[2rem]";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="h-full perspective-1000 cursor-pointer w-full min-h-[480px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full grid grid-cols-1 grid-rows-1"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* --- FRONT FACE --- */}
        <div 
          className={`col-start-1 row-start-1 w-full h-full ${cardBaseClasses} ${borderRadius} p-7 flex flex-col relative justify-between border border-stone-800`}
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          {/* Top: Category & Icon */}
          <div className="flex justify-between items-start mb-2">
             <span className="text-[10px] font-bold text-stone-500 tracking-widest uppercase border border-stone-800 px-2 py-1 rounded-md">
                {data.categories[0]}
             </span>
             <div className="text-stone-500">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
             </div>
          </div>

          {/* Center: Illustration (Small & Unique) */}
          <div className="flex-grow flex items-center justify-center py-4">
             <div className="w-16 h-16">
                <AbstractGraphic id={data.id} />
             </div>
          </div>

          {/* Bottom: Content */}
          <div>
             <h2 className="text-2xl font-display font-semibold text-white mb-2 leading-tight">
               {data.name}
             </h2>
             <p className="text-stone-400 text-xs leading-relaxed mb-5 line-clamp-3">
               {data.shortDescription}
             </p>

             {/* Footer Info Stack (Vertical) */}
             <div className="flex flex-col gap-3 border-t border-stone-800 pt-4">
                {/* Definition */}
                <div className="flex gap-3 items-start">
                   <div className="mt-0.5 text-stone-600 shrink-0">
                      <BookOpen className="w-3.5 h-3.5" />
                   </div>
                   <div>
                      <span className="block text-[9px] text-stone-500 uppercase tracking-widest font-bold mb-0.5">Definición</span>
                      <p className="text-[11px] text-stone-300 leading-snug">{data.definition}</p>
                   </div>
                </div>

                {/* Goal */}
                <div className="flex gap-3 items-start">
                   <div className="mt-0.5 text-stone-600 shrink-0">
                      <Target className="w-3.5 h-3.5" />
                   </div>
                   <div>
                      <span className="block text-[9px] text-stone-500 uppercase tracking-widest font-bold mb-0.5">Objetivo</span>
                      <p className="text-[11px] text-stone-300 leading-snug">{data.goalConnection}</p>
                   </div>
                </div>

                {/* Methods */}
                <div className="flex gap-3 items-start">
                   <div className="mt-0.5 text-stone-600 shrink-0">
                       <ListChecks className="w-3.5 h-3.5" />
                   </div>
                   <div>
                      <span className="block text-[9px] text-stone-500 uppercase tracking-widest font-bold mb-0.5">Métodos</span>
                      <p className="text-[11px] text-stone-300 leading-snug">{data.researchMethods}</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* --- BACK FACE --- */}
        <div 
          className={`col-start-1 row-start-1 w-full h-full ${cardBaseClasses} ${borderRadius} p-10 flex flex-col justify-center items-center text-center border border-stone-800`}
          style={{ 
            transform: 'rotateY(180deg)', 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden' 
          }}
        >
           <div className="mb-12 w-full">
              <span className="inline-block px-3 py-1 rounded-full bg-stone-900 text-stone-400 text-[10px] uppercase tracking-widest font-bold mb-4 border border-stone-800">
                Fórmula
              </span>
              <div className="p-6 rounded-2xl bg-stone-900/40 border border-stone-800 backdrop-blur-sm">
                 <code className="text-lg font-display font-medium text-white block break-words">
                    {data.formula}
                 </code>
              </div>
           </div>

           <div className="w-full">
              <span className="inline-block px-3 py-1 rounded-full bg-stone-900 text-stone-400 text-[10px] uppercase tracking-widest font-bold mb-4 border border-stone-800">
                Ejemplo Práctico
              </span>
              <p className="text-stone-300 text-sm leading-relaxed font-medium italic px-4">
                 "{data.example}"
              </p>
           </div>
        </div>

      </motion.div>
    </motion.div>
  );
};