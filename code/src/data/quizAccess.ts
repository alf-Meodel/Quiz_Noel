export interface QuizAccess {
  code: string;
  password: string;
  day: number;
}

export const quizAccessList: QuizAccess[] = [
  // Code de test
  { code: "noelTest", password: "test", day: 1 },
  // Codes réels
  { code: "sapin", password: "boule", day: 1 },
  { code: "renne", password: "traineau", day: 2 },
  { code: "etoile", password: "lumiere", day: 3 },
  { code: "cadeau", password: "ruban", day: 4 },
  { code: "chaussette", password: "cheminee", day: 5 },
  { code: "bougie", password: "flamme", day: 6 },
  { code: "guirlande", password: "lumiere", day: 7 },
  { code: "houx", password: "rouge", day: 8 },
  { code: "neige", password: "flocon", day: 9 },
  { code: "lutin", password: "atelier", day: 10 },
  { code: "cloche", password: "tintement", day: 11 },
  { code: "bonhomme", password: "neige", day: 12 },
  { code: "chocolat", password: "chaud", day: 13 },
  { code: "pain", password: "epice", day: 14 },
  { code: "biscuit", password: "cannelle", day: 15 },
  { code: "lait", password: "cookie", day: 16 },
  { code: "traineau", password: "grelot", day: 17 },
  { code: "couronne", password: "avent", day: 18 },
  { code: "marche", password: "noel", day: 19 },
  { code: "village", password: "illumine", day: 20 },
  { code: "lettre", password: "perenoel", day: 21 },
  { code: "conte", password: "feerique", day: 22 },
  { code: "reveillon", password: "festin", day: 23 },
  { code: "minuit", password: "magique", day: 24 }
];

export const validateAccess = (code: string, password: string): number | null => {
  const access = quizAccessList.find(
    a => a.code.toLowerCase() === code.toLowerCase() && 
        a.password.toLowerCase() === password.toLowerCase()
  );
  
  if (access) {
    console.log('Accès validé pour le jour:', access.day);
    return access.day;
  }
  
  console.log('Accès refusé pour:', code, password);
  return null;
};