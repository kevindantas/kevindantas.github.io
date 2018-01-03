import { css } from 'emotion';

export const flex = css`
  display: flex;
`;

export const flexCenter = css`
  ${flex};
  justify-content: center;
  align-items: center;
`;

export const fullScreenCenter = css`
  ${flexCenter};
  min-height: 100vh;
  min-width: 100vw;
`;

export const flexColumn = css`
  ${flex};
  flex-direction: column;
`;
