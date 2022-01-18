import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    font-family: "myfont";
  }
  /* 위에 font-family를 적용해주면서 페이지 전체에 동일 폰트가 적용됨 --> 이전까지는 각 태그(input, button, body를 따로 적용했었음)  */
  @font-face {
    font-family: "myfont";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/SangSangRockOTF.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;
