import React from 'react';
import { motion } from 'framer-motion';

interface AbstractGraphicProps {
  id: string;
}

export const AbstractGraphic: React.FC<AbstractGraphicProps> = ({ id }) => {
  const strokeColor = "stroke-white";
  const fillColor = "fill-white";

  // Conversion Rate: Funnel
  if (id === 'conversion-rate') {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <motion.path d="M20 20 L80 20 L55 60 L55 90 L45 90 L45 60 L20 20 Z" className={strokeColor} strokeWidth="3" 
           initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.circle cx="50" cy="35" r="3" className={fillColor} animate={{ y: [0, 50] }} transition={{ duration: 2, repeat: Infinity }} />
      </svg>
    );
  }

  // SUS: Checklist/Document
  if (id === 'sus') {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
         <rect x="25" y="15" width="50" height="70" rx="5" className={`${strokeColor} opacity-50`} strokeWidth="3" />
         <motion.path d="M35 30 H65" className={strokeColor} strokeWidth="3" animate={{ scaleX: [0, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
         <motion.path d="M35 50 H65" className={strokeColor} strokeWidth="3" animate={{ scaleX: [0, 1] }} transition={{ duration: 1.5, delay: 0.5, repeat: Infinity }} />
         <motion.path d="M35 70 H50" className={strokeColor} strokeWidth="3" animate={{ scaleX: [0, 1] }} transition={{ duration: 1.5, delay: 1, repeat: Infinity }} />
      </svg>
    );
  }

  // Completion Rate: Checkmark Circle
  if (id === 'completion-rate') {
    return (
       <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
         <circle cx="50" cy="50" r="35" className={`${strokeColor} opacity-30`} strokeWidth="4" />
         <motion.circle cx="50" cy="50" r="35" className={strokeColor} strokeWidth="4" 
           strokeDasharray="220" strokeDashoffset="220"
           animate={{ strokeDashoffset: 0 }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }} />
         <motion.path d="M35 50 L45 60 L65 40" className={strokeColor} strokeWidth="4" strokeLinecap="round"
            initial={{ opacity: 0, pathLength: 0 }} animate={{ opacity: 1, pathLength: 1 }} transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatDelay: 2.5 }} />
       </svg>
    );
  }

  // Error Rate: Warning
  if (id === 'error-rate') {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
         <motion.path d="M50 15 L85 80 H15 Z" className={strokeColor} strokeWidth="4" 
           animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 1, repeat: Infinity }} />
         <path d="M50 35 V60" className={strokeColor} strokeWidth="4" strokeLinecap="round" />
         <circle cx="50" cy="70" r="3" className={fillColor} />
      </svg>
    );
  }

  // CSAT: Stars
  if (id === 'csat') {
    return (
       <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <motion.path d="M50 15 L60 40 L90 45 L65 65 L75 90 L50 75 L25 90 L35 65 L10 45 L40 40 Z" className={`${strokeColor}`} strokeWidth="2"
             animate={{ fill: ["transparent", "white", "transparent"] }} transition={{ duration: 2, repeat: Infinity }} />
       </svg>
    );
  }

  // Retention Rate: Magnet / Loop
  if (id === 'retention-rate') {
    return (
       <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <motion.path d="M20 50 C20 20 50 20 50 50 C50 80 80 80 80 50 C80 20 50 20 50 50 C50 80 20 80 20 50" 
            className={strokeColor} strokeWidth="3"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
       </svg>
    );
  }

  // NPS: Gauge
  if (id === 'nps') {
     return (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
           <path d="M20 60 A 40 40 0 0 1 80 60" className={`${strokeColor} opacity-30`} strokeWidth="6" strokeLinecap="round" />
           <motion.path d="M50 60 L50 30" className={strokeColor} strokeWidth="4" strokeLinecap="round" 
              style={{ originX: "50px", originY: "60px" } as any}
              animate={{ rotate: [-45, 45, -45] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
           <circle cx="50" cy="60" r="4" className={fillColor} />
        </svg>
     );
  }

  // CES: Effort/Weight
  if (id === 'ces') {
     return (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
           <rect x="20" y="60" width="60" height="20" rx="2" className={strokeColor} strokeWidth="3" />
           <path d="M50 60 V30" className={strokeColor} strokeWidth="3" />
           <motion.path d="M20 30 H80" className={strokeColor} strokeWidth="3" strokeLinecap="round" 
             animate={{ rotate: [5, -5, 5] }} transition={{ duration: 2, repeat: Infinity }} />
        </svg>
     );
  }

  // Time on Task: Clock
  if (id === 'time-on-task') {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
         <circle cx="50" cy="50" r="35" className={strokeColor} strokeWidth="3" />
         <motion.path d="M50 50 L50 25" className={strokeColor} strokeWidth="3" strokeLinecap="round"
            animate={{ rotate: 360 }} style={{ originX: "50px", originY: "50px" } as any} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
         <motion.path d="M50 50 L70 50" className={strokeColor} strokeWidth="3" strokeLinecap="round"
            animate={{ rotate: 360 }} style={{ originX: "50px", originY: "50px" } as any} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />
      </svg>
    );
  }

  // Churn Rate: Leaking bucket / User Leaving
  if (id === 'churn-rate') {
    return (
       <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <circle cx="50" cy="50" r="20" className={strokeColor} strokeWidth="3" />
          <motion.path d="M70 50 L90 50 L85 45 M90 50 L85 55" className={strokeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" 
            animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
       </svg>
    );
  }

  // Adoption Rate: Rocket/Graph
  if (id === 'adoption-rate') {
     return (
       <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <motion.path d="M20 80 L40 60 L60 70 L80 30" className={strokeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" 
             initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }} />
          <circle cx="80" cy="30" r="3" className={fillColor} />
       </svg>
     );
  }

  // Lostness: Maze
  if (id === 'lostness') {
     return (
       <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <path d="M30 70 H70 V30 H30 V50 H50" className={strokeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <motion.circle cx="30" cy="70" r="4" className={fillColor} 
             animate={{ cx: [30, 70, 70, 30, 30, 50], cy: [70, 70, 30, 30, 50, 50] }} 
             transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
       </svg>
     );
  }

  // SEQ: Slider
  if (id === 'seq') {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
         <path d="M20 50 H80" className={`${strokeColor} opacity-50`} strokeWidth="4" strokeLinecap="round" />
         <motion.circle cx="20" cy="50" r="6" className={fillColor} 
            animate={{ cx: [20, 80, 20] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
      </svg>
    );
  }

  // Fallback
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
       <circle cx="50" cy="50" r="30" className={strokeColor} strokeWidth="2" />
    </svg>
  );
};