import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --color-red: hsl(14, 86%, 42%);
    --color-green: hsl(159, 69%, 38%);
    
    --color-red-50: hsl(20, 50%, 98%);
    --color-rose-100: hsl(13, 31%, 94%);
  --color-red-300: hsl(14, 25%, 72%);
  --color-red-400: hsl(7, 20%, 60%);
  --color-red-500: hsl(12, 20%, 44%);
  --color-red-900: hsl(14, 65%, 9%);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
}

main{
    padding: 100px;
    font-family: "Red Hat Text";
    background-color: var(--color-rose-100)

}
`;

export default GlobalStyles;
