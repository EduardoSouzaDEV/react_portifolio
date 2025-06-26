import Avatar from '../../Components/Avatar'
import Paragrafo from '../../Components/Paragrafo'
import Title from '../../Components/Title'

import { BotaoTema, Descricao, SidebarContainer } from './style'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize="20px">Eduardo Souza</Title>
      <Paragrafo fontSize="16px" tipo="normal">
        EduardoSouza
      </Paragrafo>
      <Descricao tipo="principal" fontSize="12px">
        Desenvolvedor Front-End
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
