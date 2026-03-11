import './styles/global.css'
import './styles/theme.css'
import { Heading } from './components/Heading';
import { Container } from './components/container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import {Formulario} from './components/Formulario'
export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
       <Formulario/>
      </Container>

      <Container>
        <Heading>Logo</Heading>
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  )
}















//o return nesse tipo de programação necessia de uma div "vazia" ("<> </>") para fazer todo o html dentro dela