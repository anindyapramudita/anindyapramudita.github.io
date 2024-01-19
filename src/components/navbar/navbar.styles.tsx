import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div<{
  highlight?: { left: number; width: number };
  fade?: number;
}>`
  --navbar-display: flex;
  --navbar-justify-content: center;
  --navbar-align-items: center;
  --navbar-gap: 1.5rem;
  --navbar-position: relative;

  --navbar-list-text-decoration: none;
  --navbar-list-color: var(--primary);
  --navbar-list-font-size: 0.875rem;

  --navbar-highlighter-width: ${(prop) =>
    prop.highlight?.width ? prop.highlight?.width : 0}px;
  --navbar-highlighter-left: ${(prop) =>
    prop.highlight?.left ? prop.highlight?.left : 0}px;
  --navbar-highlighter-height: 2.5rem;
  --navbar-highlighter-border-radius: 20px;
  --navbar-highlighter-background-color: white;
  --navbar-highlighter-opacity: ${(prop) => prop.fade && prop.fade};
  --navbar-highlighter-position: absolute;
  --navbar-highlighter-transition: all ease-out 0.3s;
  --navbar-highlighter-z-index: -1;

  height: var(--navbar-height);
  display: var(--navbar-display);
  justify-content: var(--navbar-justify-content);
  align-items: var(--navbar-align-items);
  gap: var(--navbar-gap);
  position: var(--navbar-position);
  transition: transform 0.3s ease-in-out;

  .navbar-list {
    text-decoration: var(--navbar-list-text-decoration);
    color: var(--navbar-list-color);
    font-size: var(--navbar-list-font-size);
  }

  .navbar-highlighter {
    width: var(--navbar-highlighter-width);
    left: var(--navbar-highlighter-left);
    height: var(--navbar-highlighter-height);
    border-radius: var(--navbar-highlighter-border-radius);
    background-color: var(--navbar-highlighter-background-color);
    opacity: var(--navbar-highlighter-opacity);
    position: var(--navbar-highlighter-position);
    transition: var(--navbar-highlighter-transition);
    z-index: var(--navbar-highlighter-z-index);
  }

  @media (min-width: ${gridBreakpoint.md}) {
    --navbar-gap: 3rem;
    --navbar-list-font-size: 1rem;
  }
`;
