import { ExperienceDetails, ProjectDetails } from "./types";

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

export const projects: ProjectDetails[] = [
  {
    name: "FSW Barber",
    description:
      "Sistema de agendamento de horários em barbearias construído em Next.js, contemplando autenticação de usuários com o Google e avaliação dos serviços.",
    thumbnail: "/thumbs/fsw-barber-thumb.png",
    links: {
      repo: "https://github.com/lucaslbmp/fsw-barber",
      demo: "https://fsw-barber-azure.vercel.app",
    },
    skills: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgresSQL",
      "TailwindCSS",
      // "Zod",
    ],
  },
  {
    name: "Gamer Store",
    description:
      "Aplicação monorepositório que simula um site de e-Commerce, construída usando TurboRepo, Next.js, TailwindCSS, Prisma e PostgresSQL.",
    thumbnail: "/thumbs/gamer-store.png",
    links: {
      repo: "https://github.com/lucaslbmp/gam3r.store",
    },
    skills: ["Next.js", "TailwindCSS", "Prisma", "PostgresSQL"],
  },
  {
    name: "Dev Ticket",
    description:
      "Sistema de gerenciamento de vendas de ingressos desenvolvido durante o curso de imersão Full Cycle Dev, contando com uma API de venda de ingressos em Golang que utiliza Repository Pattern e um front-end em Next.js.",
    thumbnail: "/thumbs/dev-ticket-thumb.png",
    links: {
      repo: "https://github.com/lucaslbmp/full-cycle-project",
    },
    skills: [
      "Next.js",
      "Nest.js",
      "Golang",
      "Kong",
      "TypeScript",
      "TailwindCSS",
      "Docker",
      "Prisma",
    ],
  },
];
