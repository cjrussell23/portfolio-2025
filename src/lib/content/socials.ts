
import { IconGithub, IconLinkedIn, IconMail, IconPhone, IconWeb, ReactPDFIcon } from "@/components/icons/ResumeIcons";
import { IconType } from "react-icons";
import { CiMail, CiPhone } from "react-icons/ci";
import { IoDocument, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export type Social = {
  href: string;
  website?: {
    title: string;
    icon: IconType;
  }
  resume?: {
    title: string;
    icon: ReactPDFIcon;
  }
};

export const socials: Social[] = [
  {
    href: "https://github.com/cjrussell23",
    resume: {
      title: "cjrussell23",
      icon: IconGithub,
    },
    website: {
      title: "GitHub",
      icon: IoLogoGithub,
    }

  },
  {
    href: "https://linkedin.com/in/chjrussell",
    resume: {
      title: "chjrussell",
      icon: IconLinkedIn,
    },
    website: {
      title: "LinkedIn",
      icon: IoLogoLinkedin,
    }
  },
  {
    href: "mailto:chjrussell@gmail.com",
    website: {
      title: "Email",
      icon: CiMail,
    },
    resume: {
      title: "chjrussell@gmail.com",
      icon: IconMail,
    }
  },
  {
    href: "tel:12047705065",
    website: {
      title: "Call",
      icon: CiPhone,
    },
    resume: {
      title: "(204) 770-5065",
      icon: IconPhone,
    }
  },
  {
    href: "https://chjrussell.com",
    resume: {
      title: "chjrussell.com",
      icon: IconWeb,
    }
  },
  {
    href: "/resume",
    website: {
      title: "Resume",
      icon: IoDocument,
    }
  }
];