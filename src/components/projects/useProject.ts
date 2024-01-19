import { useState } from "react";
import CactiImage from "../../../public/cacti-cover.jpg";
import LifeServeImage from "../../../public/lifeserve-cover.jpeg";
import LenteImage from "../../../public/lente-cover.jpg";
import { TabOption } from "./projects.interface";

const useProjects = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const projectInfo = [
    {
      id: 1,
      project: "Cacti",
      category: "Plant Information Service",
      tab: "Cacti",
      date: "March 2023 - Present",
      image: CactiImage,
      link: "https://github.com/anindyapramudita/cacti-plant-website",
      info: "A website to discover and care for home plants, a gateway to a world of botanical wonders. Built with an intuitive filtering system, enabling seamless identification of plants based on their care difficulty, water requirements, blooming seasons, and other relevant factors.",
      tags: [
        "React",
        "Next.js",
        "TypeScript",
        "styled-component",
        "CMS",
        "MongoDB",
      ],
    },
    {
      id: 2,
      project: "LifeServe",
      category: "Online Pharmacy",
      tab: "LifeServe",
      date: "June 2022 - August 2023",
      image: LifeServeImage,
      link: "https://drive.google.com/file/d/1RyabUdS5jISeLzGtdxiYs928fvYdmogR/view?usp=drive_link",
      info: "E-commerce website where user can buy generic medicine as well as upload prescription to get their prescribed medicine from the doctor as well as the dashboard for the administrator to track orders and see the sales and stock history report",
      tags: ["React", "JavaScript", "Redux", "Node", "MySQL"],
    },
    {
      id: 3,
      project: "Lente",
      category: "Social Networking Service",
      tab: "Lente",
      date: "March 2022 - April 2022",
      image: LenteImage,
      link: "https://drive.google.com/file/d/1ehi-69hMiVlwvH4Bu8l5q8uZmkda1YWT/view?usp=drive_link",
      info: "Social media application where user can upload their pictures online, create caption as well comment and share other people’s posts.",
      tags: ["React", "JavaScript", "Redux", "Node", "MySQL"],
    },
  ];

  const tabOptions: TabOption[] = [
    {
      id: 0,
      title: "Cacti",
    },
    {
      id: 1,
      title: "LifeServe",
    },
    {
      id: 2,
      title: "Lente",
    },
  ];

  return { currentTab, setCurrentTab, tabOptions, projectInfo };
};

export default useProjects;
