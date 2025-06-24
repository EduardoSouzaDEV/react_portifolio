import { Title as StyledTitle } from './style'

export type Props = {
  children: string
  fontSize?: `${number}px` | `${number}rem` | `${number}em`
}

const Title = (props: Props) => (
  <StyledTitle fontSize={props.fontSize}>{props.children}</StyledTitle>
)

export default Title
