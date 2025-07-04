import styled from 'styled-components'

import { Props } from '.'

export const P = styled.p<Props>`
  font-size: 14px;
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corPrincipal
      : props.theme.corSecundaria};
  line-heigth: 22px;
`
