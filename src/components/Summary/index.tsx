import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

import { useTransactionsContext } from '@/contexts'

import { formatter } from '@/utils'

import * as S from './styles'

export const Summary = () => {
  const { transactions } = useTransactionsContext()

  const { totalIncome, totalOutcome, total } = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.totalIncome += transaction.price
      } else {
        acc.totalOutcome += transaction.price
      }

      acc.total = acc.totalIncome - acc.totalOutcome

      return acc
    },
    {
      totalIncome: 0,
      totalOutcome: 0,
      total: 0,
    },
  )

  return (
    <S.SummaryContainer>
      <S.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{formatter.formatCurrency(totalIncome)}</strong>
      </S.SummaryCard>

      <S.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{formatter.formatCurrency(totalOutcome)}</strong>
      </S.SummaryCard>

      <S.SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{formatter.formatCurrency(total)}</strong>
      </S.SummaryCard>
    </S.SummaryContainer>
  )
}
