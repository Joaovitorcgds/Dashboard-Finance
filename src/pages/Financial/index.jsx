import styled from "styled-components"
import { FinancialContainer } from "./style"

import { Aside } from "../../components/Aside"
import { Header } from "../../components/Header"
import { DashboardContainer } from "../../components/DashboardContainer"

import { useForm } from "react-hook-form"

export function Financial(){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const inputAll = document.querySelectorAll(".inputFinancial")

    for(let i = 0; i < inputAll.length; i++){
      inputAll[i].value = "";
    }
    console.log(data)
  }

  return (
    <DashboardContainer>
      <Aside/>
      <Main>
        <Header/>
        <FinancialContainer>
          <h1>Financeiro</h1>
          <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
            <input className="inputFinancial" placeholder="Nome do Cliente" {...register("client-name", { required: true })} />
            <input className="inputFinancial" placeholder="Palpite" {...register("guess", { required: true })} />
            <input className="inputFinancial" placeholder="Modalidade" {...register("modality", { required: true })} />
            <input className="inputFinancial" placeholder="NSU" {...register("nsu", { required: true })} />
            <input className="inputFinancial" placeholder="Saldo" {...register("sale", { required: true })} />
            <input className="inputFinancial" placeholder="Prêmios" {...register("awards", { required: true })} />

            {errors.exampleRequired && <span>This field is required</span>}
            <input className="btnSubmit" type="submit" />
          </form>

        </FinancialContainer>
      </Main>
    </DashboardContainer>
  )
}

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`