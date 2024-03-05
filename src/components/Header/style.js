import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: white;
  border-radius: 0px 30px 0px 0px;
  box-shadow: 0px 5px 15px rgb(15 36 84 / 5%);

  > h1{
    font-size: 20px;
    font-weight: 600;
  }

  > .btnSearch{
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    padding: 10px 10px;
    border-radius: 10px;
    gap: 10px;
    min-width: 300px;

    > input{
      border: none;
      background-color:  transparent;
      width: 100%;

      &:focus{
        outline: 0;
      }
    }
  }

  > div{
    display: flex;
    align-items: center;

    > .containerNotification{
      padding: 6px;
      background-color: #f5f5f5;
      border-radius: 10px;
      margin-right: 20px;

      &:hover{
        cursor: pointer;
      }
    }

    .containerUser{
      display: flex;
      align-items: center;
      gap: 10px;

      .userInfo{
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .userName{
          font-size: 15px;
          font-weight: 600;
        }

        .userSituation{
          font-size: 12px;
        }
      }

      > img{
        width: 40px;
        border-radius: 50%;
      }
    }
  }

`