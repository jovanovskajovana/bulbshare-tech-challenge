import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import Footer from './components/Footer'

import { theme } from './constants/theme'

import Home from './pages/Home'

import GlobalStyles from './styles/GlobalStyles'
import Fonts from './styles/Fonts'
import { Main } from './styles/Layout'
import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <>
    <GlobalStyles />
    <Fonts />
    <ThemeProvider theme={theme}>
      <Main>
        <Header />
        <Home />
        <Footer />
      </Main>
    </ThemeProvider>
  </>,
)
