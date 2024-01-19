import { useState } from "react";
import PopulixImage from "../../../public/populix-cover.jpg";
import YoyoImage from "../../../public/yoyo-cover.jpeg";
import PurwadhikaImage from "../../../public/purwadhika-cover.jpeg";
import { TabOption } from "./work.interface";

const useWork = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const workInfo = [
    {
      id: 1,
      company: "Populix",
      position: "Frontend Engineer I",
      tab: "Populix",
      date: "November 2023 - Present",
      image: PopulixImage,
      link: "https://apps.apple.com/id/app/populix/id1509148327?l=id",
      info: "Engage in the ongoing development, maintenance, and collaborative enhancement of key functionalities within Populix's dashboard website and mobile application, involving close coordination with both the product and design teams to ensure continuous improvement and optimal user experience.",
      tags: [
        "React",
        "React Native",
        "Redux",
        "JavaScript",
        "TypeScript",
        "Jest",
      ],
    },
    {
      id: 2,
      company: "Yoyo Technology",
      position: "Frontend Developer",
      tab: "Yoyo Technology",
      date: "November 2022 - July 2023",
      image: YoyoImage,
      link: "https://play.google.com/store/apps/details?id=com.bakulio.app&hl=en&gl=US",
      info: "Developed and maintained frontend components and user interfaces for Yoyo Technology's E-Commerce initiative, Bakulio, spanning across the admin dashboard and mobile application. Collaborated extensively with product and UI/UX teams to integrate new features, optimize existing functionalities, and maintain strict adherence to design standards, thus ensuring the delivery of high-quality, integrated solutions.",
      tags: [
        "React",
        "React Native",
        "Redux",
        "JavaScript",
        "TypeScript",
        "Jest",
        "jQuery",
        "GraphQL",
      ],
    },
    {
      id: 3,
      company: "Purwadhika",
      position: "Full Stack Web Development Student",
      tab: "Bootcamp",
      date: "February 2022 - September 2022",
      image: PurwadhikaImage,
      link: "https://purwadhika.com/en",
      info: "Six months (150+ hours) of intensive and immersive training in variety of modern programming languages and technologies that are needed to become a full stack web developer.",
      additionalInfo: "Final grade: 87.25 / 100",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux",
        "Node",
        "MySQL",
        "Express",
      ],
    },
  ];

  const tabOptions: TabOption[] = [
    {
      id: 0,
      title: "Populix",
    },
    {
      id: 1,
      title: "Yoyo Tech",
    },
    {
      id: 2,
      title: "Bootcamp",
    },
  ];

  return { currentTab, setCurrentTab, tabOptions, workInfo };
};

export default useWork;
