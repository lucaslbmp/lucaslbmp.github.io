import { ExperienceDetails } from "./types";

export const experiences: ExperienceDetails[] = [
  {
    role: "Desenvolvedor de software",
    company: "NTU Software Technology",
    description:
      "Desenvolvimento de um sistema de front-end para um laboratório virtual de robótica em nuvem (DropS) a partir do zero.",
    skills: [
      "React",
      "SASS",
      "TypeScript",
      "HTML",
      "JavaScript",
      "Formik",
      "Context API",
    ],
    startDate: new Date("2022-01-01"),
    endDate: new Date("2024-01-31"),
  },
  {
    role: "Desenvolvedor de software (estágio)",
    company: "NTU Software Technology",
    description:
      "Desenvolvimento de uma solução de simulação robótica em nuvem e de um módulo de inteligência artificial para o treinamento de redes neurais usando dados de simulações de robôs virtuais.",
    skills: ["Python", "MindSpore"],
    startDate: new Date("2022-01-01"),
    endDate: new Date("2024-01-31"),
  },
];
