import React from 'react';

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Gradiente radial animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 animate-gradient-flow" />
      
      {/* Spotlight animado */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-spotlight" />
      
      {/* Partículas geométricas flutuantes */}
      <div className="absolute inset-0">
        {/* Partículas grandes */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-blue-400/20 rounded-full animate-float-particle delay-100" />
        <div className="absolute top-32 right-32 w-2 h-2 bg-blue-300/30 rounded-full animate-float-particle-slow delay-300" />
        <div className="absolute top-48 left-1/3 w-4 h-4 bg-blue-500/15 rounded-full animate-float-particle delay-500" />
        <div className="absolute bottom-32 right-20 w-3 h-3 bg-blue-400/25 rounded-full animate-float-particle-slow delay-700" />
        <div className="absolute bottom-48 left-24 w-2 h-2 bg-blue-300/20 rounded-full animate-float-particle delay-900" />
        
        {/* Partículas médias */}
        <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-float-particle delay-200" />
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 bg-blue-300/25 rounded-full animate-float-particle-slow delay-400" />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-500/20 rounded-full animate-float-particle delay-600" />
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-blue-400/35 rounded-full animate-float-particle-slow delay-800" />
        
        {/* Partículas pequenas */}
        <div className="absolute top-16 left-1/2 w-1 h-1 bg-blue-300/40 rounded-full animate-float-particle delay-1000" />
        <div className="absolute top-2/3 right-16 w-1 h-1 bg-blue-400/30 rounded-full animate-float-particle-slow delay-1200" />
        <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-blue-500/25 rounded-full animate-float-particle delay-1400" />
        <div className="absolute top-40 right-1/2 w-1 h-1 bg-blue-300/35 rounded-full animate-float-particle-slow delay-1600" />
        <div className="absolute bottom-40 right-1/4 w-1 h-1 bg-blue-400/20 rounded-full animate-float-particle delay-1800" />
        
        {/* Formas geométricas */}
        <div className="absolute top-24 right-24 w-6 h-6 border border-blue-400/20 rotate-45 animate-float-particle delay-300" />
        <div className="absolute bottom-24 left-1/4 w-4 h-4 border border-blue-300/25 rotate-12 animate-float-particle-slow delay-600" />
        <div className="absolute top-1/3 left-16 w-5 h-5 border border-blue-500/15 rotate-45 animate-float-particle delay-900" />
        
        {/* Linhas sutis */}
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-float-particle delay-1100" />
        <div className="absolute bottom-1/3 right-0 w-24 h-px bg-gradient-to-l from-transparent via-blue-300/25 to-transparent animate-float-particle-slow delay-1300" />
      </div>
      
      {/* Overlay para suavizar o efeito */}
      <div className="absolute inset-0 bg-slate-900/20" />
    </div>
  );
};

export default AnimatedBackground;