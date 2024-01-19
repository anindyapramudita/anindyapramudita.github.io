import { HEADER_TITLE, SUBTITLE } from "./contact.constant";
import { platformInfo } from "./contact.interface";
import { StylesWrapper } from "./contact.styles";
import { FC, useMemo } from "react";

export const Contact: FC = () => {
  const renderPlatformInfo = useMemo(() => {
    return platformInfo.map((platform) => {
      return (
        <li
          key={`${platform.platform}-${platform.id}`}
          className="platform-list"
        >
          <a
            className="platform-link"
            href={platform.href}
            onClick={platform.onClick}
          >
            {platform.icon}
          </a>
        </li>
      );
    });
  }, []);

  return (
    <StylesWrapper>
      <h1 className="welcome-header">{HEADER_TITLE}</h1>
      <p className="welcome-subtitle">{SUBTITLE}</p>
      <div className="platforms-wrapper">
        <ul className="platform-list-group">{renderPlatformInfo}</ul>
      </div>
    </StylesWrapper>
  );
};
