import { X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

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

          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title>Nova transação</Dialog.Title>
              <Dialog.Close asChild>
                <button type="button">
                  <X size={24} />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
