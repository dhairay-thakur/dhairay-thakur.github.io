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
    font-family: 'Poppins', sans-serif;
    font-weight:600;
    cursor: pointer;
    padding:1rem 2rem;
    margin:0rem 2rem 0rem 0rem;
    border:3px solid #B8FB3C;
    border-radius: 10rem;
    background:transparent;
    color:white;
    transition: all 0.5s ease;
    h4{
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        font-weight:normal;
        font-size: 1rem;
    }
    &:hover{
        background-color:#B8FB3C;
        color:#2A2D34;
    }
}
hr{
    height:5;
    width:50%;
    color:#B8FB3C;
    background:#B8FB3C;
    border-color:#B8FB3C;
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
