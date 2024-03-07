import styled from "styled-components";

export const LoginPage = styled.main`

  .asideImage{
    background-color: black;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 30px 0px 0px 30px;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
    > h1{
      color: white;
      font-size: 45px;
      > span{
        color: #f9a821;
      }
    }

    > img{
      width: 100px;
    }
  }

  .asideLogin{
    background-color: white;
    width: 50%;
    border-radius: 0px 30px 30px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;

    >h1{
      font-size: 28px;
    }

    > .formContainer{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 25px 0px;
    width: 100%;
  
    > .inputFinancial{
      padding: 15px 10px;
      border-radius: 15px;
      border: none;
      background-color: #f5f5f5;
      margin: 0 20px;
    }

    >span{
      text-align: center;
    }

    > .btnSubmit{
      align-self: center;
      padding: 12px 75px;
      border-radius: 10px;
      background-color: #1352f1;
      color: white;
      border: none;

      &:hover{
        cursor: pointer;
        
      }

    }
  }
  }

`
