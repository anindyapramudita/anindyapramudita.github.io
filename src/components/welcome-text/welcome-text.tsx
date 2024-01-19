import { FC } from "react";
import {
  HEADER_TITLE,
  SECONDARY_HEADER_TITLE,
  SUBTITLE,
} from "./welcome-text.constant";
import { StylesWrapper } from "./welcome-text.styles";

export const WelcomeText: FC = () => {
  return (
    <StylesWrapper>
      <h1 className="welcome-header">
        {HEADER_TITLE}
        <br />
        {SECONDARY_HEADER_TITLE}
      </h1>
      <p className="welcome-subtitle">{SUBTITLE}</p>
    </StylesWrapper>
  );
};
