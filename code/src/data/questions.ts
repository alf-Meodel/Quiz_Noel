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
      question:
        "Dans le niveau de la jeep de Tomb Raider 4 : La Révélation Finale, quel est l’objectif principal de Lara ??",
      options: [
        "Récupérer une clé pour ouvrir un temple",
        "Trouver l’amulette d’Horus",
        "Fuir les sbires de Von Croy",
        "Désactiver des pièges mécaniques",
      ],
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
      question:
        "Qui était le président de la République française lors de la proclamation de la Cinquième République en 1958 ?",
      options: [
        "François Mitterrand",
        "Charles de Gaulle",
        "Georges Pompidou",
        "René Coty",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "Quel personnage des contes de Grimm transforme la paille en or en échange du premier-né d’une jeune fille ?",
      options: [
        "Le joueur de flûte",
        "Rumpelstiltskin (Nain Tracassin)",
        "La sorcière de l'ouest",
        "La sorcière de glace",
      ],
      correctAnswer: 1,
    },
    // MA
    {
      question:
        "Quel roi a succédé à Napoléon Ier après son abdication en 1814",
      options: ["Henri 3", "Louis 17", "Charle X", "Louis 18"],
      correctAnswer: 3,
    },
    {
      question:
        "Qui était le premier roi des Francs à être couronné chrétien ? ",
      options: ["Charlemagne", "Clovis", "Philippe Auguste", "Hugues Capet"],
      correctAnswer: 1,
    },
    // MA
    {
      question: "En quelle année débute le reigne de Louis 14",
      options: ["1620", "1715", "1515", "1643"],
      correctAnswer: 3,
    },
    {
      question:
        "Quels pays composaient la Triple-Entente au début de la guerre ?",
      options: [
        "Royaume-Uni, France, Italie",
        "France, Royaume-Uni, Russie",
        "États-Unis, France, Royaume-Uni",
        "Allemagne, Russie, France",
      ],
      correctAnswer: 1,
    },
    // MA
    {
      question:
        "Dans les contes slaves, que doit souvent faire un héros pour obtenir l’aide de Baba Yaga ?",
      options: [
        "Lui offrir un trésor caché",
        "Combattre un dragon gardant son territoire",
        "Répondre à des énigmes ou accomplir des tâches impossibles",
        "Lui voler un objet magique",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "Dans Tomb Raider 4 Qui manipule Von Croy pour devenir l'antagoniste principal du jeu?",
      options: ["Horus", "Anubis", "Seth ", "Osiris"],
      correctAnswer: 2,
    },
    // MA
    {
      question: "Dans les légendes polonaises, qui est Kostcheï l'Immortel ?",
      options: [
        "Un roi légendaire qui a uni les tribus slaves",
        "Un sorcier maléfique dont l'âme est cachée dans un objet",
        "Un dragon qui garde un trésor sous le Wawel",
        "Un héros mythique qui a vaincu les forces du mal",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "Qui a été le dernier roi à régner en France avant l’instauration définitive de la République ?",
      options: [
        "Charles X",
        "Napoléon III",
        "Louis XVIII",
        "Louis-Philippe Ier",
      ],
      correctAnswer: 3,
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
