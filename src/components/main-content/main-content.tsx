import { FC } from "react";
import { StylesWrapper } from "./main-content.styles";
import { IMainContentProps } from ".";
import { WelcomeText } from "../welcome-text";
import { portfolioContent } from "./main-content.interface";

export const MainContent: FC<IMainContentProps> = ({ activeLink }) => {
  if (activeLink) {
    return (
      <StylesWrapper>
        {portfolioContent.find((content) => content.id == activeLink)?.element}
      </StylesWrapper>
    );
  } else {
    return (
      <StylesWrapper>
        <WelcomeText />
      </StylesWrapper>
    );
  }
};
