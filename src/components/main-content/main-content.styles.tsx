import styled from "styled-components";

export const StylesWrapper = styled.div`
  --height-with-footer: calc(
    100vh - var(--navbar-height) - var(--footer-height) - 18px -
      (2 * var(--page-padding))
  );
  --content-height: 100%;

  height: var(--content-height);
  min-height: var(--height-with-footer);
`;
