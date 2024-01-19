import { FC } from "react";
import { ITabProps } from "./tab.interface";
import { StylesWrapper } from "./tab.styles";
import { RadioInput } from "../input";

export const Tab: FC<ITabProps> = ({ currentTab, onTabClick, tabOptions }) => {
  return (
    <StylesWrapper>
      <p className="year-text">2024</p>
      <div className="timeline-wrapper">
        {tabOptions?.length > 0 &&
          tabOptions.map((tab) => (
            <RadioInput
              key={`${tab.title}-${tab.id}`}
              label={tab.title}
              isChecked={currentTab === tab.id}
              id={`${tab.title}-input`}
              value={tab.id}
              onChange={() => onTabClick(tab.id)}
            />
          ))}
      </div>
      <p className="year-text">2017</p>
    </StylesWrapper>
  );
};
