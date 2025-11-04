import React, { useState, useCallback, useEffect } from 'react';
import InitialScreen from './components/InitialScreen';
import DetailsScreen from './components/DetailsScreen';
import QuizScreen from './components/QuizScreen';
import FinalTicket from './components/FinalTicket';

type Screen = 'initial' | 'details' | 'quiz' | 'ticket';

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('initial');
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // A placeholder for a tiny SRK whistle/laugh sound.
    // Replace the data URI with a preloaded tiny audio file for better performance.
    const audioSrc = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
    setAudio(new Audio(audioSrc));
  }, []);

  const playSound = useCallback(() => {
    if (audio) {
      audio.volume = 0.3;
      audio.play().catch(e => console.error("Audio playback failed:", e));
    }
  }, [audio]);

  const handleUnlock = () => {
    playSound();
    setScreen('details');
  };

  const handleStartQuiz = () => {
    setScreen('quiz');
  };
  
  const handleQuizComplete = () => {
    setScreen('ticket');
  };

  const renderScreen = () => {
    switch (screen) {
      case 'initial':
        return <InitialScreen onUnlock={handleUnlock} />;
      case 'details':
        return <DetailsScreen onStartQuiz={handleStartQuiz} />;
      case 'quiz':
        return <QuizScreen onQuizComplete={handleQuizComplete} />;
      case 'ticket':
        return <FinalTicket />;
      default:
        return <InitialScreen onUnlock={handleUnlock} />;
    }
  };

  return (
    <div className="bg-transparent text-white min-h-screen w-full flex items-center justify-center p-4 crt-screen overflow-hidden">
      <div className="w-full max-w-lg mx-auto bg-black/20 border-2 border-slate-700/50 rounded-2xl p-4 md:p-8 shadow-[0_0_20px_rgba(0,0,0,0.5),inset_0_0_10px_rgba(0,0,0,0.5)]">
        {renderScreen()}
      </div>
    </div>
  );
};

export default App;