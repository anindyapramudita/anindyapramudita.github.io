import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  --chip-wrapper-background-color: var(--secondary);
  --chip-wrapper-display: inline-block;
  --chip-wrapper-border-radius: 20px;
  --chip-wrapper-padding: 8px 15px;

  --chip-label-font-size: 0.75rem;
  --chip-label-margin: 0;
  --chip-label-white-space: nowrap;
  --chip-label-color: var(--white);

  background-color: var(--chip-wrapper-background-color);
  display: var(--chip-wrapper-display);
  border-radius: var(--chip-wrapper-border-radius);
  padding: var(--chip-wrapper-padding);

  .chip-label {
    font-size: var(--chip-label-font-size);
    margin: var(--chip-label-margin);
    white-space: var(--chip-label-white-space);
    color: var(--chip-label-color);
  }

  @media (min-width: ${gridBreakpoint.md}) {
    .chip-label {
      --chip-label-font-size: 0.825rem;
    }
  }
`;
