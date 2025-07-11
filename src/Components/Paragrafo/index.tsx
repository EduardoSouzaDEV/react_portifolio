import { P } from './style'

export type Props = {
  children: string
  tipo?: 'principal' | 'normal'
  fontSize?: `${number}px` | `${number}rem` | `${number}em`
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
