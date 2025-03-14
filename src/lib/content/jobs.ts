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
    preview: string;
  }
  location: string;
  website?: string;
  points: {
    content: string;
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
      content: "As the lead developer at Western Fibre Communications, I spearhead the development and maintenance of critical internal systems while working closely with the systems architect to implement robust, scalable solutions. My role involves making strategic technical decisions that impact the company's digital infrastructure and development practices, ensuring our systems can grow with the organization's needs.",
      preview: "Lead developer managing critical internal systems and making strategic technical decisions for company growth.",
    },
    location: "Calgary, AB",
    points: [
      { content: "Lead developer managing internal tools, API integrations, and software system linkages." },
      { content: "Collaborate closely with the systems architect on code design and architecture to ensure robust implementations." },
      { content: "Develop and maintain scalable internal tools to streamline workflows and enhance productivity across teams." },
      { content: "Integrate and automate diverse software systems through custom API solutions to improve operational efficiency." }
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
      content: "In my role as Web Developer, I took on increasing responsibility for the company's digital transformation initiatives, focusing on modernizing our development stack and improving our technical infrastructure. This period marked a significant shift in our approach to software development, incorporating more robust typing systems and cloud-based solutions.",
      preview: "Driving digital transformation through modern development practices and cloud-based solutions.",
    },
    location: "Calgary, AB",
    points: [
      { content: "Focused on automating business processes and form handling for improved efficiency." },
      { content: "Adopted scalable, serverless solutions to optimize costs and prepare for increased demand." },
      { content: "Enhanced code quality and efficiency by moving from JavaScript to TypeScript, reducing debugging time." },
      { content: "Enhanced internal systems by linking existing tools for improved data integrity and reporting." }
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
      content: "My initial role at Western Fibre Communications marked my transition into professional software development. During this period, I gained extensive experience in web technologies while contributing to significant improvements in the company's digital presence and internal systems. This foundational year provided valuable exposure to both technical and business aspects of web development.",
      preview: "First professional role focusing on web technologies and improving digital presence.",
    },
    location: "Calgary, AB",
    points: [
      { content: "Gained foundational skills by contributing to web design, SEO, and data-driven CMS improvements." },
      { content: "Collaborated with internal and external teams on web design and SEO, improving site performance." },
      { content: "Consolidated website data into a centralized database, streamlining updates across 30+ locations." },
      { content: "Automated various business forms and processes to reduce manual workloads, improving efficiency." }
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
      content: "Working as an IT Technician at Computer Upgrading Specialists provided me with comprehensive exposure to various hardware and software systems. This role helped me develop a strong foundation in troubleshooting and problem-solving, while also teaching me the importance of clear communication when explaining technical concepts to clients. The experience proved invaluable in understanding the practical aspects of computer systems that would later inform my software development career.",
      preview: "Technical support role building foundational knowledge in hardware and software systems.",
    },
    location: "Calgary, AB",
    points: [
      { content: "Provided technical support and maintenance for hardware and software systems." },
      { content: "Diagnosed and resolved technical issues efficiently, ensuring client satisfaction." },
      { content: "Maintained and upgraded computer systems to meet client needs." },
      { content: "Developed foundational technical skills that informed future software development work." }
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
