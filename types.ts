
export interface QuizOption {
  text: string;
  value: string;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}
