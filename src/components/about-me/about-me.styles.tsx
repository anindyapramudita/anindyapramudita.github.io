import { gridBreakpoint } from "@/shared/breakpoints";
import Image from "next/image";
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
  --wrapper-animation: ${slideDownAnimation} 0.5s ease-in-out;
  --wrapper-height: calc(100% - 18px);
  --wrapper-height: max-content;
  --wrapper-display: flex;
  --wrapper-flex-direction: column;
  --wrapper-align-items: center;
  --wrapper-padding: 18px;
  --wrapper-overflow: scroll;
  --wrapper-justify-content: center;

  --headline-color: var(--primary);
  --headline-font-size: 2.5rem;
  --headline-margin-top: 10px;
  --headline-margin-bottom: 10px;
  --headline-text-align: center;

  --content-container-color: var(--primary);
  --content-container-display: flex;
  --content-container-flex-direction: column;
  --content-container-align-items: center;
  --content-flex-direction: row;

  --text-container-flex: 1;
  --subtitle-font-size: 1rem;
  --content-text-margin-top: 10px;
  --content-text-font-size: 0.875rem;

  animation: var(--wrapper-animation);
  height: var(--wrapper-height);
  height: var(--wrapper-height);
  display: var(--wrapper-display);
  flex-direction: var(--wrapper-flex-direction);
  align-items: var(--wrapper-align-items);
  padding: var(--wrapper-padding);
  overflow: var(--wrapper-overflow);

  .headline {
    color: var(--headline-color);
    font-size: var(--headline-font-size);
    margin-top: var(--headline-margin-top);
    margin-bottom: var(--headline-margin-bottom);
    text-align: var(--headline-text-align);
  }

  .content-container {
    color: var(--content-container-color);
    display: var(--content-container-display);
    flex-direction: var(--content-container-flex-direction);
    align-items: var(--content-container-align-items);

    .text-container {
      flex: var(--text-container-flex);

      .subtitle {
        font-size: var(--subtitle-font-size);
      }

      .about-me-text {
        margin-top: var(--content-text-margin-top);
        font-size: var(--content-text-font-size);
      }
    }
  }

  @media (min-width: ${gridBreakpoint.md}) {
    .headline {
      --headline-font-size: 4.5rem;
      --headline-margin-top: 30px;
      --headline-margin-bottom: 30px;
    }
    .content-container {
      gap: 32px;

      .subtitle {
        --subtitle-font-size: 1.25rem;
      }
      .about-me-text {
        --content-text-margin-top: 20px;
      }
    }
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    justify-content: var(--wrapper-justify-content);
    --wrapper-padding: 0;
    --wrapper-overflow: hidden;
    --wrapper-height: calc(100% - (2 * 18px));

    .headline {
      --headline-margin-top: 0;
    }

    .content-container {
      flex-direction: var(--content-flex-direction);
    }
  }
`;

export const ImageContainer = styled.div`
  --container-width: 175px;
  --container-height: 175px;
  --container-position: relative;
  --container-overflow: hidden;
  --container-flex-shrink: 0;

  width: var(--container-width);
  height: var(--container-height);
  position: var(--container-position);
  overflow: var(--container-overflow);
  flex-shrink: var(--container-flex-shrink);

  @media (min-width: ${gridBreakpoint.md}) {
    --container-width: 300px;
    --container-height: 300px;
  }
`;

export const MaskedImage = styled(Image)<{ maskImage: any }>`
  --image-object-fit: cover;
  --image-object-position: center;
  --image-width: 100%;
  --image-height: 100%;

  mask: url(${(props) => props.maskImage}) center/contain no-repeat;
  object-fit: var(--image-object-fit);
  object-position: var(--image-object-position);
  width: var(--image-width);
  height: var(--image-height);
`;

export const CustomMask = () => (
  <svg
    width="500"
    height="505"
    viewBox="0 0 500 505"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M258.835 13.951C307.287 19.0197 356.516 19.12 398.097 44.4693C442.107 71.2994 482.869 109.106 496.411 158.788C509.694 207.519 482.851 255.477 468.841 304.005C454.227 354.622 451.147 411.358 412.988 447.734C372.406 486.419 314.669 509.705 258.835 504.198C205.024 498.89 166.793 454.015 125.326 419.361C87.031 387.359 48.1298 356.34 27.5405 310.912C5.09451 261.387 -7.4719 206.409 4.80671 153.45C17.7564 97.5958 46.318 40.559 96.6267 12.9322C145.194 -13.7382 203.71 8.18434 258.835 13.951Z"
      fill="white"
    />
  </svg>
);
