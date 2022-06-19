import React from 'react'
import { Routes } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { Providers } from './contexts/provider'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './styles/themes/lightTheme'
import { GlobalStyle } from './styles/global'

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Providers>
          <Routes />
        </Providers>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
