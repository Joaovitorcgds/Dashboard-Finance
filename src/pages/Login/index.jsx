import { LoginPage } from "./styled"
import imgLogo from "../../assets/imgLogo.png"

import { DashboardContainer } from "../../components/DashboardContainer"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

export function Login(){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    window.location.replace("http://localhost:5173/financeiro");
  }


  return(
    <LoginPage>
      <DashboardContainer>
        <div className="asideImage">
          <h1><span>Aladin</span> Loterias</h1>
          <img src={imgLogo} alt="Imagem da Logo" />
        </div>
        <div className="asideLogin">
          <h1>Acessar Painel</h1>
          
          <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
            <input className="inputFinancial" placeholder="Login" autoComplete="off" {...register("email", { required: true })} />
            {errors.email && <span>Campo Obrigatório</span>}
            <input className="inputFinancial" placeholder="Senha" autoComplete="off" type="password" {...register("password", { required: true })} />
            {errors.password && <span>Campo Obrigatório</span>}

            <input className="btnSubmit" value="Entrar" type="submit" />
          </form>

          <span>Não tem login? Para se cadastrar <Link to="/signin">clique aqui</Link></span>
        </div>
      </DashboardContainer>
    </LoginPage>
  )
}