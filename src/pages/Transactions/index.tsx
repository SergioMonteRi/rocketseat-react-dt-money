import { Header, SearchForm, Summary } from '@/components'

import { useTransactionsContext } from '@/contexts'

import { formatter } from '@/utils'

import * as S from './styles'

export const Transactions = () => {
  const { transactions } = useTransactionsContext()

  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionsContainer>
        <SearchForm />
        <S.TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">
                  <span>{transaction.description}</span>
                </td>
                <td>
                  <S.PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {formatter.formatCurrency(transaction.price)}
                  </S.PriceHighlight>
                </td>
                <td>
                  <span>{transaction.category}</span>
                </td>
                <td>
                  <span>{formatter.formatDate(transaction.createdAt)}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>
    </div>
  )
}
