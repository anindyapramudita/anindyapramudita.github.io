import styled from "styled-components";

export const StylesWrapper = styled.div`
  --color1: 189, 177, 233;
  --color2: 232, 182, 115;
  --circle-size: 80%;
  --blending: hard-light;

  --background-z-index: -999;
  --background-width: 100vw;
  --background-height: 100vh;
  --background-position: absolute;
  --background-overflow: hidden;

  --background-top: 0;
  --background-left: 0;

  --background-cirlce-filter: url(#goo) blur(40px);
  --background-cirlce-width: 100%;
  --background-cirlce-height: 100%;

  --svg-display: none;

  --circle-opacity: 1;
  --circle-position: absolute;

  z-index: var(--background-z-index);
  width: var(--background-width);
  height: var(--background-height);
  position: var(--background-position);
  overflow: var(--background-overflow);

  top: var(--background-top);
  left: var(--background-left);

  svg {
    display: var(--svg-display);
  }

  @keyframes moveInCircle {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes moveVertical {
    0% {
      transform: translateY(-50%);
    }
    50% {
      transform: translateY(50%);
    }
    100% {
      transform: translateY(-50%);
    }
  }

  @keyframes moveHorizontal {
    0% {
      transform: translateX(-50%) translateY(-10%);
    }
    50% {
      transform: translateX(50%) translateY(10%);
    }
    100% {
      transform: translateX(-50%) translateY(-10%);
    }
  }

  .gradient-container {
    filter: var(--background-cirlce-filter);
    width: var(--background-cirlce-width);
    height: var(--background-cirlce-height);

    .g1,
    .g2,
    .g3,
    .g4,
    .g5 {
      opacity: var(--circle-opacity);
      position: var(--circle-position);
      mix-blend-mode: var(--blending);
      width: var(--circle-size);
      height: var(--circle-size);
    }

    .g1,
    .g2 {
      top: calc(50% - var(--circle-size) / 2);
      left: calc(50% - var(--circle-size) / 2);
    }

    .g1 {
      background: radial-gradient(
          circle at center,
          rgba(var(--color1), 0.8) 0,
          rgba(var(--color1), 0) 50%
        )
        no-repeat;

      transform-origin: center center;
      animation: moveVertical 30s ease infinite;
    }

    .g2 {
      background: radial-gradient(
          circle at center,
          rgba(var(--color2), 0.8) 0,
          rgba(var(--color2), 0) 50%
        )
        no-repeat;

      transform-origin: calc(50% - 400px);
      animation: moveInCircle 20s reverse infinite;
    }

    .g3 {
      background: radial-gradient(
          circle at center,
          rgba(var(--color1), 0.8) 0,
          rgba(var(--color1), 0) 50%
        )
        no-repeat;
      top: calc(50% - var(--circle-size) / 2 + 200px);
      left: calc(50% - var(--circle-size) / 2 - 500px);

      transform-origin: calc(50% + 400px);
      animation: moveInCircle 40s linear infinite;
    }

    .g4 {
      background: radial-gradient(
          circle at center,
          rgba(var(--color2), 0.8) 0,
          rgba(var(--color2), 0) 50%
        )
        no-repeat;
      top: calc(50% - var(--circle-size) / 2);
      left: calc(50% - var(--circle-size) / 2);

      transform-origin: calc(50% - 200px);
      animation: moveHorizontal 40s ease infinite;
    }

    .g5 {
      background: radial-gradient(
          circle at center,
          rgba(var(--color1), 0.8) 0,
          rgba(var(--color1), 0) 50%
        )
        no-repeat;

      width: calc(var(--circle-size) * 2);
      height: calc(var(--circle-size) * 2);
      top: calc(50% - var(--circle-size));
      left: calc(50% - var(--circle-size));

      transform-origin: calc(50% - 800px) calc(50% + 200px);
      animation: moveInCircle 20s ease infinite;
    }

    .interactive {
      position: absolute;
      background: radial-gradient(
          circle at center,
          rgba(var(--color1), 0.8) 0,
          rgba(var(--color1), 0) 50%
        )
        no-repeat;
      mix-blend-mode: var(--blending);

      width: 100%;
      height: 100%;
      top: -50%;
      left: -50%;

      opacity: 0.7;
    }
  }
`;
