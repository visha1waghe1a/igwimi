import React, { useState, useCallback } from 'react';
import { QUIZ_QUESTIONS } from '../constants';

interface QuizScreenProps {
  onQuizComplete: () => void;
}

const ConfettiPiece: React.FC<{ id: number }> = ({ id }) => {
    const style = {
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 0.2}s`,
      backgroundColor: ['#FFD700', '#FF69B4', '#90E0EF'][id % 3],
    };
    return <div className="confetti" style={style}></div>;
};

const QuizScreen: React.FC<QuizScreenProps> = ({ onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = useCallback((answerValue: string) => {
    if(isAnswered) return;

    setIsAnswered(true);
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 1000);

    const newAnswers = [...answers, answerValue];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsAnswered(false);
      } else {
        onQuizComplete();
      }
    }, 1000);
  }, [answers, currentQuestionIndex, onQuizComplete, isAnswered]);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="relative w-full text-center p-4 animate-fade-in">
        {showConfetti && Array.from({ length: 20 }).map((_, i) => <ConfettiPiece key={i} id={i} />)}
        
        <div className="mb-6">
            <p className="text-lg text-white font-silkscreen mb-2">
                Question {currentQuestionIndex + 1} / {QUIZ_QUESTIONS.length}
            </p>
            <div className="w-full bg-[#2a1a47] rounded-full h-4 border-2 border-slate-600">
                <div 
                  className="bg-[#90E0EF] h-full rounded-full transition-all duration-500" 
                  style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
        </div>

        <div className="mb-8 bg-black/20 p-6 rounded-lg border-2 border-[#90E0EF]/50">
            <h2 className="text-2xl mt-2 text-white font-silkscreen text-glow-teal">
                {currentQuestion.question}
            </h2>
        </div>

        <div className="flex flex-col space-y-4">
            {currentQuestion.options.map((option) => (
                <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    disabled={isAnswered}
                    className="group bg-[#2a1a47] border-2 border-transparent text-white p-4 rounded-lg text-left transform transition-all duration-200 hover:border-[#FF69B4] hover:shadow-[0_0_15px_rgba(255,105,180,0.5)] active:scale-95 disabled:opacity-50 disabled:hover:border-transparent disabled:hover:shadow-none"
                >
                    <p className="font-silkscreen text-lg group-hover:text-glow-rose">{option.text}</p>
                </button>
            ))}
        </div>
    </div>
  );
};

export default QuizScreen;