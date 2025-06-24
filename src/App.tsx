import Sidebar from './Containers/Sidebar'
import Projetos from './Containers/Projetos'
import Sobre from './Containers/Sobre'
import EstiloGlobal, { Container } from './reset'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
