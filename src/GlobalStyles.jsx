import { createGlobalStyle } from "styled-components";
// import "antd/dist/antd.css";

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

.App{
  display:flex;
  width:90%;
  max-width:1440px;
  max-height: 1024px;
  background: #fff;
  padding: 3rem 2rem 0 2rem;
  margin:0 auto;
  flex:1 1 0;
 

  
}

/* ==================================responsive============================ */

@media(max-width:1024px){
.App{
  display:flex;
  flex-direction:column;
  max-width:1440px;
  max-height: 1024px;
  background: #fff;
  padding: 3rem 1rem 0 1rem;
  margin:0 auto;
 
}
}

.refresh{
  display: flex;
    align-items: flex-end;
    padding-bottom:50px;
  color:var(--pink200);
  font-size:30px;
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
