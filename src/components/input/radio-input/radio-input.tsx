import { FC } from "react";
import { StylesWrapper } from "./radio-input.styles";
import { IRadioInputProps } from "./radio-input.interface";

export const RadioInput: FC<IRadioInputProps> = ({
  id,
  isChecked,
  label,
  value,
  className,
  ...props
}) => {
  return (
    <StylesWrapper>
      <input
        {...props}
        type="radio"
        id={id}
        value={value}
        className={"radio-input"}
        data-testid="radiobutton"
        checked={isChecked}
      />
      <label htmlFor={id} className="radio-label">
        <div className="circle" />
        {label}
      </label>
    </StylesWrapper>
  );
};
