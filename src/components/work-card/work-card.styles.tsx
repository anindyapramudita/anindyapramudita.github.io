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
  --card-animation: ${slideDownAnimation} 0.5s ease-in-out;

  --card-display: flex;
  --card-flex-direction: column;
  --card-gap: 1rem;
  --card-align-items: center;
  --card-justify-content: center;
  --card-height: 100%;

  --content-gap: 2rem;
  --content-width: 100%;
  --content-display: flex;

  --image-container-position: relative;
  --image-container-width: 100%;
  --image-container-height: 200px;
  --image-container-border-radius: 15px;
  --image-container-overflow: hidden;
  --image-container-flex-shrink: 0;
  --image-container-cursor: pointer;
  --image-container-transition: transform 0.3s;

  --image-hover-transform: translateY(-0.625rem);

  --image-position: relative;
  --image-width: 100%;
  --image-height: 0;
  --image-padding-bottom: 75%;

  --work-content-display: flex;
  --work-content-flex-direction: column;
  --work-content-justify-content: center;

  --work-header-margin-top: 0.5rem;
  --work-header-display: flex;
  --work-header-flex-direction: column;
  --work-header-gap: 0.5rem;

  --work-headline-font-size: 1.5rem;
  --work-headline-color: var(--primary);
  --work-headline-margin: 0;

  --work-sub-headline-font-size: 0.825rem;
  --work-sub-headline-font-style: italic;
  --work-sub-headline-margin: 0;
  --work-sub-headline-color: var(--primary);
  --work-sub-headline-opacity: 0.7;

  --work-description-font-size: 0.75rem;
  --work-description-margin: 1rem 0;
  --additional-info-font-size: 0.75rem;
  --additional-info-margin: 0 0 1rem 0;

  --chip-display: flex;
  --chip-gap: 0.5rem;
  --chip-flex-wrap: wrap;

  animation: var(--card-animation);

  .content-container {
    gap: var(--content-gap);
    width: var(--content-width);

    .work-image-container {
      position: var(--image-container-position);
      width: var(--image-container-width);
      height: var(--image-container-height);
      border-radius: var(--image-container-border-radius);
      overflow: var(--image-container-overflow);
      flex-shrink: var(--image-container-flex-shrink);
      cursor: var(--image-container-cursor);
      transition: var(--image-container-transition);

      &:hover {
        transform: var(--image-hover-transform);
      }

      .image-container {
        position: var(--image-position);
        width: var(--image-width);
        height: var(--image-height);
        padding-bottom: var(--image-padding-bottom);
      }
    }

    .work-content {
      display: var(--work-content-display);
      flex-direction: var(--work-content-flex-direction);
      justify-content: var(--work-content-justify-content);

      .work-header {
        margin-top: var(--work-header-margin-top);
        display: var(--work-header-display);
        flex-direction: var(--work-header-flex-direction);
        gap: var(--work-header-gap);

        .work-headline {
          font-size: var(--work-headline-font-size);
          color: var(--work-headline-color);
          margin: var(--work-headline-margin);
        }

        .work-subheadline {
          font-size: var(--work-sub-headline-font-size);
          font-style: var(--work-sub-headline-font-style);
          margin: var(--work-sub-headline-margin);
          color: var(--work-sub-headline-color);
          opacity: var(--work-sub-headline-opacity);
        }
      }

      .work-description {
        font-size: var(--work-description-font-size);
        margin: var(--work-description-margin);
      }
      .additional-info {
        font-size: var(--additional-info-font-size);
        margin: var(--additional-info-margin);
      }
      .chip-container {
        display: var(--chip-display);
        gap: var(--chip-gap);
        flex-wrap: var(--chip-flex-wrap);
      }
    }
  }

  @media (min-width: ${gridBreakpoint.md}) {
    display: var(--card-display);
    flex-direction: var(--card-flex-direction);
    gap: var(--card-gap);
    align-items: var(--card-align-items);
    justify-content: var(--card-justify-content);
    height: var(--card-height);

    .content-container {
      display: var(--content-display);
      --content-gap: 3rem;

      .work-image-container {
        --image-container-width: 400px;
        --image-container-height: 300px;
      }

      .work-content {
        .work-header {
          .work-headline {
            --work-headline-font-size: 2rem;
          }

          .work-subheadline {
            --work-sub-headline-font-size: 1rem;
          }
        }
      }
    }
  }
`;
