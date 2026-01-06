
import React from 'react';
import { ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';

interface NavigationProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onShowOverview: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ current, total, onPrev, onNext, onShowOverview }) => {
  const progress = (current / total) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-6 flex items-center justify-between pointer-events-none">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-slate-800">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex gap-4 pointer-events-auto">
        <button 
          onClick={onPrev}
          disabled={current === 1}
          className="p-3 bg-slate-900/80 border border-slate-700 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xl backdrop-blur-md"
          title="Previous Slide (←)"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={onShowOverview}
          className="p-3 bg-slate-900/80 border border-slate-700 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all shadow-xl backdrop-blur-md"
          title="View All Slides"
        >
          <LayoutGrid className="w-6 h-6" />
        </button>
        <button 
          onClick={onNext}
          disabled={current === total}
          className="p-3 bg-slate-900/80 border border-slate-700 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xl backdrop-blur-md"
          title="Next Slide (→)"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="text-slate-500 text-xs font-mono select-none pointer-events-auto bg-slate-900/40 px-3 py-1 rounded-full border border-slate-800/50">
        ESC to close overview • Arrows to navigate
      </div>
    </div>
  );
};

export default Navigation;
