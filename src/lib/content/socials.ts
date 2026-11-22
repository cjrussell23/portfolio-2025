import { IconType } from "react-icons";
import { CiMail, CiPhone } from "react-icons/ci";
import { IoDocument, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export type Social = {
  href: string;
  website?: {
    title: string;
    target?: string;
    icon: IconType;
  };
};

export const socials: Social[] = [
  {
    href: "https://github.com/cjrussell23",
    website: {
      title: "GitHub",
      icon: IoLogoGithub,
      target: "_blank",
    },
  },
  {
    href: "https://linkedin.com/in/chjrussell",
    website: {
      title: "LinkedIn",
      icon: IoLogoLinkedin,
      target: "_blank",
    },
  },
  {
    href: "mailto:chjrussell@gmail.com",
    website: {
      title: "Email",
      icon: CiMail,
    },
  },
  {
    href: "tel:12047705065",
    website: {
      title: "Call",
      icon: CiPhone,
    },
  },
  {
    href: "/resume",
    website: {
      title: "Resume",
      icon: IoDocument,
    },
  },
];
