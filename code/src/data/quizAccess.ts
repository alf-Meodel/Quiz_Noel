export interface QuizAccess {
  code: string;
  password: string;
  day: number;
}

export const quizAccessList: QuizAccess[] = [
  // Code de test
  { code: "test", password: "test", day: 1 },
  // Codes réels
  { code: "noel", password: "sapin", day: 2 },
  { code: "bougie", password: "reveillon", day: 4 },
  { code: "boule", password: "bonhomme de neige", day: 6 },
  { code: "chaussette", password: "cloche", day: 8 },
  { code: "carte", password: "chocolat", day: 10 },
  { code: "etoile", password: "gant", day: 12 },
  { code: "cadeau", password: "flocon", day: 14 },
  { code: "sucre d'orge", password: "buche", day: 16 },
  { code: "renne", password: "dinde", day: 18 },
  { code: "calendrier", password: "casse noisette", day: 20 },
  { code: "route", password: "sel", day: 22 },
  { code: "hiver ", password: "laponie", day: 24 },
];

export const validateAccess = (
  code: string,
  password: string
): number | null => {
  const access = quizAccessList.find(
    (a) =>
      a.code.toLowerCase() === code.toLowerCase() &&
      a.password.toLowerCase() === password.toLowerCase()
  );

  if (access) {
    console.log("Accès validé pour le jour:", access.day);
    return access.day;
  }

  console.log("Accès refusé pour:", code, password);
  return null;
};
