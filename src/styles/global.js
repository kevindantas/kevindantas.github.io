import { injectGlobal } from 'emotion';

injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #002745;
    color: #fff;
    font-family: 'effra', 'Helvetica', sans-serif;
  }
`;
