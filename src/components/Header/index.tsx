import * as S from './styles'

import logo from '@/assets/logo.svg'

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={logo} alt="logo" />

        <S.NewTransactionButton type="button">
          Nova transação
        </S.NewTransactionButton>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
