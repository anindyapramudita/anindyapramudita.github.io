import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  --footer-height: var(--footer-height);
  --footer-display: flex;
  --footer-align-items: center;
  --footer-justify-content: space-between;

  --footer-content-margin: 0;
  --footer-content-padding: 0;
  --footer-content-font-size: 0.875rem;
  --footer-content-display: flex;
  --footer-content-align-items: center;
  --footer-content-list-style-type: none;

  --footer-link-color: var(--primary);
  --footer-link-cursor: pointer;
  --footer-link-text-decoration: none;

  --divider-width: 0.25rem;
  --divider-height: 0.25rem;
  --divider-border-radius: 50%;
  --divider-margin: 0 0.625rem;
  --divider-background-color: var(--primary);

  height: var(--footer-height);
  display: var(--footer-display);
  align-items: var(--footer-align-items);
  justify-content: var(--footer-justify-content);
  padding: 18px;

  .footer-content-group {
    margin: var(--footer-content-margin);
    padding: var(--footer-content-padding);
    font-size: var(--footer-content-font-size);
    display: var(--footer-content-display);
    align-items: var(--footer-content-align-items);
    list-style-type: var(--footer-content-list-style-type);

    .footer-link {
      color: var(--footer-link-color);
      cursor: var(--footer-link-cursor);
      text-decoration: var(--footer-link-text-decoration);

      &:hover {
        --footer-link-text-decoration: underline;
      }
    }

    .break {
      width: var(--divider-width);
      height: var(--divider-height);
      border-radius: var(--divider-border-radius);
      margin: var(--divider-margin);
      background-color: var(--divider-background-color);
    }
  }

  @media (min-width: ${gridBreakpoint.md}) {
    --footer-content-font-size: 1rem;
    display: var(--footer-display);
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    display: var(--footer-display);
  }
`;
