import Axiom from "@/features/skills/components/Axiom";
import { FaJava } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { SiDigitalocean, SiDrizzle, SiExpress, SiFastapi, SiGooglecloud, SiMysql, SiPayloadcms, SiPostgresql, SiPrettier, SiPrisma, SiReacthookform, SiRedis, SiSalesforce, SiShadcnui, SiZod } from "react-icons/si";
import { TbBrandAdobe, TbBrandAws, TbBrandAzure, TbBrandCSharp, TbBrandCss3, TbBrandFigma, TbBrandFirebase, TbBrandFramerMotion, TbBrandGithub, TbBrandGithubCopilot, TbBrandGraphql, TbBrandHtml5, TbBrandJavascript, TbBrandNextjs, TbBrandPhp, TbBrandPowershell, TbBrandPython, TbBrandReact, TbBrandSass, TbBrandTailwind, TbBrandTypescript, TbBrandVercel, TbBrandVscode, TbBrandWordpress, TbFileTypeSql, TbTable, TbTerminal } from "react-icons/tb";

type SkillCategory = {
  name: "Progamming",
  subCategory?: never
} | {
  name: "Frameworks",
  subCategory: "Fullstack" | "Frontend" | "Backend"
} | {
  name: "Libraries",
  subCategory: "Frontend" | "Backend"
} | {
  name: "Tools",
  subCategory: "Design" | "Development"
} | {
  name: "Cloud",
  subCategory?: never
} | {
  name: "Databases",
  subCategory: "SQL" | "NoSQL"
} | {
  name: "Other Languages",
  subCategory: "Markup" | "Query" | "Scripting"
}

export type Skill = {
  name: string;
  description: string;
  icon: IconType;
  favoutite: boolean;
  category: SkillCategory;
  link?: string;
}

