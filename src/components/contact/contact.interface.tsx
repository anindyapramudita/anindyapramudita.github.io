import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const platformInfo = [
  {
    id: 1,
    platform: "Github",
    icon: <FaGithub size={45} />,
    href: "#_blank",
    link: "https://github.com/anindyapramudita",
    onClick: () => window.open("https://github.com/anindyapramudita", "_blank"),
  },
  {
    id: 2,
    platform: "LinkedIn",
    icon: <FaLinkedin size={45} />,
    href: "#_blank",
    link: "https://www.linkedin.com/in/anindyapramudita/",
    onClick: () =>
      window.open("https://www.linkedin.com/in/anindyapramudita/", "_blank"),
  },
  {
    id: 3,
    platform: "Email",
    icon: <IoMdMail size={45} />,
    href: "mailto:anindyapramudita2111@gmail.com",
    link: "",
    onClick: () => null,
  },
  {
    id: 4,
    platform: "WhatsApp",
    icon: <FaWhatsapp size={45} />,
    href: "#_blank",
    link: "https://wa.me/34605861177?text=Hi!%20I%20would%20like%20to%20connect%20to",
    onClick: () =>
      window.open(
        "https://wa.me/34605861177?text=Hi!%20I%20would%20like%20to%20connect%20to",
        "_blank"
      ),
  },
];
