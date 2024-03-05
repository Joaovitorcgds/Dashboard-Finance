import { AsideContainer } from "./style.js"
import imgLogo from "../../assets/imgLogo.png"


export function Aside(){
  return(
    <AsideContainer>
      <div>
        <h1>Aladin Loterias</h1>
        <img src={imgLogo} alt="Imagem da Logo" />
      </div>
      <span>GERENCIAMENTO</span>
      <nav>
        <a href="">Transações</a>
        <a href="">Financeiro</a>
      </nav>
    </AsideContainer>
  )
}