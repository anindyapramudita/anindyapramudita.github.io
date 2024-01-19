import { FC } from "react";
import { StylesWrapper } from "./chip.styles";
import { IChipProps } from "./chip.interface";

export const Chip: FC<IChipProps> = ({ label }) => {
  return (
    <StylesWrapper>
      <p className="chip-label">{label}</p>
    </StylesWrapper>
  );
};
