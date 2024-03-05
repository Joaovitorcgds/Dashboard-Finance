import styled from "styled-components"

export const AsideContainer = styled.aside`
 display: flex;
 flex-direction: column;
 gap: 15px;
 width: 250px;
 height: 100vh;
 padding: 40px 15px;
 background-color: black;
 color: white;
 border-radius: 30px 0px 0px 30px;

 > div{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  margin: 40px 0 30px;

  > h1{
    font-size: 18px;
  }
  
  > img{
    width: 30px;
  }
 }

 > span{
  color: #afafaf;
  padding-left: 11px;
  font-size: 12px;
 }

 > nav{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  > a{
   padding: 15px 40px;
   border-radius: 10px;
   display: inline-block;
   width: auto;
   text-decoration: none;
   color: #afafaf;
   transition: all ease-in-out .5s;

   &:hover{
    background-color: white;
    color: black
   }
  }
 }
`