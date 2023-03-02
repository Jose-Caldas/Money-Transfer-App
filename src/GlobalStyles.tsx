import { createGlobalStyle } from "styled-components";
import "antd/dist/antd.css";

export const GlobaStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

h1,
h2,
h3{
    margin:0;
}

*{
    button,input{
    outline:none;
    background-color:none;
    border:none;
}
}





:root{

 --title:#1F2933;
 --subTitle:#616E7C;

 --white: #fbfcff;

 --pink100:#F364A2;;
 --pink200:#E8368F;
 --pink300:#fff6f9;

 --gray: #45475d;
 --gray100: #616E7C;
 --gray200: #F5F7FA;
 --gray300: #FFF6F9;
 --gray400:#E4E7EB;

 --blue100:#8f83d1;

 --darksvg: #1f2933;
    
}

body{
    background-color: ${(props) => props.theme.bg};
   
  
    h1{
        color: var(---title)
    }
}
    button{
        background-color: orangered;
        color: var(---white);

        
    }
    
    
  

    strong{
        color: var(--title)
    }

`;
