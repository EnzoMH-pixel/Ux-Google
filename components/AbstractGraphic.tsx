import React from 'react';
import { motion } from 'framer-motion';
import { CardTheme } from '../types';

interface AbstractGraphicProps {
  theme: CardTheme;
}

export const AbstractGraphic: React.FC<AbstractGraphicProps> = ({ theme }) => {
  const colors = "text-slate-900 opacity-10";

  // Cream: Star/Burst (Energy, Focus)
  if (theme === CardTheme.CREAM) {
    return (
      <svg viewBox="0 0 100 100" className={`w-full h-full ${colors}`} fill="currentColor">
         <motion.path
           d="M50 0L58 42L100 50L58 58L50 100L42 58L0 50L42 42L50 0Z"
           initial={{ scale: 0.8, rotate: 0 }}
           animate={{ scale: [0.8, 1, 0.8], rotate: 90 }}
           transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
         />
      </svg>
    );
  }

  // Lavender: Ripples (Usability, Softness)
  if (theme === CardTheme.LAVENDER) {
    return (
      <svg viewBox="0 0 100 100" className={`w-full h-full ${colors}`} fill="none" stroke="currentColor" strokeWidth="6">
        <motion.circle cx="50" cy="50" r="20" 
           animate={{ r: [20, 25, 20], opacity: [0.5, 1, 0.5] }}
           transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.circle cx="50" cy="50" r="35" 
           animate={{ r: [35, 40, 35], opacity: [0.3, 0.8, 0.3] }}
           transition={{ duration: 4, delay: 0.5, repeat: Infinity }}
        />
         <motion.circle cx="50" cy="50" r="10" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  // Mint: Growth/Bar (Efficiency, Time)
  if (theme === CardTheme.MINT) {
    return (
      <svg viewBox="0 0 100 100" className={`w-full h-full ${colors}`} fill="currentColor">
        <motion.rect x="10" y="60" width="20" height="40" rx="4"
          animate={{ height: [40, 50, 40], y: [60, 50, 60] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.rect x="40" y="40" width="20" height="60" rx="4"
          animate={{ height: [60, 70, 60], y: [40, 30, 40] }}
          transition={{ duration: 3, delay: 0.2, repeat: Infinity }}
        />
        <motion.rect x="70" y="20" width="20" height="80" rx="4"
           animate={{ height: [80, 90, 80], y: [20, 10, 20] }}
           transition={{ duration: 3, delay: 0.4, repeat: Infinity }}
        />
      </svg>
    );
  }

  // Peach: Geometric/Churn (Structure)
  if (theme === CardTheme.PEACH) {
    return (
      <svg viewBox="0 0 100 100" className={`w-full h-full ${colors}`} fill="none" stroke="currentColor" strokeWidth="5">
        <motion.rect x="25" y="25" width="50" height="50" rx="10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle cx="75" cy="25" r="10" fill="currentColor" stroke="none"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle cx="25" cy="75" r="10" fill="currentColor" stroke="none"
           animate={{ scale: [1, 1.2, 1] }}
           transition={{ duration: 2, delay: 1, repeat: Infinity }}
        />
      </svg>
    );
  }

  // Sky: Orbit (NPS, Network)
  if (theme === CardTheme.SKY) {
    return (
      <svg viewBox="0 0 100 100" className={`w-full h-full ${colors}`} fill="none" stroke="currentColor" strokeWidth="2">
         <motion.circle cx="50" cy="50" r="30" strokeWidth="1" opacity="0.5" />
         <motion.circle cx="50" cy="50" r="45" strokeWidth="1" opacity="0.3" />
         
         <motion.circle cx="50" cy="20" r="6" fill="currentColor" stroke="none"
            animate={{ rotate: 360 }}
            style={{ originX: "50px", originY: "80px" } as any} // Rotating around center (50, 50) which is 30px down
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
         />
         <motion.circle cx="50" cy="50" r="12" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return null;
};