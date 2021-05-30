import * as S from './styles'

const Main = ({title = 'Won Games', description = 'TypeScript, ReactJS, NextJS e StyledComponents'}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Imagem de um átomo e react avançado ao lado." />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="/img/hero-illustration.svg" alt="Um desenvolvedor de frente para uma tela com código." />
  </S.Wrapper>
)

export default Main
