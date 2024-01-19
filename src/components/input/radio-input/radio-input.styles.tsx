import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  --input-margin: 0;
  --input-position: relative;
  --input-left: 50%;
  --input-transform: translateX(-50%);
  --input-opacity: 0;

  --input-label-display: flex;
  --input-label-flex-direction: column;
  --input-label-align-items: center;
  --input-label-text-align: center;
  --input-label-cursor: pointer;
  --input-label-font-size: 0.875rem;

  --input-hover-font-weight: 600;

  --circle-width: 15px;
  --circle-height: 15px;
  --circle-border-radius: 50%;
  --circle-margin: 5px 0;
  --circle-border: 2px solid var(--primary);
  --circle-background-color: var(--primary);

  .radio-input {
    margin: var(--input-margin);
    position: var(--input-position);
    left: var(--input-left);
    transform: var(--input-transform);
    opacity: var(--input-opacity);
  }

  .radio-label {
    display: var(--input-label-display);
    flex-direction: var(--input-label-flex-direction);
    align-items: var(--input-label-align-items);
    text-align: var(--input-label-text-align);
    cursor: var(--input-label-cursor);
    font-size: var(--input-label-font-size);

    .circle {
      width: var(--circle-width);
      height: var(--circle-height);
      border-radius: var(--circle-border-radius);
      margin: var(--circle-margin);
      border: var(--circle-border);
      background-color: var(--circle-background-color);
    }
  }

  .radio-input:checked + .radio-label {
    --input-hover-font-weight: 600;

    .circle {
      --circle-background-color: white;
      --circle-width: 20px;
      --circle-height: 20px;
    }
  }
`;
