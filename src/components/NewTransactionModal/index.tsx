import { X } from 'phosphor-react'
import type { FormEvent } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import * as S from './styles'

export const NewTransactionModal = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <Dialog.Portal>
      <S.Overlay />

      <S.Content>
        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>

        <Dialog.Title>Nova transação</Dialog.Title>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <button type="submit">Cadastrar</button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
