import { css } from "styled-components";

export const theme = {
  orange: "#f50",
  deepOrange: "#fc361d",
  black: "#111",
  chacoal: "#333", //  굵은 글씨
  white: "#fff",
  gray: "#999", // 글씨에 들어가는 gray
  lightGrayA: "rgb(242,242,242)",
  lightGrayB: "rgb(226,226,226)",
  HeaderLine: "rgb(194,194,194)"
};
// const Colors = styled.Text`
//   $orange: #f50;
//   $deep-orange: #fc361d;
//   $black: #111;
//   $chacoal: #333;
//   $gray: #999;
//   $l-gray: #ccc;
//   $l-gray: #e5e5e5;
// `;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-content: center;
`;
