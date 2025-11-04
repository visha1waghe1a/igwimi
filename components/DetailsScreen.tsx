import React from 'react';

interface DetailsScreenProps {
  onStartQuiz: () => void;
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({ onStartQuiz }) => {
  return (
    <div className="text-center animate-fade-in">
        <p className="text-xl font-silkscreen text-white mb-6 leading-relaxed">
            Tonight’s feature presentation:
            <br />
            <span className="text-2xl text-[#90E0EF] text-glow-teal">Om Shanti Om</span>
            <br />
            <span className="text-base">Starring: SRK, Popcorn, and a very decent co-passenger.</span>
        </p>
      <div className="relative w-full max-w-sm mx-auto bg-gradient-to-br from-[#FFD700] to-[#F0B300] p-1 rounded-2xl shadow-[0_0_25px_rgba(255,215,0,0.6)]">
        <div className="relative bg-[#191028] rounded-xl p-6 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 animate-shine bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.5)_50%,transparent_75%,transparent_100%)] bg-no-repeat bg-[length:250%_250%]"></div>
            <h2 className="text-xl font-press-start text-[#FFD700] text-glow">🎬 Admit One: Anoushka</h2>
            <p className="text-md font-silkscreen text-white my-4">For a limited edition experience of drama, nostalgia, and caffeine-fueled commentary.</p>
            <div className="border-t-2 border-dashed border-[#F0B300]/50 my-4"></div>
            <p className="text-lg font-silkscreen text-[#90E0EF]">Venue: PVR Juhu</p>
            <p className="text-lg font-silkscreen text-white mt-1">Showtime: Tonight</p>
        </div>
      </div>
       <p className="text-xs text-slate-400 mt-4 italic">
        Terms & Conditions: Overthinking is banned. Fun is mandatory.
      </p>
      <button 
        onClick={onStartQuiz}
        className="mt-6 bg-[#D8A7B1] text-black font-bold font-silkscreen py-3 px-6 rounded-lg text-xl shadow-[4px_4px_0_0_#2a1a47] border-2 border-black/50 transform transition-all hover:scale-105 hover:shadow-[6px_6px_0_0_#2a1a47] active:scale-95 active:shadow-[2px_2px_0_0_#2a1a47]"
      >
        Continue 💫
      </button>
    </div>
  );
};

export default DetailsScreen;