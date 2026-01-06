
import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import Slide from './components/Slide';
import Navigation from './components/Navigation';
import { X } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showOverview, setShowOverview] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
    setShowOverview(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') setShowOverview(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="h-screen w-screen bg-slate-950 text-slate-100 flex flex-col relative overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>

      {/* Main Slide Content */}
      <main className="flex-grow flex relative z-10 overflow-hidden">
        {SLIDES.map((slide, idx) => (
          <Slide 
            key={slide.id} 
            slide={slide} 
            isActive={idx === currentSlideIndex} 
          />
        ))}
      </main>

      {/* Navigation Controls */}
      {!showOverview && (
        <Navigation 
          current={currentSlideIndex + 1} 
          total={SLIDES.length} 
          onNext={nextSlide} 
          onPrev={prevSlide}
          onShowOverview={() => setShowOverview(true)}
        />
      )}

      {/* Overview Modal */}
      {showOverview && (
        <div className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl p-10 overflow-y-auto animate-in fade-in zoom-in duration-300">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold text-white">Slide Overview</h2>
              <button 
                onClick={() => setShowOverview(false)}
                className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {SLIDES.map((slide, idx) => (
                <div 
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className={`
                    cursor-pointer group relative rounded-xl border-2 transition-all p-4 aspect-video flex flex-col justify-center overflow-hidden
                    ${idx === currentSlideIndex ? 'border-indigo-500 bg-slate-800/80' : 'border-slate-800 bg-slate-900/50 hover:border-slate-600'}
                  `}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${slide.accentColor} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  <span className="absolute top-2 left-3 text-xs font-mono text-slate-500">{idx + 1}</span>
                  <h3 className="text-sm font-bold text-slate-200 line-clamp-2 text-center group-hover:scale-105 transition-transform">{slide.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
