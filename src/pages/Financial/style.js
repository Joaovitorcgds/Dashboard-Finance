import styled from "styled-components";

export const FinancialContainer = styled.main`
  padding: 30px 40px;
  height: 100%;
  border-radius: 0px 0px 30px 0px;
  background-color: white;

  > h1{
    font-size: 25px;
    margin: 25px 0px;
  }
  
  > .formContainer{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 25  px;
  
    > .inputFinancial{
      padding: 15px 10px;
      border-radius: 15px;
      border: none;
      background-color: #f5f5f5;
    }

    > .btnSubmit{
      align-self: flex-end;
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

  
`