import { SignInPage } from "./styled"
import imgLogo from "../../assets/imgLogo.png"

import { DashboardContainer } from "../../components/DashboardContainer"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

export function SignIn(){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const inputAll = document.querySelectorAll(".inputFinancial")

    for(let i = 0; i < inputAll.length; i++){
      inputAll[i].value = "";
    }
    console.log(data)
  }


  return(
    <SignInPage>
      <DashboardContainer>
        <div className="asideImage">
          <h1><span>Aladin</span> Loterias</h1>
          <img src={imgLogo} alt="Imagem da Logo" />
        </div>
        <div className="asideLogin">
          <h1>Acessar Painel</h1>
          
          <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
            <input className="inputFinancial" placeholder="Nome" autoComplete="off" {...register("firstName", { required: true })} />
            <input className="inputFinancial" placeholder="Sobrenome" autoComplete="off" {...register("lastName", { required: true })} />
            <input className="inputFinancial" placeholder="Nome de Usuário" autoComplete="off" {...register("username", { required: true })} />
            <input className="inputFinancial" placeholder="Email" autoComplete="off" {...register("email", { required: true })} />
            <input className="inputFinancial" placeholder="Senha" autoComplete="off" type="password" {...register("password", { required: true })} />

            {errors.exampleRequired && <span>This field is required</span>}
            <input className="btnSubmit" value="Cadastrar" type="submit" />
          </form>

          <span>Já tem uma conta? Para fazer Login <Link to="/">clique aqui</Link></span>
        </div>
      </DashboardContainer>
    </SignInPage>
  )
}