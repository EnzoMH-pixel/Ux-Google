import React, { useState } from 'react';
import { MetricData, CardTheme } from '../types';
import { BookOpen, Target, Search, Calculator, Lightbulb } from 'lucide-react';
import { AbstractGraphic } from './AbstractGraphic';
import { motion } from 'framer-motion';

interface MetricCardProps {
  data: MetricData;
}

const iconBgStyles: Record<CardTheme, string> = {
  [CardTheme.CREAM]: 'bg-[#FFE082]',
  [CardTheme.LAVENDER]: 'bg-[#D1C4E9]',
  [CardTheme.MINT]: 'bg-[#B2DFDB]',
  [CardTheme.PEACH]: 'bg-[#FFCC80]',
  [CardTheme.SKY]: 'bg-[#B3E5FC]',
};

const cardBgStyles: Record<CardTheme, string> = {
  [CardTheme.CREAM]: 'bg-[#FFF9E6]', // Cream
  [CardTheme.LAVENDER]: 'bg-[#F3E5F5]', // Lavender
  [CardTheme.MINT]: 'bg-[#E0F2F1]', // Mint
  [CardTheme.PEACH]: 'bg-[#FFF3E0]', // Peach
  [CardTheme.SKY]: 'bg-[#E1F5FE]', // Sky
};

export const MetricCard: React.FC<MetricCardProps> = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const iconBgClass = iconBgStyles[data.theme];
  const cardBgClass = cardBgStyles[data.theme];
  
  // Removed border classes, kept shadow and bg
  const cardBaseClasses = `${cardBgClass} shadow-sm transition-all duration-300 group-hover:shadow-md`;
  // Changed to rounded-xl (12px)
  const borderRadius = "rounded-xl";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -5 }} // Microinteraction: Lift on hover
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-full perspective-1000 cursor-pointer group w-full"
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
          className={`col-start-1 row-start-1 w-full h-full ${cardBaseClasses} ${borderRadius} p-6 flex flex-col relative overflow-hidden`}
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          
          {/* Illustration Top Right */}
          <div className="absolute top-6 right-6 w-14 h-14 pointer-events-none opacity-80">
              <AbstractGraphic theme={data.theme} />
          </div>

          {/* Header */}
          <div className="relative z-10 mb-6 pr-12">
            <h2 className="text-xl md:text-2xl font-semibold font-display tracking-tight text-slate-900 leading-tight mb-2">
              {data.name}
              {data.acronym && <span className="inline-block ml-2 text-base font-medium text-slate-400 align-baseline">({data.acronym})</span>}
            </h2>
            {/* Relaxed max-width for description to fit wider card */}
            <p className="text-[13px] text-stone-500 font-medium leading-relaxed max-w-md font-sans">
              {data.shortDescription}
            </p>
          </div>

          {/* Content Sections */}
          <div className="mt-auto pt-4 border-t border-stone-200/50">
            <Section 
              icon={BookOpen} 
              title="Definición" 
              text={data.definition} 
            />
            <div className="h-3" />
            <Section 
              icon={Target} 
              title="Objetivo" 
              text={data.goalConnection} 
            />
            <div className="h-3" />
            <Section 
              icon={Search} 
              title="Métodos" 
              text={data.researchMethods} 
            />
          </div>
        </div>

        {/* --- BACK FACE --- */}
        <div 
          className={`col-start-1 row-start-1 w-full h-full ${cardBaseClasses} ${borderRadius} p-8 flex flex-col justify-center items-center text-center`}
          style={{ 
            transform: 'rotateY(180deg)', 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden' 
          }}
        >
           <div className="mb-8 w-full">
              <div className={`w-10 h-10 mx-auto rounded-full ${iconBgClass} flex items-center justify-center mb-3`}>
                 <Calculator className="w-5 h-5 text-slate-900" />
              </div>
              <h4 className="font-semibold text-stone-400 text-[10px] uppercase tracking-widest mb-3 font-sans">Fórmula</h4>
              <div className="bg-white/60 border border-stone-200/50 p-4 rounded-xl inline-block w-full backdrop-blur-sm">
                 <code className="text-base md:text-lg font-semibold text-slate-800 font-display block break-words">
                    {data.formula}
                 </code>
              </div>
           </div>

           <div className="w-full">
              <div className={`w-10 h-10 mx-auto rounded-full ${iconBgClass} flex items-center justify-center mb-3`}>
                 <Lightbulb className="w-5 h-5 text-slate-900" />
              </div>
              <h4 className="font-semibold text-stone-400 text-[10px] uppercase tracking-widest mb-3 font-sans">Ejemplo</h4>
              <p className="text-stone-600 text-[13px] leading-relaxed font-medium italic">
                 "{data.example}"
              </p>
           </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

const Section = ({ icon: Icon, title, text }: { icon: any, title: string, text: string }) => (
  <div className="flex items-start gap-3.5 relative z-10 mb-4 last:mb-0">
    <div className="shrink-0 w-7 h-7 rounded-full bg-white/50 flex items-center justify-center mt-0.5">
      <Icon className="w-3.5 h-3.5 text-slate-900" strokeWidth={2} />
    </div>
    <div>
      <h4 className="font-bold text-slate-400 text-[10px] uppercase tracking-widest mb-1 font-sans">{title}</h4>
      <p className="text-stone-600 font-normal text-[13px] leading-relaxed">
        {text}
      </p>
    </div>
  </div>
);