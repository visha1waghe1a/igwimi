import React from 'react';

interface InitialScreenProps {
  onUnlock: () => void;
}

const Star: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
    <div className="absolute text-yellow-300 font-bold" style={style}>.</div>
);

const InitialScreen: React.FC<InitialScreenProps> = ({ onUnlock }) => {
  return (
    <div 
      className="w-full text-center p-4 cursor-pointer"
      onClick={onUnlock}
      aria-label="Unlock your golden ticket"
      role="button"
    >
      <h1 className="text-3xl md:text-4xl font-press-start text-[#FFD700] mb-4 text-glow">
        Hey Anoushka 👀
      </h1>
      <p className="text-[#E6E6E6] mb-8 font-silkscreen text-lg">Looks like destiny—and very questionable timing—made you click this.</p>
      
      <div className="relative w-full max-w-sm mx-auto bg-gradient-to-br from-[#FFD700] to-[#F0B300] p-1 rounded-2xl shadow-lg transform transition-transform hover:scale-105 animate-float">
        <div className="bg-[#191028] rounded-xl p-6 border-2 border-dashed border-[#F0B300] flex flex-col items-center justify-center h-48">
          <Star style={{ top: '10%', left: '15%', animation: 'twinkle 1.5s infinite' }} />
          <Star style={{ top: '20%', right: '20%', animation: 'twinkle 2s infinite alternate' }} />
          <Star style={{ bottom: '15%', left: '25%', animation: 'twinkle 1.2s infinite' }} />
          <Star style={{ bottom: '25%', right: '10%', animation: 'twinkle 1.8s infinite alternate' }} />
          <p className="mt-4 text-2xl font-bold font-silkscreen text-center text-white animate-flicker">
            Tap to see what the universe scripted
          </p>
        </div>
      </div>
    </div>
  );
};

export default InitialScreen;