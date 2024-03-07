import styled from "styled-components"

export function DashboardContainer({children}){
  return(
    <DashContainer>
      {children}
    </DashContainer>
  )
}

const DashContainer = styled.main`
  padding: 0px 35px;
  background-color: #d9d9d9;
  display: flex;
  height: 100vh;
`