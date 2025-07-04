import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'

import { BotaoTema, Descricao, SidebarContainer } from './style'

type Props = {
  TrocaTema?: () => void
}

const Sidebar = (props: Props) => (
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
      <BotaoTema onClick={props.TrocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
