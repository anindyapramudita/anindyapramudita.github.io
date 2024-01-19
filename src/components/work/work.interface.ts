import { StaticImageData } from "next/image";

export interface IWorkProps {}

export type CurrentWorkContent = {
  populix: WorkContent;
  yoyo: WorkContent;
};

export type WorkContent = {
  company: string;
  position: string;
  date: string;
  image: StaticImageData;
  info: string[];
  tag: string[];
};

export type TabOption = {
  id: number;
  title: string;
};