export const skills: Record<string, Skill> = {
  TypeScript: {
    name: "TypeScript",
    description: "A strongly typed superset of JavaScript that enhances code quality and maintainability.",
    icon: TbBrandTypescript,
    favoutite: true,
    category: {
      name: "Progamming"
    },
    link: "https://www.typescriptlang.org/"
  },
  Python: {
    name: "Python",
    description: "A versatile programming language widely used in data science, machine learning, and web development.",
    icon: TbBrandPython,
    favoutite: false,
    category: {
      name: "Progamming"
    }
  },
  Java: {
    name: "Java",
    description: "A robust, object-oriented programming language commonly used for enterprise applications.",
    icon: FaJava,
    favoutite: false,
    category: {
      name: "Progamming"
    }
  },
  CSharp: {
    name: "C#",
    description: "A modern, object-oriented language primarily used in game development and enterprise software.",
    icon: TbBrandCSharp,
    favoutite: false,
    category: {
      name: "Progamming"
    }
  },
  PHP: {
    name: "PHP",
    description: "A server-side scripting language commonly used for web development, including platforms like WordPress.",
    icon: TbBrandPhp,
    favoutite: false,
    category: {
      name: "Progamming"
    }
  },
  JavaScript: {
    name: "JavaScript",
    description: "The foundational programming language of the web, enabling dynamic and interactive content.",
    icon: TbBrandJavascript,
    favoutite: false,
    category: {
      name: "Progamming"
    },
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  HTML: {
    name: "HTML",
    description: "The standard markup language for structuring and presenting content on the web.",
    icon: TbBrandHtml5,
    favoutite: false,
    category: {
      name: "Other Languages",
      subCategory: 'Markup'
    }
  },
  CSS: {
    name: "CSS",
    description: "A stylesheet language used to define the look and layout of web pages.",
    icon: TbBrandCss3,
    favoutite: false,
    category: {
      name: "Other Languages",
      subCategory: 'Markup'
    }
  },
  SASS: {
    name: "SASS",
    description: "A powerful CSS preprocessor that adds functionality such as variables and nesting.",
    icon: TbBrandSass,
    favoutite: false,
    category: {
      name: "Other Languages",
      subCategory: 'Markup'
    }
  },
  SQL: {
    name: "SQL",
    description: "A standard language for managing and querying relational databases.",
    icon: TbFileTypeSql,
    favoutite: false,
    category: {
      name: "Other Languages",
      subCategory: 'Query'
    }
  },
  React: {
    name: "React",
    description: "A popular library for building dynamic and interactive user interfaces.",
    icon: TbBrandReact,
    favoutite: false,
    category: {
      name: "Libraries",
      subCategory: 'Frontend'
    },
    link: "https://reactjs.org/"
  },
  NextJs: {
    name: "Next.js",
    description: "A React-based framework for building full-stack web applications with server-side rendering.",
    icon: TbBrandNextjs,
    favoutite: true,
    category: {
      name: 'Frameworks',
      subCategory: 'Fullstack'
    },
    link: "https://nextjs.org/"
  },
  Express: {
    name: "Express",
    description: "A lightweight Node.js framework for building backend web applications and APIs.",
    icon: SiExpress,
    favoutite: false,
    category: {
      name: 'Frameworks',
      subCategory: 'Backend'
    },
    link: "https://expressjs.com/"
  },
  TailwindCSS: {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for building responsive and scalable designs.",
    icon: TbBrandTailwind,
    favoutite: true,
    category: {
      name: "Libraries",
      subCategory: 'Frontend'
    },
    link: "https://tailwindcss.com/"
  },
  AdobeCreativeSuite: {
    name: "Adobe Creative Suite",
    description: "A comprehensive suite of design and multimedia software for creative professionals.",
    icon: TbBrandAdobe,
    favoutite: false,
    category: {
      name: 'Tools',
      subCategory: 'Design'
    },
  },
  VisualStudioCode: {
    name: "Visual Studio Code",
    description: "A versatile and lightweight code editor with extensive customization options.",
    icon: TbBrandVscode,
    favoutite: false,
    category: {
      name: 'Tools',
      subCategory: 'Development'
    },
    link: "https://code.visualstudio.com/"
  },
  GraphQL: {
    name: "GraphQL",
    description: "A query language and runtime for APIs that enables flexible and efficient data retrieval.",
    icon: TbBrandGraphql,
    favoutite: false,
    category: {
      name: 'Other Languages',
      subCategory: 'Query'
    },
  },
  FramerMotion: {
    name: "Framer Motion",
    description: "A library for creating smooth and customizable animations in React applications.",
    icon: TbBrandFramerMotion,
    favoutite: false,
    category: {
      name: 'Libraries',
      subCategory: 'Frontend'
    },
    link: "https://www.framer.com/motion/"
  },
  ReactHookForm: {
    name: "React Hook Form",
    description: "A lightweight library for building and managing forms in React applications.",
    icon: SiReacthookform,
    favoutite: false,
    category: {
      name: 'Libraries',
      subCategory: 'Frontend'
    },
  },
  Zod: {
    name: "Zod",
    description: "A TypeScript-first schema validation library for building robust applications.",
    icon: SiZod,
    favoutite: false,
    category: {
      name: 'Libraries',
      subCategory: 'Frontend'
    },
  },
  ShadcnUI: {
    name: "Shadcn UI",
    description: "A library of accessible and customizable UI components for React.",
    icon: SiShadcnui,
    favoutite: false,
    category: {
      name: 'Libraries',
      subCategory: 'Frontend'
    },
    link: "https://ui.shadcn.com/"
  },
  Drizzle: {
    name: "Drizzle",
    description: "A type-safe object-relational mapper (ORM) for simplifying database interactions.",
    icon: SiDrizzle,
    favoutite: false,
    category: {
      name: 'Libraries',
      subCategory: 'Backend'
    },
  },
  Axiom: {
    name: "Axiom",
    description: "A modern logging framework designed for simplicity and scalability.",
    icon: Axiom,
    favoutite: false,
    category: {
      name: 'Libraries',
      subCategory: 'Backend'
    },
  },
  TanstackTable: {
    name: "Tanstack Table",
    description: "A highly customizable and performant table library for React applications.",
    icon: TbTable,
    favoutite: false,
    category: {
      name: 'Libraries',
      subCategory: 'Frontend'
    },
  },
  FastAPI: {
    name: "FastAPI",
    description: "A high-performance Python framework for building APIs with automatic documentation.",
    icon: SiFastapi,
    favoutite: false,
    category: {
      name: 'Frameworks',
      subCategory: 'Backend'
    },
    link: "https://fastapi.tiangolo.com/"
  },
  PayloadCMS: {
    name: "Payload CMS",
    description: "A headless CMS designed for developers, offering flexibility and powerful features.",
    icon: SiPayloadcms,
    favoutite: true,
    category: {
      name: 'Frameworks',
      subCategory: 'Backend'
    },
  },
  Figma: {
    name: "Figma",
    description: "A collaborative design tool for creating wireframes, prototypes, and UI designs.",
    icon: TbBrandFigma,
    favoutite: false,
    category: {
      name: 'Tools',
      subCategory: 'Design'
    },
    link: "https://www.figma.com/"
  },
  GithubActions: {
    name: "GitHub Actions",
    description: "An automation tool for continuous integration and delivery workflows.",
    icon: TbBrandGithub,
    favoutite: false,
    category: {
      name: 'Tools',
      subCategory: 'Development'
    },
  },
  GithubCopilot: {
    name: "GitHub Copilot",
    description: "An AI-powered assistant for writing code more efficiently.",
    icon: TbBrandGithubCopilot,
    favoutite: false,
    category: {
      name: 'Tools',
      subCategory: 'Development'
    },
  },
  Prettier: {
    name: "Prettier",
    description: "An opinionated code formatter that ensures consistent styling across projects.",
    icon: SiPrettier,
    favoutite: false,
    category: {
      name: 'Tools',
      subCategory: 'Development'
    },
  },
  Wordpress: {
    name: "WordPress",
    description: "A versatile content management system for building websites and blogs.",
    icon: TbBrandWordpress,
    favoutite: false,
    category: {
      name: 'Frameworks',
      subCategory: 'Fullstack'
    },
    link: "https://wordpress.org/"
  },
  Bash: {
    name: "Bash",
    description: "A Unix shell and scripting language for automating tasks and managing systems.",
    icon: TbTerminal,
    favoutite: false,
    category: {
      name: 'Other Languages',
      subCategory: 'Scripting'
    },
  },
  PowerShell: {
    name: "PowerShell",
    description: "A scripting and automation framework for managing Windows environments.",
    icon: TbBrandPowershell,
    favoutite: false,
    category: {
      name: 'Other Languages',
      subCategory: 'Scripting'
    },
  },
  Azure: {
    name: "Azure",
    description: "A cloud computing platform offering a wide range of services for building and deploying applications.",
    icon: TbBrandAzure,
    favoutite: false,
    category: {
      name: 'Cloud',
    },
    link: "https://azure.microsoft.com/"
  },
  AWS: {
    name: "AWS",
    description: "A comprehensive cloud platform providing a suite of services for building and deploying applications.",
    icon: TbBrandAws,
    favoutite: false,
    category: {
      name: 'Cloud',
    },
    link: "https://aws.amazon.com/"
  },
  Vercel: {
    name: "Vercel",
    description: "A cloud platform for deploying serverless functions and static sites with ease.",
    icon: TbBrandVercel,
    favoutite: false,
    category: {
      name: 'Cloud',
    },
    link: "https://vercel.com/"
  },
  GoogleCloud: {
    name: "Google Cloud",
    description: "A suite of cloud computing services for building and deploying applications on Google's infrastructure.",
    icon: SiGooglecloud,
    favoutite: false,
    category: {
      name: 'Cloud',
    },
    link: "https://cloud.google.com/"
  },
  Github: {
    name: "GitHub",
    description: "A platform for hosting and collaborating on code, enabling version control and project management.",
    icon: TbBrandGithub,
    favoutite: false,
    category: {
      name: 'Tools',
      subCategory: 'Development'
    },
    link: "https://github.com"
  },
  DigitalOcean: {
    name: "DigitalOcean",
    description: "A cloud platform for deploying and managing virtual servers, databases, and other infrastructure.",
    icon: SiDigitalocean,
    favoutite: false,
    category: {
      name: 'Cloud',
    },
    link: "https://www.digitalocean.com/"
  },
  PostgreSQL: {
    name: "PostgreSQL",
    description: "A powerful open-source relational database known for its robust features and performance.",
    icon: SiPostgresql,
    favoutite: false,
    category: {
      name: 'Databases',
      subCategory: 'SQL'
    },
    link: "https://www.postgresql.org/"
  },
  MySQL: {
    name: "MySQL",
    description: "An open-source relational database that is widely used for web applications.",
    icon: SiMysql,
    favoutite: false,
    category: {
      name: 'Databases',
      subCategory: 'SQL'
    },
    link: "https://www.mysql.com/"
  },
  MongoDB: {
    name: "MongoDB",
    description: "A popular NoSQL database known for its flexibility and scalability.",
    icon: TbBrandAws,
    favoutite: false,
    category: {
      name: 'Databases',
      subCategory: 'NoSQL'
    },
    link: "https://www.mongodb.com/"
  },
  Firebase: {
    name: "Firebase",
    description: "A platform for building mobile and web applications with a suite of cloud services.",
    icon: TbBrandFirebase,
    favoutite: false,
    category: {
      name: 'Databases',
      subCategory: 'NoSQL'
    },
    link: "https://firebase.google.com/"
  },
  Redis: {
    name: "Redis",
    description: "An in-memory data structure store used as a database, cache, and message broker.",
    icon: SiRedis,
    favoutite: false,
    category: {
      name: 'Databases',
      subCategory: 'NoSQL'
    },
    link: "https://redis.io/"
  },
  Prisma: {
    name: "Prisma",
    description: "A modern database toolkit for building type-safe, performant database queries.",
    icon: SiPrisma,
    favoutite: false,
    category: {
      name: 'Libraries',
      subCategory: 'Backend'
    },
    link: "https://www.prisma.io/"
  },
  Salesforce: {
    name: "Salesforce",
    description: "A cloud-based CRM platform for managing sales, customer service, and marketing.",
    icon: SiSalesforce,
    favoutite: false,
    category: {
      name: 'Cloud',

    },
    link: "https://www.salesforce.com/"
  },
  Apex: {
    name: "Apex",
    description: "A strongly typed, object-oriented programming language used in Salesforce development.",
    icon: SiSalesforce,
    favoutite: false,
    category: {
      name: 'Progamming'
    },
    link: "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/"
  }

};





