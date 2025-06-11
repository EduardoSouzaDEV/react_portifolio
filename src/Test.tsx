import styled from 'styled-components'

type BotaoProps = {
  principal?: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'red')};
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoAmarelo = styled(Botao)`
  background-color: yellow;
  color: black;
`

function Teste() {
  return (
    <>
      <Botao principal>Click aqui</Botao>
      <Botao>Click aqui</Botao>
      <Botao fontSize="28px" principal>
        Click aqui
      </Botao>
      <BotaoAmarelo>Click aqui</BotaoAmarelo>
    </>
  )
}

export default Teste
