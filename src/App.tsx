import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Sidebar from './containers/Sidebar'
import Projetos from './containers/Projetos'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './reset'
// import TemaLight from './themes/light'
import TemaDark from './themes/dark'
import temaLight from './themes/light'

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [usandoTemaDark, setUsandoTemaDark] = useState(false)

  function TrocaTema() {
    setUsandoTemaDark(!usandoTemaDark)
  }

  return (
    <ThemeProvider theme={usandoTemaDark ? TemaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar TrocaTema={TrocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
