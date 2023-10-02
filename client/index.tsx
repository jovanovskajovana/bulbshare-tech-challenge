import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { theme } from './constants/theme'

import Home from './pages/Home'

import GlobalStyles from './styles/GlobalStyles'
import Fonts from './styles/Fonts'
import { Main } from './styles/Layout'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <>
    <GlobalStyles />
    <Fonts />
    <ThemeProvider theme={theme}>
      <Main>
        <Home />
      </Main>
    </ThemeProvider>
  </>,
)
