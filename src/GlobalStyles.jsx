import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --white: #fbfcff;
 
  --blue100:#8f83d1;
  --gray: #45475d;
  --gray100: #e5e5e5
  --gray200: #F5F7FA;
  --gray300: #FFF6F9;
  --gray400:#E4E7EB;
  --pink100:#f364a2;
  --pink200:#E8368F;
  --title:#1F2933;
  --subTitle:#616E7C;
 
}

*{
    margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

@media(max-width:768px){
  .App{
   
   
  }
}


body{
  background-color: #dddd;
  
}

 
.App{
  display:flex;
  background: #fff;
  align-items:center;
 justify-content:center;
 flex-wrap:wrap;
  
}





ul,
li {
  list-style: none;
}
input {
  outline: none;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
  /* background: none; */
 
 
 
}

`;