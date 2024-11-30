import { Question } from "../types/quiz";

interface DayEntry {
  keyword: string;
  password: string;
  questions: Question[];
}

export const adventCalendar: Record<number, DayEntry> = {
  1: {
    keyword: "sapin",
    password: "boule",
    questions: [
      {
        question: "Quelle est la tradition du sapin de Noël?",
        options: ["Égyptienne", "Allemande", "Française", "Russe"],
        correctAnswer: 1,
      },
      {
        question: "En quelle année le premier sapin de Noël a été décoré?",
        options: ["1510", "1605", "1710", "1820"],
        correctAnswer: 0,
      },
      {
        question:
          "Quelle était la première décoration utilisée sur les sapins?",
        options: ["Des pommes", "Des bougies", "Des boules", "Des guirlandes"],
        correctAnswer: 0,
      },
    ],
  },
  2: {
    keyword: "renne",
    password: "traineau",
    questions: [
      {
        question: "Comment s'appelle le renne au nez rouge?",
        options: ["Dasher", "Rudolph", "Comet", "Blitzen"],
        correctAnswer: 1,
      },
      {
        question: "Combien de rennes tirent le traîneau du Père Noël?",
        options: ["6", "8", "9", "12"],
        correctAnswer: 2,
      },
      {
        question: "Quel renne guide le traîneau en temps normal?",
        options: ["Dasher", "Dancer", "Prancer", "Vixen"],
        correctAnswer: 0,
      },
    ],
  },
  3: {
    keyword: "etoile",
    password: "lumiere",
    questions: [
      {
        question: "Que symbolise l'étoile au sommet du sapin?",
        options: [
          "L'étoile du berger",
          "L'étoile de Bethléem",
          "L'étoile polaire",
          "Une décoration",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "De quelle couleur était la première étoile de Noël électrique?",
        options: ["Blanche", "Rouge", "Dorée", "Multicolore"],
        correctAnswer: 0,
      },
    ],
  },
  4: {
    keyword: "cadeau",
    password: "ruban",
    questions: [
      {
        question: "Qui a inventé le papier cadeau?",
        options: [
          "Les Chinois",
          "Les Américains",
          "Les Anglais",
          "Les Français",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "En quelle année le premier papier cadeau de Noël a été commercialisé?",
        options: ["1917", "1923", "1931", "1945"],
        correctAnswer: 1,
      },
    ],
  },
  5: {
    keyword: "chaussette",
    password: "cheminee",
    questions: [
      {
        question: "D'où vient la tradition des chaussettes de Noël?",
        options: ["Angleterre", "États-Unis", "Pays-Bas", "Allemagne"],
        correctAnswer: 0,
      },
      {
        question: "Que mettait-on traditionnellement dans les chaussettes?",
        options: ["Des oranges", "Des bonbons", "Des jouets", "Des noix"],
        correctAnswer: 0,
      },
    ],
  },
};

// Continuer avec les jours 6-24 avec des thèmes comme:
// - Les traditions culinaires
// - Les chants de Noël
// - Les films de Noël
// - Les décorations
// - Les personnages (Père Noël, lutins, etc.)
// - Les traditions dans différents pays
