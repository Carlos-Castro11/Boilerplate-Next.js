import * as S from './styles'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/icons/logo.svg"
        alt="imagem de um átomo e React Avançado escrito ao lado"
      />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        Typescript, ReactJS, NextJS e Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero.svg"
        alt="Pessoa sentada em frente a um computador com codigo na tela"
      />
    </S.Wrapper>
  )
}

export default Main
