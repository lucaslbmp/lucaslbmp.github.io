import { ContactInfo, ExperienceDetails, ProjectDetails } from "./types";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

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
  {
    name: "Seção de Comentários",
    description:
      "Aplicação monorepositório desenvolvida em Next.js que simula uma página de comentários de rede social.",
    thumbnail: "/thumbs/comments-page-thumb.png",
    links: {
      repo: "https://github.com/lucaslbmp/comments-page",
    },
    skills: ["Next.js", "TypeScript", "Prisma", "PostgresSQL"],
  },
  {
    name: "Coleção Unsplash",
    description:
      "Serviço que permite a visualização, edição e criação coleções de imagens do banco de imagens Unsplash.",
    thumbnail: "/thumbs/unsplash-collection-thumb.png",
    links: {
      repo: "https://github.com/lucaslbmp/unsplash-collection",
      demo: "https://unsplash-collection-swart.vercel.app/",
    },
    skills: ["Next.js", "TailwindCSS", "TypeScript"],
  },
];

export const contacts: ContactInfo[] = [
  {
    type: "linkedin",
    Icon: FaLinkedin,
    display: "/lucas-bmp",
    url: "https://www.linkedin.com/in/lucas-bmp/",
  },
  {
    type: "github",
    Icon: FaGithub,
    display: "/lucaslbmp",
    url: "https://github.com/lucaslbmp",
  },
  {
    type: "email",
    Icon: FaEnvelope,
    display: "lucasset10@msn.com",
  },
  {
    type: "phone",
    Icon: FaPhone,
    display: "+55 (11) 95747-6961",
  },
];
