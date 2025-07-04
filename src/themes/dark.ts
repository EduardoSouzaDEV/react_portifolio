import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    corPrincipal: string
    corSecundaria: string
    corDeFundo: string
    corFundoBotao: string
    corDaBorda: string
  }
}

const temaLight = {
  corPrincipal: '#fff',
  corSecundaria: '#949494',
  corDeFundo: '#282a35',
  corFundoBotao: '#4476bf',
  corDaBorda: '#c1c1c1'
}

export default temaLight
