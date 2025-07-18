import type { FormEvent } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

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

          <S.TransactionType>
            <S.TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </S.TransactionTypeButton>

            <S.TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </S.TransactionTypeButton>
          </S.TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
