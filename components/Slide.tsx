
import React, { useState, useEffect } from 'react';
import { SlideData } from '../types';
import { getIcon, SLIDES } from '../constants';
import { getSlideInsight } from '../services/geminiService';
import { Sparkles, Loader2, Info } from 'lucide-react';

interface SlideProps {
  slide: SlideData;
  isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({ slide, isActive }) => {
  const [insight, setInsight] = useState<string | null>(null);
  const [loadingInsight, setLoadingInsight] = useState(false);

  useEffect(() => {
    // Reset insight when slide changes
    setInsight(null);
  }, [slide.id]);

  const handleGetInsight = async () => {
    setLoadingInsight(true);
    const context = slide.content?.join(', ') || slide.points?.map(p => p.title).join(', ') || '';
    const result = await getSlideInsight(slide.title, context);
    setInsight(result);
    setLoadingInsight(false);
  };

  if (!isActive) return null;

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-8 md:px-20 py-12 overflow-hidden transition-all duration-700 animate-in fade-in slide-in-from-right-8">
      {/* Background Decor */}
      <div className={`absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br ${slide.accentColor} opacity-10 rounded-full blur-3xl`}></div>
      <div className={`absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr ${slide.accentColor} opacity-5 rounded-full blur-3xl`}></div>

      <div className="max-w-6xl w-full z-10 flex flex-col h-full">
        {/* Header */}
        <div className="mb-12">
            <h1 className={`text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r ${slide.accentColor}`}>
              {slide.title}
            </h1>
            {slide.subtitle && (
              <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed">
                {slide.subtitle}
              </p>
            )}
        </div>

        {/* Body Content */}
        <div className="flex-grow flex flex-col justify-center">
            {slide.type === 'cover' && (
              <div className="flex justify-center mt-12 animate-pulse">
                <div className={`p-8 rounded-full bg-gradient-to-br ${slide.accentColor} shadow-2xl`}>
                    {getIcon('Zap', 'w-16 h-16 text-white')}
                </div>
              </div>
            )}

            {slide.type === 'content' && (
              <ul className="space-y-6">
                {slide.content?.map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br ${slide.accentColor} flex items-center justify-center mr-6 mt-1 group-hover:scale-110 transition-transform`}>
                      <span className="text-white text-sm font-bold">{idx + 1}</span>
                    </span>
                    <span className="text-2xl md:text-3xl text-slate-300 font-medium leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {slide.type === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {slide.points?.map((point, idx) => (
                  <div key={idx} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-colors group">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${slide.accentColor} mr-4 group-hover:scale-110 transition-transform`}>
                        {getIcon(point.icon, 'w-6 h-6 text-white')}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{point.title}</h3>
                    </div>
                    <p className="text-slate-400 text-lg leading-relaxed">{point.description}</p>
                  </div>
                ))}
              </div>
            )}

            {slide.type === 'closing' && (
              <div className="flex flex-col items-center text-center py-10">
                <div className={`mb-8 p-12 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur shadow-2xl relative overflow-hidden group`}>
                   <div className={`absolute inset-0 bg-gradient-to-br ${slide.accentColor} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                   <div className="relative z-10">
                     <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Smart Experiences<br/>Start with Simple Tech</h2>
                     <button 
                        onClick={() => window.location.reload()}
                        className="px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-all transform hover:scale-105 active:scale-95 shadow-xl"
                      >
                       Restart Presentation
                     </button>
                   </div>
                </div>
              </div>
            )}
        </div>

        {/* AI Insight Section */}
        {slide.type !== 'cover' && slide.type !== 'closing' && (
          <div className="mt-8">
            {insight ? (
              <div className="bg-slate-900/80 border-l-4 border-indigo-500 p-4 rounded-r-xl animate-in zoom-in duration-300">
                <div className="flex items-start">
                  <Sparkles className="w-5 h-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-slate-200 italic leading-snug">{insight}</p>
                </div>
              </div>
            ) : (
              <button 
                onClick={handleGetInsight}
                disabled={loadingInsight}
                className="flex items-center text-slate-500 hover:text-white transition-colors group text-sm font-medium tracking-wide uppercase"
              >
                {loadingInsight ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Sparkles className="w-4 h-4 mr-2 group-hover:text-indigo-400 transition-colors" />
                )}
                Get AI Expert Insight
              </button>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto pt-10 border-t border-slate-800/50 flex justify-between items-center text-slate-500 text-sm font-medium tracking-widest uppercase">
          <div>{slide.footer || "Low-Infrastructure Engagement Concepts"}</div>
          <div className="flex items-center gap-2">
             <span className="hidden md:inline">Slide</span> {slide.id} / {SLIDES.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
