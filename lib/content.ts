// Definição dos Tipos (Para o TypeScript não reclamar)
export type ContentType = typeof CONTENT.pt;

export const CONTENT = {
  pt: {
    nav: { work: "Disponível para trabalho" },
    hero: {
      badge: "Disponível para projetos",
      title_1: "Construindo Arquiteturas",
      title_2: "Escaláveis & Inteligentes.",
      description: "Engenheiro de Software focado em <b class='text-emerald-400'>.NET</b> e <b class='text-emerald-400'>Inteligência Artificial</b>. Transformo requisitos complexos em sistemas robustos, seguros e performáticos.",
      btn_projects: "Ver Projetos",
      btn_github: "GitHub Arsenal"
    },
    tech: { title: "ARSENAL TÉCNICO" },
    projects: {
      title: "Projetos de Engenharia",
      subtitle: "Sistemas focados em performance, segurança e escalabilidade.",
      view_archive: "Ver Arquivo Completo",
      p1: {
        title: "Fleet Manager API",
        desc: "API REST completa para gestão de frotas. Arquitetura limpa com foco em segurança e performance. Implementa autenticação JWT e controle de acesso granular (RBAC).",
        btn: "Acessar Repositório"
      },
      p2: {
        title: "Secure Blog Platform",
        desc: "Sistema Fullstack com foco em segurança defensiva. Utiliza Row Level Security (RLS) no banco de dados para garantir isolamento de dados por usuário.",
        btn: "Acessar Código"
      },
      p3: {
        title: "ML Gradient Optimizer",
        desc: "Implementação pura de algoritmos de Machine Learning (Descida do Gradiente) e normalização matemática (Z-Score) usando C# sem bibliotecas externas.",
        btn: "Ver Algoritmo"
      }
    }
  },
  en: {
    nav: { work: "Available for work" },
    hero: {
      badge: "Available for work",
      title_1: "Building Scalable",
      title_2: "& Intelligent Architectures.",
      description: "Software Engineer focused on <b class='text-emerald-400'>.NET</b> and <b class='text-emerald-400'>Artificial Intelligence</b>. I transform complex requirements into robust, secure, and high-performance systems.",
      btn_projects: "View Projects",
      btn_github: "GitHub Arsenal"
    },
    tech: { title: "TECH ARSENAL" },
    projects: {
      title: "Engineering Projects",
      subtitle: "Systems focused on performance, security, and scalability.",
      view_archive: "View Full Archive",
      p1: {
        title: "Fleet Manager API",
        desc: "Complete REST API for fleet management. Clean Architecture focused on security and performance. Implements JWT authentication and granular access control (RBAC).",
        btn: "Access Repository"
      },
      p2: {
        title: "Secure Blog Platform",
        desc: "Fullstack system focused on defensive security. Uses Row Level Security (RLS) in the database to ensure user data isolation.",
        btn: "Access Code"
      },
      p3: {
        title: "ML Gradient Optimizer",
        desc: "Pure implementation of Machine Learning algorithms (Gradient Descent) and mathematical normalization (Z-Score) using C# without external libraries.",
        btn: "View Algorithm"
      }
    }
  }
};