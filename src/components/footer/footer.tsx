import { FC } from "react";
import { StylesWrapper } from "./footer.styles";
import useFooter from "./useFooter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FOOTER_NAME, FOOTER_YEAR } from "./footer.constant";

export const Footer: FC = () => {
  const { linkedInUrl, githubUrl, handleLinkClick } = useFooter();

  return (
    <StylesWrapper>
      <ul className="footer-content-group">
        <li>
          <p>{FOOTER_NAME}</p>
        </li>
        <li>
          <div className="break" />
        </li>
        <li>
          <p>{FOOTER_YEAR}</p>
        </li>
      </ul>
      <ul className="footer-content-group">
        <li>
          <a
            target="_blank"
            onClick={() => handleLinkClick(linkedInUrl)}
            className="footer-link"
          >
            <FaLinkedin size={18} />
          </a>
        </li>
        <li>
          <div className="break" />
        </li>
        <li>
          <a
            target="_blank"
            onClick={() => handleLinkClick(githubUrl)}
            className="footer-link"
          >
            <FaGithub size={18} />
          </a>
        </li>
      </ul>
    </StylesWrapper>
  );
};
