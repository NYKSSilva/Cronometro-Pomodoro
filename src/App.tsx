import './styles/global.css'
import './styles/theme.css'
import { Heading } from './components/Heading';
import { Container } from './components/container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
// import {Formulario} from './components/Formulario'
import{Cycles} from './components/Cycles'
import { DefaultInput } from './components/DefaultInput';

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

      {/* <Container>
       <Formulario/>
      </Container> */}

      <Container>
        <form className ="form" action="">
          <div>
            <label htmlFor=""></label>
          <input id= "menuInput" type="text" placeholder='Digite algo' />
          </div>
          <div className='formRow'>
            linha verde
          </div>
          <div className='formRow'>
            <Cycles/>
          </div>
          <button>
            enviar
          </button>
        </form>
      </Container>

      <Container>
        <DefaultInput/>
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