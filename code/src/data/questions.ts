import { Question } from "../types/quiz";

// Questions pour chaque jour
export const quizQuestions: Record<number, Question[]> = {
  1: [
    {
      question: "Quelle est l'origine de la tradition du sapin de Noël?",
      options: ["Allemagne", "France", "Suède", "Russie"],
      correctAnswer: 0,
    },
    {
      question:
        "En quelle année le Père Noël a-t-il été représenté en rouge pour la première fois?",
      options: ["1931", "1920", "1945", "1910"],
      correctAnswer: 0,
    },
    {
      question: "Quel renne du Père Noël a le nez rouge?",
      options: ["Dasher", "Rudolph", "Comet", "Blitzen"],
      correctAnswer: 1,
    },
    {
      question:
        "Dans quel pays la tradition des chaussettes de Noël a-t-elle commencé?",
      options: ["États-Unis", "Angleterre", "Pays-Bas", "Irlande"],
      correctAnswer: 1,
    },
    {
      question: "Quelle épice est souvent utilisée dans les biscuits de Noël?",
      options: ["Cannelle", "Poivre", "Cumin", "Curry"],
      correctAnswer: 0,
    },
    {
      question:
        "Combien de cadeaux sont traditionnellement offerts pendant les 12 jours de Noël?",
      options: ["364", "365", "366", "78"],
      correctAnswer: 0,
    },
    {
      question: "Quel pays a commencé la tradition de la couronne de l'Avent?",
      options: ["Suède", "Allemagne", "Autriche", "Danemark"],
      correctAnswer: 1,
    },
    {
      question: "Quelle plante est connue comme le 'baiser de Noël'?",
      options: ["Houx", "Gui", "Poinsettia", "Lierre"],
      correctAnswer: 1,
    },
    {
      question:
        "Dans quel pays la tradition du calendrier de l'Avent a-t-elle débuté?",
      options: ["Suisse", "Allemagne", "Autriche", "France"],
      correctAnswer: 1,
    },
    {
      question:
        "Quel animal tire traditionnellement le traîneau du Père Noël en Scandinavie?",
      options: ["Renne", "Cheval", "Élan", "Bœuf"],
      correctAnswer: 0,
    },
  ],
  // Ajoutez les questions pour les autres jours ici...

  2: [
    // MA
    {
      question: "Que symbolisent les œufs peints appelés pisanki en Pologne?",
      options: ["La prospérité", "La renaissance", "L’amour", "La paix"],
      correctAnswer: 1,
    },
    //PA
    {
      question: "Quel jeu vidéo emblématique a été créé en 1972?",
      options: ["Pac-Man", "Space Invaders", "Pong", "Tetris"],
      correctAnswer: 2,
    },
    // MA
    {
      question:
        "Quelle soupe froide à base de betterave est typique de l’été polonais ?",
      options: ["Barszcz", "Żurek", "Chłodnik", "Rosół"],
      correctAnswer: 2,
    },
    // PA
    {
      question:
        "Quelle technologie a remplacé progressivement les lampes à incandescence dans les années 80 pour les éclairages domestiques?",
      options: [
        "Les lampes halogènes",
        "Les lampes à vapeur de mercure",
        "Les ampoules LED",
        "Les lampes fluorescentes compactes",
      ],
      correctAnswer: 3,
    },
    // MA

    {
      question:
        "En quelle année la Pologne a-t-elle rejoint l’Union européenne",
      options: ["1995", "2004 ", "2001", "1999"],
      correctAnswer: 1,
    },
    // PA
    {
      question:
        "Quelle invention a permis de miniaturiser les appareils électriques dans les années 70?",
      options: [
        "Les transformateurs de puissance",
        "Les résistances en céramique",
        "Les condensateurs électrolytiques",
        "Les circuits intégrés",
      ],
      correctAnswer: 0,
    },
    // MA
    {
      question:
        "Quel mouvement ouvrier polonais a contribué à la chute du communisme?",
      options: ["Lewica", "Wolność", "OPZZ", "Solidarność"],
      correctAnswer: 3,
    },
    // PA
    {
      question:
        "Quel matériau est devenu standard pour les fils électriques en raison de sa conductivité?",
      options: ["Acier", "Aluminium", "Cuivre ", "Laiton"],
      correctAnswer: 2,
    },

    // MA
    {
      question: "Quelle icône religieuse est vénérée à Jasna Góra ?",
      options: [
        "Saint Jean-Paul II",
        "La croix d’argent",
        "La Vierge Noire",
        "La couronne de Wawel",
      ],
      correctAnswer: 2,
    },
    // PA
    {
      question: "Quel navigateur web a marqué les débuts d’Internet en 1993 ?",
      options: [
        "Internet Explorer",
        "Netscape Navigator",
        "Mozilla Firefox",
        "Opera",
      ],
      correctAnswer: 1,
    },
  ],
  // Ajoutez les questions pour les autres jours ici...
  4: [
    // MA
    {
      question: "Quel fleuve traverse Varsovie ?",
      options: ["Oder", "Warta", "Vistule", "Bug"],
      correctAnswer: 2,
    },
    {
      question:
        "Quel appareil a popularisé l’utilisation des prises de terre dans les années 80?",
      options: [
        "Les radiateurs électriques",
        "Les radiateurs électriques",
        "Les télévisions couleur",
        "Les aspirateurs industriels",
      ],
      correctAnswer: 1,
    },
    // MA
    {
      question:
        "Quel instrument est souvent utilisé dans la musique traditionnelle polonaise ?",
      options: ["Tambourin", "Flûte", "Guitare", "Accordéon"],
      correctAnswer: 3,
    },
    {
      question:
        "Quelle norme de protection a été rendue obligatoire dans les installations électriques dans les années 90?",
      options: [
        "Le fusible haute tension",
        "Le sectionneur rotatif",
        "Le disjoncteur différentiel",
        "Les interrupteurs bipolaires",
      ],
      correctAnswer: 2,
    },
    // MA
    {
      question: "Qui a dirigé le mouvement Solidarność dans les années 1980?",
      options: [
        "Andrzej Duda",
        "Adam Michnik",
        "Lech Wałęsa",
        "Tadeusz Mazowiecki",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "Pourquoi le courant est-il transformé en haute tension pour le transport ?",
      options: [
        "Pour augmenter la puissance transportée",
        "Pour réduire les pertes d’énergie",
        "Pour éviter les courts-circuits",
        "Pour alimenter les transformateurs",
      ],
      correctAnswer: 1,
    },
    // MA
    {
      question: "Quelle chaîne de montagnes est située au sud de la Pologne?",
      options: ["Bieszczady", "Sudètes", "Carpates", "Tatras"],
      correctAnswer: 3,
    },
    {
      question: "Qu’est-ce que l’effet Joule ?",
      options: [
        "La réduction des pertes d’énergie",
        "La stabilisation de la tension dans un circuit",
        "La conversion d’énergie électrique en chaleur",
        "La production de courant par induction",
      ],
      correctAnswer: 2,
    },
    // MA
    {
      question:
        "Dans quel pays la tradition du calendrier de l'Avent a-t-elle débuté?",
      options: ["Suisse", "Allemagne", "Autriche", "France"],
      correctAnswer: 1,
    },
    {
      question:
        "Quel animal tire traditionnellement le traîneau du Père Noël en Scandinavie?",
      options: ["Renne", "Cheval", "Élan", "Bœuf"],
      correctAnswer: 0,
    },
  ],
  // Ajoutez les questions pour les autres jours ici...
  6: [
    // MA
    {
      question: "Quelle est l'origine de la tradition du sapin de Noël?",
      options: ["Allemagne", "France", "Suède", "Russie"],
      correctAnswer: 0,
    },
    {
      question:
        "En quelle année le Père Noël a-t-il été représenté en rouge pour la première fois?",
      options: ["1931", "1920", "1945", "1910"],
      correctAnswer: 0,
    },
    // MA
    {
      question: "Quel renne du Père Noël a le nez rouge?",
      options: ["Dasher", "Rudolph", "Comet", "Blitzen"],
      correctAnswer: 1,
    },
    {
      question:
        "Dans quel pays la tradition des chaussettes de Noël a-t-elle commencé?",
      options: ["États-Unis", "Angleterre", "Pays-Bas", "Irlande"],
      correctAnswer: 1,
    },
    // MA
    {
      question: "Quelle épice est souvent utilisée dans les biscuits de Noël?",
      options: ["Cannelle", "Poivre", "Cumin", "Curry"],
      correctAnswer: 0,
    },
    {
      question:
        "Combien de cadeaux sont traditionnellement offerts pendant les 12 jours de Noël?",
      options: ["364", "365", "366", "78"],
      correctAnswer: 0,
    },
    // MA
    {
      question: "Quel pays a commencé la tradition de la couronne de l'Avent?",
      options: ["Suède", "Allemagne", "Autriche", "Danemark"],
      correctAnswer: 1,
    },
    {
      question: "Quelle plante est connue comme le 'baiser de Noël'?",
      options: ["Houx", "Gui", "Poinsettia", "Lierre"],
      correctAnswer: 1,
    },
    // MA
    {
      question:
        "Dans quel pays la tradition du calendrier de l'Avent a-t-elle débuté?",
      options: ["Suisse", "Allemagne", "Autriche", "France"],
      correctAnswer: 1,
    },
    {
      question:
        "Quel animal tire traditionnellement le traîneau du Père Noël en Scandinavie?",
      options: ["Renne", "Cheval", "Élan", "Bœuf"],
      correctAnswer: 0,
    },
  ],
  // Ajoutez les questions pour les autres jours ici...
  8: [
    // MA
    {
      question: "Quelle est l'origine de la tradition du sapin de Noël?",
      options: ["Allemagne", "France", "Suède", "Russie"],
      correctAnswer: 0,
    },
    {
      question:
        "En quelle année le Père Noël a-t-il été représenté en rouge pour la première fois?",
      options: ["1931", "1920", "1945", "1910"],
      correctAnswer: 0,
    },
    // MA
    {
      question: "Quel renne du Père Noël a le nez rouge?",
      options: ["Dasher", "Rudolph", "Comet", "Blitzen"],
      correctAnswer: 1,
    },
    {
      question:
        "Dans quel pays la tradition des chaussettes de Noël a-t-elle commencé?",
      options: ["États-Unis", "Angleterre", "Pays-Bas", "Irlande"],
      correctAnswer: 1,
    },
    // MA
    {
      question: "Quelle épice est souvent utilisée dans les biscuits de Noël?",
      options: ["Cannelle", "Poivre", "Cumin", "Curry"],
      correctAnswer: 0,
    },
    {
      question:
        "Combien de cadeaux sont traditionnellement offerts pendant les 12 jours de Noël?",
      options: ["364", "365", "366", "78"],
      correctAnswer: 0,
    },
    // MA
    {
      question: "Quel pays a commencé la tradition de la couronne de l'Avent?",
      options: ["Suède", "Allemagne", "Autriche", "Danemark"],
      correctAnswer: 1,
    },
    {
      question: "Quelle plante est connue comme le 'baiser de Noël'?",
      options: ["Houx", "Gui", "Poinsettia", "Lierre"],
      correctAnswer: 1,
    },
    // MA
    {
      question:
        "Dans quel pays la tradition du calendrier de l'Avent a-t-elle débuté?",
      options: ["Suisse", "Allemagne", "Autriche", "France"],
      correctAnswer: 1,
    },
    {
      question:
        "Quel animal tire traditionnellement le traîneau du Père Noël en Scandinavie?",
      options: ["Renne", "Cheval", "Élan", "Bœuf"],
      correctAnswer: 0,
    },
  ],
  // Ajoutez les questions pour les autres jours ici...
  10: [
    // MA
    {
      question: "10 Quelle est l'origine de la tradition du sapin de Noël?",
      options: ["Allemagne", "France", "Suède", "Russie"],
      correctAnswer: 0,
    },
    {
      question:
        "En quelle année le Père Noël a-t-il été représenté en rouge pour la première fois?",
      options: ["1931", "1920", "1945", "1910"],
      correctAnswer: 0,
    },
    // MA
    {
      question: "Quel renne du Père Noël a le nez rouge?",
      options: ["Dasher", "Rudolph", "Comet", "Blitzen"],
      correctAnswer: 1,
    },
    {
      question:
        "Dans quel pays la tradition des chaussettes de Noël a-t-elle commencé?",
      options: ["États-Unis", "Angleterre", "Pays-Bas", "Irlande"],
      correctAnswer: 1,
    },
    // MA
    {
      question: "Quelle épice est souvent utilisée dans les biscuits de Noël?",
      options: ["Cannelle", "Poivre", "Cumin", "Curry"],
      correctAnswer: 0,
    },
    {
      question:
        "Combien de cadeaux sont traditionnellement offerts pendant les 12 jours de Noël?",
      options: ["364", "365", "366", "78"],
      correctAnswer: 0,
    },
    // MA
    {
      question: "Quel pays a commencé la tradition de la couronne de l'Avent?",
      options: ["Suède", "Allemagne", "Autriche", "Danemark"],
      correctAnswer: 1,
    },
    {
      question: "Quelle plante est connue comme le 'baiser de Noël'?",
      options: ["Houx", "Gui", "Poinsettia", "Lierre"],
      correctAnswer: 1,
    },
    // MA
    {
      question:
        "Dans quel pays la tradition du calendrier de l'Avent a-t-elle débuté?",
      options: ["Suisse", "Allemagne", "Autriche", "France"],
      correctAnswer: 1,
    },
    {
      question:
        "Quel animal tire traditionnellement le traîneau du Père Noël en Scandinavie?",
      options: ["Renne", "Cheval", "Élan", "Bœuf"],
      correctAnswer: 0,
    },
  ],
  // Ajoutez les questions pour les autres jours ici...
  12: [
    // MA
    {
      question: "Quelle est l'origine de la tradition du sapin de Noël?",
      options: ["Allemagne", "France", "Suède", "Russie"],
      correctAnswer: 0,
    },
    {
      question:
        "En quelle année le Père Noël a-t-il été représenté en rouge pour la première fois?",
      options: ["1931", "1920", "1945", "1910"],
      correctAnswer: 0,
    },
    // MA
    {
      question: "Quel renne du Père Noël a le nez rouge?",
      options: ["Dasher", "Rudolph", "Comet", "Blitzen"],
      correctAnswer: 1,
    },
    {
      question:
        "Dans quel pays la tradition des chaussettes de Noël a-t-elle commencé?",
      options: ["États-Unis", "Angleterre", "Pays-Bas", "Irlande"],
      correctAnswer: 1,
    },
    // MA
    {
      question: "Quelle épice est souvent utilisée dans les biscuits de Noël?",
      options: ["Cannelle", "Poivre", "Cumin", "Curry"],
      correctAnswer: 0,
    },
    {
      question:
        "Combien de cadeaux sont traditionnellement offerts pendant les 12 jours de Noël?",
      options: ["364", "365", "366", "78"],
      correctAnswer: 0,
    },
    // MA
    {
      question: "Quel pays a commencé la tradition de la couronne de l'Avent?",
      options: ["Suède", "Allemagne", "Autriche", "Danemark"],
      correctAnswer: 1,
    },
    {
      question: "Quelle plante est connue comme le 'baiser de Noël'?",
      options: ["Houx", "Gui", "Poinsettia", "Lierre"],
      correctAnswer: 1,
    },
    // MA
    {
      question:
        "Dans quel pays la tradition du calendrier de l'Avent a-t-elle débuté?",
      options: ["Suisse", "Allemagne", "Autriche", "France"],
      correctAnswer: 1,
    },
    {
      question:
        "Quel animal tire traditionnellement le traîneau du Père Noël en Scandinavie?",
      options: ["Renne", "Cheval", "Élan", "Bœuf"],
      correctAnswer: 0,
    },
  ],
  // Ajoutez les questions pour les autres jours ici...
  14: [
    // MA
    {
      question: "Quelle est l'origine de la tradition du sapin de Noël?",
      options: ["Allemagne", "France", "Suède", "Russie"],
      correctAnswer: 0,
    },
    {
      question:
        "En quelle année le Père Noël a-t-il été représenté en rouge pour la première fois?",
      options: ["1931", "1920", "1945", "1910"],
      correctAnswer: 0,
    },
    // MA
    {
      question: "Quel renne du Père Noël a le nez rouge?",
      options: ["Dasher", "Rudolph", "Comet", "Blitzen"],
      correctAnswer: 1,
    },
    {
      question:
        "Dans quel pays la tradition des chaussettes de Noël a-t-elle commencé?",
      options: ["États-Unis", "Angleterre", "Pays-Bas", "Irlande"],
      correctAnswer: 1,
    },
    // MA
    {
      question: "Quelle épice est souvent utilisée dans les biscuits de Noël?",
      options: ["Cannelle", "Poivre", "Cumin", "Curry"],
      correctAnswer: 0,
    },
    {
      question:
        "Combien de cadeaux sont traditionnellement offerts pendant les 12 jours de Noël?",
      options: ["364", "365", "366", "78"],
      correctAnswer: 0,
    },
    // MA
    {
      question: "Quel pays a commencé la tradition de la couronne de l'Avent?",
      options: ["Suède", "Allemagne", "Autriche", "Danemark"],
      correctAnswer: 1,
    },
    {
      question: "Quelle plante est connue comme le 'baiser de Noël'?",
      options: ["Houx", "Gui", "Poinsettia", "Lierre"],
      correctAnswer: 1,
    },
    // MA
    {
      question:
        "Dans quel pays la tradition du calendrier de l'Avent a-t-elle débuté?",
      options: ["Suisse", "Allemagne", "Autriche", "France"],
      correctAnswer: 1,
    },
    {
      question:
        "Quel animal tire traditionnellement le traîneau du Père Noël en Scandinavie?",
      options: ["Renne", "Cheval", "Élan", "Bœuf"],
      correctAnswer: 0,
    },
  ],
  // Ajoutez les questions pour les autres jours ici...
};

export const getQuestionsForDay = (day: number): Question[] => {
  return quizQuestions[day] || quizQuestions[1]; // Retourne les questions du jour 1 par défaut
};
