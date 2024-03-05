import { HeaderContainer } from "./style.js"
import { Bell,  MagnifyingGlass } from "@phosphor-icons/react"
import avatar from "../../assets/avatar.jpg"

export function Header(){
  return(
    <HeaderContainer>
      <h1>Painel Administrativo</h1>
      <div className="btnSearch">
        <MagnifyingGlass size={20} />
        <input type="text" placeholder="Pesquisar" />
      </div>
      <div>
        <div className="containerNotification">
          <Bell className="notification" size={20} weight="fill" />
        </div>
        <div className="containerUser">
          <div className="userInfo">
            <span className="userName">Administrador</span>
            <span className="userSituation">Admin</span>
          </div>
          <img src={avatar} alt="Foto do Usuario" />
        </div>
      </div>
    </HeaderContainer>
  )
}