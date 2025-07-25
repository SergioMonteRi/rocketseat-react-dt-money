import * as Dialog from '@radix-ui/react-dialog'

import { NewTransactionModal } from '../NewTransactionModal'

import * as S from './styles'

import logo from '@/assets/logo.svg'

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={logo} alt="logo" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
