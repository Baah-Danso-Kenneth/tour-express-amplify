import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './utils/styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import theme from './utils/styles/theme'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <App />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
