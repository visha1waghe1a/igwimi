import React, { useState, useEffect, useRef } from 'react';

const SRK_SILHOUETTE_SVG = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDIwMCAzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwMCAwIEM1MCA1MCA1MCAxNTAgMTAwIDE1MCBDMTUwIDE1MCAxNTAgNTAgMTAwIDAgWiBNNzUgMTYwIEw1MCAyMjAgTDE1MCAyMjAgTDEyNSAxNjAgWiBNNzUgMjMwIEw3NSAzMDAgTDEyNSAzMDAgTDEyNSAyMzAgWiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+`;

const ConfettiPiece: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
    <div className="confetti-piece" style={style}></div>
);

const FinalTicket: React.FC = () => {
    const [animationState, setAnimationState] = useState('confetti');
    const [confetti, setConfetti] = useState<React.ReactNode[]>([]);
    const ticketRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Trigger confetti burst on mount
        const newConfetti = Array.from({ length: 50 }).map((_, i) => (
            <ConfettiPiece key={i} style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
            }}/>
        ));
        setConfetti(newConfetti);

        const timer = setTimeout(() => setAnimationState('reveal'), 1000);
        const cleanupTimer = setTimeout(() => setConfetti([]), 2500);

        return () => {
            clearTimeout(timer);
            clearTimeout(cleanupTimer);
        };
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ticketRef.current) return;
        const rect = ticketRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const { width, height } = rect;
        const rotateX = (y / height - 0.5) * -20;
        const rotateY = (x / width - 0.5) * 20;
        ticketRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (ticketRef.current) {
            ticketRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-[550px] relative">
            <div className="absolute inset-0 z-50 pointer-events-none">{confetti}</div>

            {animationState === 'reveal' && (
                <div 
                    className="flex flex-col items-center" 
                    style={{ animation: 'fade-in 1s ease-out' }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <div
                        ref={ticketRef}
                        style={{ transition: 'transform 0.1s' }}
                        className="relative w-[320px] sm:w-[380px] bg-gradient-to-br from-[#110c1c] to-[#2a1a47] p-1 rounded-3xl shadow-lg"
                    >
                        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-600 animate-[flicker-light_3s_ease-in-out_infinite] blur-md opacity-75"></div>
                        <div className="relative w-full bg-gradient-to-br from-[#191028] to-[#24163a] rounded-[22px] p-6 text-center flex flex-col justify-between overflow-hidden border-2 border-yellow-500/50 h-[500px]">
                            <div className="absolute inset-0 animate-shimmer opacity-50"></div>
                            
                            <img 
                                src={SRK_SILHOUETTE_SVG}
                                alt="SRK Silhouette"
                                className="absolute top-4 right-4 w-12 h-12 text-yellow-300 opacity-20 animate-float"
                            />

                            <div className="relative z-10">
                                <h3 className="font-press-start text-lg text-white text-glow">
                                    🎟️ The Golden Ticket
                                </h3>
                                <p className="font-silkscreen text-base text-slate-300 mt-1">For Anoushka</p>
                            </div>

                            <div className="relative z-10 space-y-3 border-y-2 border-dashed border-yellow-600/30 py-4">
                               <p className="font-silkscreen text-base text-white">PVR Juhu — Tonight, 7:00 PM</p>
                               <p className="font-silkscreen text-base text-white">Feature Film: <span className="text-glow-teal">Om Shanti Om</span></p>
                            </div>

                            <div className="relative z-10 p-2">
                                <blockquote className="font-silkscreen text-sm text-slate-200 leading-relaxed italic">
                                  “Kehte hain agar kisi cheez ko dil se chaho, to puri kainaat use tumse milane ki koshish mein lag jaati hai.”
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <p className="mt-6 text-center font-silkscreen text-xs gold-foil">
                       Powered by Vishal’s questionable coding and infinite SRK love.
                    </p>
                </div>
            )}
        </div>
    );
};

export default FinalTicket;
