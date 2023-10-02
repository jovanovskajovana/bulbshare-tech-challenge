import { Container } from '../styles/Layout'
import { Headline } from '../styles/Typography'
import { HomeStyled } from '../styles/pages/HomeStyled'

const Home = () => (
  <HomeStyled>
    <Container column mobileColumn alignItems="center">
      <Headline>Hello there</Headline>
    </Container>
  </HomeStyled>
)

export default Home
