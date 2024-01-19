import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div<{ isFooterShown?: boolean }>`
  --height-with-footer: calc(
    100vh - var(--navbar-height) - var(--footer-height) - 18px -
      (2 * var(--page-padding))
  );
  --page-margin: 0 auto;

  --content-height: 100vh;
  --content-overflow-y: scroll;
  --content-scrollbar-width: thin;
  --content-scrollbar-color: transparent transparent;
  --content--ms-overflow-style: none;

  --scrollbar-width: 0;
  --scrollbar-display: none;

  max-width: var(--page-max-width);
  padding: var(--page-padding);
  margin: var(--page-margin);

  .page-content {
    height: var(--content-height);
    overflow-y: var(--content-overflow-y);
    scrollbar-width: var(--content-scrollbar-width);
    scrollbar-color: var(--content-scrollbar-color);
    -ms-overflow-style: var(--content--ms-overflow-style);

    &::-webkit-scrollbar {
      width: var(--scrollbar-width);
    }

    &::-webkit-scrollbar-thumb {
      display: var(--scrollbar-display);
    }
  }

  .main-content {
    min-height: var(--height-with-footer);
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    .main-content {
      height: var(--height-with-footer);
    }
  }
`;
