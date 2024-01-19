import { StaticImageData } from "next/image";

export interface IWorkCardProps {
  id: number;
  image: StaticImageData;
  link: string;
  position: string;
  company: string;
  date: string;
  additionalInfo?: string;
  tags: string[];
  info: string;
}
