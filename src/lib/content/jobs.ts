import { IconType } from "react-icons";
import { FaCode, FaDatabase, FaServer, FaTools } from "react-icons/fa";

export type Job = {
  type: "job";
  title: string;
  company: string;
  date: {
    start: Date;
    end: Date | null;
  };
  description: {
    content: string;
    icon: IconType;
  }
  location: string;
  website?: string;
  points: {
    content: string;
    icon: IconType;
  }[];
  coordinates: {
    lat: number;
    lng: number;
  };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const jobs: Record<string, Job> = {
  fullStackDeveloper: {
    type: "job",
    title: "Full Stack Software Developer",
    company: "Western Fibre Communications Corp.",
    date: {
      start: new Date("2025-01-01T12:00:00-07:00"),
      end: null,
    },
    description: {
      content: "Lead developer managing internal tools, API integrations, and software system linkages.",
      icon: FaCode,
    },
    location: "Calgary, AB",
    points: [
      { content: "Collaborate closely with the systems architect on code design and architecture to ensure robust implementations.", icon: FaTools },
      { content: "Develop and maintain scalable internal tools to streamline workflows and enhance productivity across teams.", icon: FaServer },
      { content: "Integrate and automate diverse software systems through custom API solutions to improve operational efficiency.", icon: FaCode },
    ],
    coordinates: {
      lat: 51.0447,
      lng: -114.0719,
    },
    image: {
      src: "/images/fullStackDeveloper.jpg",
      alt: "Full Stack Software Developer",
      width: 1400,
      height: 788,
    },
  },
  webDeveloper: {
    type: "job",
    title: "Web Developer",
    company: "Western Fibre Communications Corp.",
    date: {
      start: new Date("2024-01-01T12:00:00-07:00"),
      end: new Date("2024-12-31T12:00:00-07:00"),
    },
    description: {
      content: "Focused on automating business processes and form handling for improved efficiency.",
      icon: FaCode,
    },
    location: "Calgary, AB",
    points: [
      { content: "Adopted scalable, serverless solutions to optimize costs and prepare for increased demand.", icon: FaServer },
      { content: "Enhanced code quality and efficiency by moving from JavaScript to TypeScript, reducing debugging time.", icon: FaCode },
      { content: "Enhanced internal systems by linking existing tools for improved data integrity and reporting.", icon: FaDatabase },
    ],
    coordinates: {
      lat: 51.0447,
      lng: -114.0719,
    },
    image: {
      src: "/images/webDeveloper.jpg",
      alt: "Web Developer",
      width: 1200,
      height: 625,
    },
  },
  jrWebDeveloper: {
    type: "job",
    title: "Junior Web Developer",
    company: "Western Fibre Communications Corp.",
    date: {
      start: new Date("2023-01-01T12:00:00-07:00"),
      end: new Date("2023-12-31T12:00:00-07:00"),
    },
    description: {
      content: "Gained foundational skills by contributing to web design, SEO, and data-driven CMS improvements.",
      icon: FaCode,
    },
    location: "Calgary, AB",
    points: [
      { content: "Collaborated with internal and external teams on web design and SEO, improving site performance.", icon: FaTools },
      { content: "Consolidated website data into a centralized database, streamlining updates across 30+ locations.", icon: FaDatabase },
      { content: "Automated various business forms and processes to reduce manual workloads, improving efficiency.", icon: FaCode },
    ],
    coordinates: {
      lat: 51.0447,
      lng: -114.0719,
    },
    image: {
      src: "/images/jrWebDeveloper.jpg",
      alt: "Junior Web Developer",
      width: 2048,
      height: 1536,
    },
  },
  itTechnician: {
    type: "job",
    title: "IT Technician",
    company: "Computer Upgrading Specialists",
    date: {
      start: new Date("2022-01-01T12:00:00-07:00"),
      end: new Date("2022-12-31T12:00:00-07:00"),
    },
    description: {
      content: "Provided technical support and maintenance for hardware and software systems.",
      icon: FaTools,
    },
    location: "Calgary, AB",
    points: [
      { content: "Diagnosed and resolved technical issues efficiently, ensuring client satisfaction.", icon: FaTools },
      { content: "Maintained and upgraded computer systems to meet client needs.", icon: FaServer },
      { content: "Developed foundational technical skills that informed future software development work.", icon: FaCode },
    ],
    coordinates: {
      lat: 51.0447,
      lng: -114.071,
    },
    image: {
      src: "/images/itTechnician.jpeg",
      alt: "IT Technician",
      width: 1200,
      height: 630,
    },
  },
};
