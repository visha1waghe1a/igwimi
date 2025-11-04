import { QuizQuestion } from './types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "How dramatic do you think you are on a regular day?",
    options: [
      { text: "“Kabhi Khushi Kabhi Gham-level.”", value: 'k3g-dramatic' },
      { text: "“Dil Se dramatic.”", value: 'dil-se-dramatic' },
      { text: "“Main Hoon Na—calm outside, chaos inside.”", value: 'main-hoon-na-dramatic' },
    ],
  },
  {
    question: 'When Anoushka enters a room, the background music is—',
    options: [
      { text: "“Itni si hansi, itni si khushi 🎵”", value: 'itni-si-hansi' },
      { text: "“Pretty Woman 🎶”", value: 'pretty-woman' },
      { text: "“Dard-e-Disco 💃”", value: 'dard-e-disco' },
    ],
  },
  {
    question: "If SRK met you, he’d probably say—",
    options: [
      { text: "“Kya tumhe yakeen hai, tum real ho?”", value: 'are-you-real' },
      { text: "“Don’t waste your charm, Anoushka.”", value: 'dont-waste-charm' },
      { text: "“Picture abhi baaki hai, meri jaan.”", value: 'picture-abhi-baaki-hai' },
    ],
  },
];