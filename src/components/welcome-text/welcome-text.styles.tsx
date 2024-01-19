import { gridBreakpoint } from "@/shared/breakpoints";
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
  --wrapper-color: var(--primary);
  --wrapper-display: flex;
  --wrapper-flex-direction: column;
  --wrapper-justify-content: center;
  --wrapper-align-items: center;
  --wrapper-text-align: center;
  --wrapper-height: 100%;
  --height-with-footer: calc(
    100vh - var(--navbar-height) - var(--footer-height) - 18px -
      (2 * var(--page-padding))
  );

  --headline-font-size: 2.5rem;
  --headline-margin: 0;
  --text-animation: ${slideDownAnimation} 0.5s ease-in-out;
  --subtitle-font-size: 1rem;

  color: var(--wrapper-color);
  display: var(--wrapper-display);
  flex-direction: var(--wrapper-flex-direction);
  justify-content: var(--wrapper-justify-content);
  align-items: var(--wrapper-align-items);
  text-align: var(--wrapper-text-align);
  height: var(--wrapper-height);
  min-height: var(--height-with-footer);

  .welcome-header {
    font-size: var(--headline-font-size);
    margin: var(--headline-margin);
    animation: var(--text-animation);
  }

  .welcome-subtitle {
    font-size: var(--subtitle-font-size);
    animation: var(--text-animation);
  }

  @media (min-width: ${gridBreakpoint.md}) {
    --headline-font-size: 4rem;
    --subtitle-font-size: 1.125rem;
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    --headline-font-size: 6rem;
  }
`;
