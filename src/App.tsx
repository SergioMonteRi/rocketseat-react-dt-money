import { ThemeProvider } from 'styled-components'

import { Transactions } from '@/pages'

import { TransactionsProvider } from '@/contexts'

import { defaultTheme, GlobalStyle } from '@/styles'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
