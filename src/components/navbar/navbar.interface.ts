import { Dispatch, SetStateAction } from "react";

export interface INavbarProps {
  activeLink: number;
  NavbarLinks: string[];
  onLinkClick: (index: number) => void;
}
