export type Job = {
  type: "job";
  title: string;
  company: string;
  date: {
    start: Date;
    end: Date | null;
  };
  description: {
    content: JSX.Element;
    preview: string;
  };
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
      content: (
        <>
          <p>
            As the <strong>lead software developer</strong> at Western Fibre
            Communications, I am responsible for the{" "}
            <strong>design, development, and integration</strong> of the
            company&apos;s internal software systems. My role extends beyond
            coding—I work closely with <strong>every department</strong> to
            ensure that all software and systems operate efficiently together,
            identifying opportunities for{" "}
            <strong>
              automation, optimization, and seamless interoperability
            </strong>
            .
          </p>

          <p>
            I take a <strong>strategic approach to system architecture</strong>,
            ensuring that solutions are{" "}
            <strong>
              scalable, maintainable, and aligned with business needs
            </strong>
            . Where necessary, I{" "}
            <strong>design and develop custom solutions</strong> tailored to our
            specific requirements, while also leveraging{" "}
            <strong>industry-standard tools</strong> when they provide the best
            balance of reliability, flexibility, and cost-effectiveness. This
            approach allows us to stay agile, ensuring that technology supports
            business growth rather than creating unnecessary overhead.
          </p>

          <p>
            A core aspect of my work involves{" "}
            <strong>integrating diverse software platforms</strong> through
            custom APIs, automating workflows, and improving data consistency
            across departments. By streamlining these processes, I help reduce
            manual work, minimize errors, and enable teams to make{" "}
            <strong>data-driven decisions with real-time insights</strong>.
          </p>

          <p>
            Beyond development, I lead the{" "}
            <strong>software development department</strong>, setting{" "}
            <strong>
              technical direction, best practices, and coding standards
            </strong>
            . I foster a{" "}
            <strong>culture of high-quality software development</strong>,
            emphasizing{" "}
            <strong>
              clean code, proper documentation, and scalable design patterns
            </strong>{" "}
            to ensure that our systems remain robust and easy to maintain over
            time.
          </p>

          <p>
            By driving{" "}
            <strong>technical innovation and strategic system design</strong>, I
            contribute to{" "}
            <strong>
              increased efficiency, improved operational processes, and the
              long-term success of the company
            </strong>{" "}
            in an ever-evolving digital landscape.
          </p>
        </>
      ),
      preview:
        "Primary developer managing critical internal systems and making strategic technical decisions for company growth.",
    },
    location: "Calgary, AB",
    points: [
      {
        content:
          "Lead the design and development of custom software solutions for internal systems, ensuring scalability and alignment with company goals.",
      },

      {
        content:
          "Collaborate with all departments to integrate and automate systems, improving workflow efficiency and decision-making.",
      },

      {
        content:
          "Oversee software development, setting technical direction, enforcing best practices, and ensuring high-quality code and documentation.",
      },
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
      content: (
        <>
          <p>
            In my second year at Western Fibre Communications, I focused on{" "}
            <strong>building internal tools</strong> to automate and streamline
            critical workflows, significantly{" "}
            <strong>
              reducing manual effort and operational inefficiencies
            </strong>
            . Many of these processes were fully automated, eliminating the need
            for manual intervention altogether.
          </p>

          <p>
            I developed{" "}
            <strong>
              custom reporting tools, bulk data import/export solutions, and
              automated data transfers
            </strong>{" "}
            between platforms, saving the company{" "}
            <strong>thousands of hours</strong> of work. These solutions
            improved{" "}
            <strong>data accuracy, consistency, and accessibility</strong>,
            allowing teams to make informed decisions with minimal overhead.
          </p>

          <p>
            To further optimize operations, I created{" "}
            <strong>data scrapers</strong> that retrieved information from
            external services, reducing our reliance on third-party tools and
            lowering costs. By automating tedious, repetitive tasks, I helped
            Western Fibre{" "}
            <strong>
              increase efficiency, reduce errors, and scale operations
            </strong>{" "}
            without adding unnecessary complexity.
          </p>

          <p>
            These systems and processes have allowed our{" "}
            <strong>customer base to grow exponentially</strong> while
            maintaining a lean team and minimal added staff. My work contributed
            to a more{" "}
            <strong>
              automated, data-driven, and scalable digital infrastructure
            </strong>
            , driving significant operational growth.
          </p>
        </>
      ),
      preview:
        "Driving digital transformation through modern development practices and cloud-based solutions.",
    },
    location: "Calgary, AB",
    points: [
      {
        content:
          "Developed custom reporting tools and automated workflows, saving thousands of hours of manual work and enhancing operational efficiency and data accuracy.",
      },
      {
        content:
          "Created data scrapers to reduce reliance on third-party tools, cutting costs and improving data retrieval accuracy.",
      },
      {
        content:
          "Enhanced code quality by implementing TypeScript, automated testing, and CI/CD pipelines, significantly reducing bugs and development time.",
      },
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
      content: (
        <>
          <p>
            As a Junior Web Developer at Western Fibre Communications, I
            collaborated with a marketing agency to{" "}
            <strong>
              fully redesign and develop a new design for the Moby website
            </strong>
            . This project allowed me to gain extensive experience in both web
            design and development, while ensuring that the new site would be
            more efficient and scalable.
          </p>

          <p>
            During this process, I began the transition away from a reliance on{" "}
            <strong>third-party services and plugins</strong>. I successfully
            migrated many of our tools to{" "}
            <strong>more scalable and cost-effective solutions</strong>,
            reducing the overall complexity and improving the website&apos;s
            performance. By eliminating unnecessary plugins, I was able to{" "}
            <strong>
              cut the website&apos;s operational costs by more than half
            </strong>
            , all while improving the site&apos;s functionality and user
            experience.
          </p>

          <p>
            This role allowed me to take ownership of significant improvements
            to the Moby website, aligning its design and technical
            infrastructure with the company&apos;s long-term goals for growth
            and efficiency.
          </p>
        </>
      ),
      preview:
        "First professional role focusing on web technologies and improving digital presence.",
    },
    location: "Calgary, AB",
    points: [
      {
        content:
          "Consolidated website data into a centralized database, streamlining updates across 30+ locations.",
      },
      {
        content:
          "Collaborated with a marketing agency to fully redesign the Moby website, improving both its design, functionality and SEO.",
      },
      {
        content:
          "Reduced website costs by over 50% through plugin optimization and custom development, improving speed and enhancing the overall user experience.",
      },
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
      content: (
        <>
          <p>
            As an IT Technician at Computer Upgrading Specialists, I primarily
            worked at <strong>Alberta Health Services hospitals</strong>, where
            I gained comprehensive exposure to{" "}
            <strong>hardware and software systems</strong>. In this role, I was
            responsible for diagnosing and resolving various software issues,
            both remotely and in person, assisting with IT tickets to ensure
            timely resolution. I developed a strong foundation in{" "}
            <strong>troubleshooting and problem-solving</strong>, learning to
            efficiently address a range of technical challenges in high-pressure
            environments.
          </p>

          <p>
            I also managed inventory and handled provisioning tasks, ensuring
            all hardware and software was properly accounted for and maintained.
            This experience taught me the importance of{" "}
            <strong>clear communication</strong> when explaining complex
            technical concepts to clients, which proved invaluable in my
            transition to software development. The hands-on experience working
            directly with systems helped me build a solid understanding of
            practical IT that would later inform my approach to software
            development.
          </p>
        </>
      ),
      preview:
        "Technical support role building foundational knowledge in hardware and software systems.",
    },
    location: "Calgary, AB",
    points: [
      {
        content:
          "Diagnosed and resolved software issues both remotely and on-site, supporting Alberta Health Services hospitals with IT ticket management.",
      },
      {
        content:
          "Provisioned hardware and managed inventory, ensuring accurate tracking and availability of necessary equipment.",
      },
      {
        content:
          "Developed strong troubleshooting skills and learned the importance of clear communication when interacting with clients and addressing technical issues.",
      },
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
