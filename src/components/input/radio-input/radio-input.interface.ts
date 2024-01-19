import { InputHTMLAttributes } from "react";

export interface IRadioInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isChecked: boolean;
}
