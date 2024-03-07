import styled from "styled-components";

export const FinancialContainer = styled.section`
  padding: 20px 40px 0px 40px;
  height: 100vh;
  border-radius: 0px 0px 30px 0px;
  background-color: white;

  > h1{
    font-size: 25px;
    margin-bottom: 25px;
  }
  
  > .formContainer{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 25px;
  
    > .inputFinancial{
      padding: 10px 10px;
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