import { AboutMe } from "../about-me";
import { Contact } from "../contact";
import { Projects } from "../projects";
import { WelcomeText } from "../welcome-text";
import { Work } from "../work";

export interface IMainContentProps {
  activeLink: number;
  isNavbarShown?: boolean;
}

export const portfolioContent = [
  {
    id: 0,
    name: "Hello",
    element: <WelcomeText />,
  },
  {
    id: 1,
    name: "About",
    element: <AboutMe />,
  },
  {
    id: 2,
    name: "Work",
    element: <Work />,
  },
  {
    id: 3,
    name: "Projects",
    element: <Projects />,
  },
  {
    id: 4,
    name: "Notes",
    element: <Contact />,
  },
];
