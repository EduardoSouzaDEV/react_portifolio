import styled from 'styled-components'

export const GithubSecao = styled.div`
  display: flex; // Coloca os itens lado a lado
  gap: 2px; // Espaço entre as imagens (ajuste como quiser)
  justify-content: center; // Centraliza na horizontal (opcional)
  align-items: center; // Alinha na vertical (opcional)
  padding: 16px;
  img {
    height: 157px;
    width: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column; // em telas pequenas, empilha as imagens
    img {
      width: auto;
      height: 157px;
    }
  }
`
