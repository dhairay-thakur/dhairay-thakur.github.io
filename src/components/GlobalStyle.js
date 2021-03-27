import { createGlobalStyle } from "styled-components";
// alt bg- 0d1821,344966
const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background:#2A2D34;
    font-family: 'Poppins', sans-serif;
}

button{
    font-weight:bold;
    font-size:1.1rem;
    cursor: pointer;
    padding:1rem 2rem;
    border:3px solid #B8FB3C;
    background:transparent;
    color:white;
    transition: all 0.5s ease;
    &:hover{
        background-color:#B8FB3C;
        color:#2A2D34;
    }
}
h1{
    font-weight:bold;
    font-size:4rem;
}
h2{
    font-weight:lighter;
    font-size:4rem;
}
h3{
    color:white;
}
h4{
    font-weight:bold;
}
span{
    font-weight:bold;
    color:#B8FB3C
}
a{
    font-size:1.1.rem;
}
p{
    padding: 2rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height:150%;

}



`;

export default GlobalStyle;
