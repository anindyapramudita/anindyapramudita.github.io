import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  --work-wrapper-padding: 20px 0;
  --work-wrapper-display: flex;
  --work-wrapper-flex-direction: column;
  --work-wrapper-gap: 36px;
  --work-wrapper-height: calc(100% - 60px);

  --tab-wrapper-display: none;

  --card-wrapper-display: flex;
  --card-wrapper-flex-direction: column;
  --card-wrapper-gap: 4rem;
  --card-wrapper-height: 100%;

  --desktop-card-wrapper-display: none;
  --desktop-card-wrapper-height: 100%;

  --mobile-card-wrapper-display: none;

  padding: var(--work-wrapper-padding);
  display: var(--work-wrapper-display);
  flex-direction: var(--work-wrapper-flex-direction);
  gap: var(--work-wrapper-gap);
  height: var(--work-wrapper-height);

  .tab-wrapper {
    display: var(--tab-wrapper-display);
  }

  .card-wrapper {
    .mobile-card-wrapper {
      display: var(--card-wrapper-display);
      flex-direction: var(--card-wrapper-flex-direction);
      gap: var(--card-wrapper-gap);
      height: var(--card-wrapper-height);
    }

    .desktop-card-wrapper {
      display: var(--desktop-card-wrapper-display);
      height: var(--desktop-card-wrapper-height);
    }
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    .tab-wrapper {
      --tab-wrapper-display: block;
    }

    .card-wrapper {
      height: var(--card-wrapper-height);

      .mobile-card-wrapper {
        display: var(--mobile-card-wrapper-display);
      }
      .desktop-card-wrapper {
        --desktop-card-wrapper-display: block;
      }
    }
  }
`;
