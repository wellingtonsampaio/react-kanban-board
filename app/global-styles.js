import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
      width: 100%;
      height: 100%;
  }

  body {
      font-family: "Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
   }

`;
