import Paragrafo from '../Paragrafo'
import Title from '../Title'

import { Card, LinkBotao } from './style'

const Projeto = () => (
  <Card>
    <Title>Projeto lista de tarefas</Title>
    <Paragrafo tipo="normal">Lista de tarefas feitas com vueJs</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
