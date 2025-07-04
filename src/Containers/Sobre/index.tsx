import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './style'

const Sobre = () => (
  <>
    <section>
      <Title fontSize="18px">Sobre mim</Title>
      <Paragrafo tipo="principal">
        Lorem iParagrafosum dolor sit amet consectetur adipisicing elit.
        Quisquam, ipsam! Quas esse, soluta asperiores illo doloribus excepturi
        quibusdam dolorum officiis cumque sequi nobis ab, alias aut? Maiores
        perspiciatis omnis numquam?
      </Paragrafo>
    </section>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=eduardoSouzaDEv&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=eduardoSouzaDEv&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </>
)

export default Sobre
