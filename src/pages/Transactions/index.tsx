import { Header, SearchForm, Summary } from '@/components'

import * as S from './styles'

export const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionsContainer>
        <SearchForm />
        <S.TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">
                <span>Desenvolvimento de site</span>
              </td>
              <td>
                <S.PriceHighlight variant="income">
                  R$ 12.000,00
                </S.PriceHighlight>
              </td>
              <td>
                <span>Venda</span>
              </td>
              <td>
                <span>13/04/2021</span>
              </td>
            </tr>
            <tr>
              <td width="50%">
                <span>Hamburgueria</span>
              </td>
              <td>
                <S.PriceHighlight variant="outcome">R$ 59,00</S.PriceHighlight>
              </td>
              <td>
                <span>Alimentação</span>
              </td>
              <td>
                <span>10/04/2021</span>
              </td>
            </tr>
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>
    </div>
  )
}
