import styled, { keyframes } from "styled-components";

const slideDownAnimation = keyframes`
  from {
    transform: translateY(-15px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const StylesWrapper = styled.div`
  --tab-wrapper-position: relative;
  --tab-wrapper-width: 100%;
  --tab-wrapper-display: flex;
  --tab-wrapper-align-items: center;
  --tab-wrapper-justify-content: center;
  --tab-wrapper-height: 60px;
  --tab-wrapper-animation: ${slideDownAnimation} 0.5s ease-in-out;

  --year-text-padding: 0 10px;

  --timeline-wrapper-position: relative;
  --timeline-wrapper-flex-grow: 1;
  --timeline-wrapper-height: 1px;
  --timeline-wrapper-background-color: var(--black);
  --timeline-wrapper-margin: 0 10px;
  --timeline-wrapper-display: flex;
  --timeline-wrapper-align-items: center;
  --timeline-wrapper-justify-content: space-around;

  position: var(--tab-wrapper-position);
  width: var(--tab-wrapper-width);
  display: var(--tab-wrapper-display);
  align-items: var(--tab-wrapper-align-items);
  justify-content: var(--tab-wrapper-justify-content);
  height: var(--tab-wrapper-height);
  animation: var(--tab-wrapper-animation);

  .year-text {
    padding: var(--year-text-padding);
  }

  .timeline-wrapper {
    position: var(--timeline-wrapper-position);
    flex-grow: var(--timeline-wrapper-flex-grow);
    height: var(--timeline-wrapper-height);
    background-color: var(--timeline-wrapper-background-color);
    margin: var(--timeline-wrapper-margin);
    display: var(--timeline-wrapper-display);
    align-items: var(--timeline-wrapper-align-items);
    justify-content: var(--timeline-wrapper-justify-content);
  }
`;
