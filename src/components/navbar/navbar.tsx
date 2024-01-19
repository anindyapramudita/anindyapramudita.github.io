import { FC } from "react";
import { INavbarProps } from "./navbar.interface";
import { StylesWrapper } from "./navbar.styles";
import useNavbar from "./useNavbar";

export const Navbar: FC<INavbarProps> = ({
  activeLink,
  onLinkClick,
  NavbarLinks,
}) => {
  const { highlighterPosition, fadeIn, highlighterRef } = useNavbar(
    activeLink,
    onLinkClick
  );

  return (
    <StylesWrapper highlight={highlighterPosition} fade={fadeIn}>
      {NavbarLinks.map((text, index) => (
        <a
          key={`${text}-${index}`}
          href={`#${text}`}
          onClick={() => onLinkClick(index)}
          className={
            index === activeLink ? "active navbar-list" : "navbar-list"
          }
        >
          {text}
        </a>
      ))}
      <div ref={highlighterRef} className="navbar-highlighter" />
    </StylesWrapper>
  );
};
