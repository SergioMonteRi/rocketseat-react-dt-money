import { ThemeProvider } from 'styled-components'

import { defaultTheme, GlobalStyle } from '@/styles'

import { Transactions } from '@/pages'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Transactions />
    </ThemeProvider>
  )
}
