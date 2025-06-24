import { ThemeProvider } from 'styled-components'

import { defaultTheme, GlobalStyle } from '@/styles'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <h1>Hello World</h1>
    </ThemeProvider>
  )
}
