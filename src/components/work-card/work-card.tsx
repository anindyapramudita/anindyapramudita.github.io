import { FC } from "react";
import { IWorkCardProps } from "./work-card.interface";
import { StylesWrapper } from "./work-card.styles";
import Image from "next/image";
import { Chip } from "../chip";

export const WorkCard: FC<IWorkCardProps> = ({
  image,
  link,
  position,
  company,
  date,
  additionalInfo,
  info,
  tags,
}) => {
  return (
    <StylesWrapper>
      <div className="content-container">
        {image && (
          <div
            className="work-image-container"
            onClick={() => window.open(link, "_blank")}
          >
            <div className="image-container">
              <Image
                src={image}
                alt="image-alt"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        )}
        <div className="work-content">
          <div className="work-header">
            <h3 className="work-headline">
              {position} • {company}
            </h3>
            <p className="work-subheadline">{date}</p>
          </div>
          <p className="work-description">{info}</p>
          {additionalInfo && (
            <p className="additional-info">{additionalInfo}</p>
          )}
          <div className="chip-container">
            {tags?.length > 0 &&
              tags.map((tag, id) => <Chip key={`${tag}-${id}`} label={tag} />)}
          </div>
        </div>
      </div>
    </StylesWrapper>
  );
};
