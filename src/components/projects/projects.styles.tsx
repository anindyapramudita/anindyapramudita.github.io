import { gridBreakpoint } from "@/shared/breakpoints";
import styled from "styled-components";

export const StylesWrapper = styled.div`
  --project-padding: 20px 0;
  --project-display: flex;
  --project-flex-direction: column;
  --project-gap: 36px;
  --project-height: calc(100% - 60px);

  --tab-wapper-display: none;

  --mobile-card-wrapper-display: flex;
  --mobile-card-wrapper-flex-direction: column;
  --mobile-card-wrapper-gap: 4rem;
  --mobile-card-wrapper-height: 100%;

  --desktop-card-wrapper-display: none;
  --desktop-card-wrapper-height: 100%;

  --card-wrapper-height: 100%;

  padding: var(--project-padding);
  display: var(--project-display);
  flex-direction: var(--project-flex-direction);
  gap: var(--project-gap);
  height: var(--project-height);

  .tab-wrapper {
    display: var(--tab-wapper-display);
  }

  .card-wrapper {
    .mobile-card-wrapper {
      display: var(--mobile-card-wrapper-display);
      flex-direction: var(--mobile-card-wrapper-flex-direction);
      gap: var(--mobile-card-wrapper-gap);
      height: var(--mobile-card-wrapper-height);
    }

    .desktop-card-wrapper {
      display: var(--desktop-card-wrapper-display);
      height: var(--desktop-card-wrapper-height);
    }
  }

  @media (min-width: ${gridBreakpoint.lg}) {
    .tab-wrapper {
      --tab-wapper-display: block;
    }

    .card-wrapper {
      height: var(--card-wrapper-height);
      .mobile-card-wrapper {
        --mobile-card-wrapper-display: none;
      }
      .desktop-card-wrapper {
        --desktop-card-wrapper-display: block;
      }
    }
  }
`;
