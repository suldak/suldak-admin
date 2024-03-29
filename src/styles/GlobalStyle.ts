import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import InterFont from '@assets/fonts/Inter-VariableFont_slnt,wght.ttf';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
        font-family: 'Inter';
        font-style: normal;
        src: url(${InterFont}) format('truetype');
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
  .scroll::-webkit-scrollbar {
    display: none;
  }

  .scroll {
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }

  body {
    font-family: "Inter", "Arial", sans-serif;
    line-height: 1.5; 

    background-color: ${(props) => props.theme.bgColor};


    /* 반응형 폰트 사이즈 */
    @media (max-width: 1440px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }

  }

  h1 {
    font-size: 1.75rem;
  }

  h2, p {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  li, ul, ol{
    list-style: none;
  }
`;

export default GlobalStyle;
