import { createGlobalStyle } from "styled-components";

import InterstateRegular from "./InterstateRegular.ttf";

export default createGlobalStyle`
@font-face {
    font-family: Interstate;
    src: url(${InterstateRegular});
}`;
