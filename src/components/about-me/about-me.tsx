import { FC } from "react";
import {
  CustomMask,
  ImageContainer,
  MaskedImage,
  StylesWrapper,
} from "./about-me.styles";
import { renderToStaticMarkup } from "react-dom/server";
import image from "../../../public/about-me-orange.jpeg";

import {
  ABOUT_ME_CONTENT_1,
  ABOUT_ME_CONTENT_2,
  ABOUT_ME_CONTENT_3,
  ABOUT_ME_HEADLINE,
  ABOUT_ME_SUBTITLE,
} from "./about-me.constants";

export const AboutMe: FC = () => {
  return (
    <StylesWrapper>
      <h2 className="headline">{ABOUT_ME_HEADLINE}</h2>
      <div className="content-container">
        <ImageContainer>
          <MaskedImage
            src={image}
            alt="Masked Image"
            width={300}
            height={300}
            maskImage={`data:image/svg+xml;utf8,${encodeURIComponent(
              renderToStaticMarkup(<CustomMask />)
            )}`}
          />
        </ImageContainer>
        <div className="text-container">
          <h4 className="subtitle">{ABOUT_ME_SUBTITLE}</h4>
          <p className="about-me-text">{ABOUT_ME_CONTENT_1}</p>
          <p className="about-me-text">{ABOUT_ME_CONTENT_2}</p>
          <p className="about-me-text">{ABOUT_ME_CONTENT_3} </p>
        </div>
      </div>
    </StylesWrapper>
  );
};
