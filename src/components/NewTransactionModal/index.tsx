import * as Dialog from '@radix-ui/react-dialog'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import { useTransactionsContext } from '@/contexts'

import { newTransactionModalSchema } from './schema'

import * as S from './styles'

import type { NewTransactionModalInputs } from './types'

export const NewTransactionModal = () => {
  const { createTransaction } = useTransactionsContext()

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionModalInputs>({
    resolver: zodResolver(newTransactionModalSchema),
  })

  const handleCreateTransaction = async (data: NewTransactionModalInputs) => {
    await createTransaction(data)

    reset()
  }

  return (
    <Dialog.Portal>
      <S.Overlay />

      <S.Content>
        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>

        <Dialog.Title>Nova transação</Dialog.Title>

        <form onSubmit={handleSubmit(handleCreateTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <S.TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <S.TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </S.TransactionTypeButton>

                  <S.TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </S.TransactionTypeButton>
                </S.TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
