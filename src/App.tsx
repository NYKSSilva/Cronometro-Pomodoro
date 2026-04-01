import './styles/global.css'
import './styles/theme.css'
import { Heading } from './components/Heading';
import { Container } from './components/container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { Cycles } from './components/Cycles'
import { DefaultInput } from './components/DefaultInput';
import { DefaultButton } from './components/DefaultButton';
import { CirclePlay, CircleStop } from 'lucide-react';
import {Footer} from './components/Footer'
import { useState } from 'react';
import {MainTemplete} from './templates/MainTempletes';

export function App() {
const [numero, setNumero] = useState(0);
  function handleClick(){
    setNumero(prevState => prevState +1);
  }
  return (
    <>
    <Heading>
      <MainTemplete> ola do main Template</MainTemplete>
    </Heading>
    <Heading>
      Número: <span id='numero'>{numero}</span>
    </Heading>
    <button onClick={handleClick}>Aumentar Número</button>
      
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className="form" action="">
          {/* <div>
            <label htmlFor=""></label>
            <input id="menuInput" type="text" placeholder='Digite algo' />
          </div> */}
          <div className="formRow">
            <DefaultInput labelText={`${numero}`} id='menuInput' type='text' placeholder='Digite sua Task' />
          </div>
          <div className='formRow'>
            linha verde
          </div>
          <div className='formRow'>
            <Cycles />
          </div>
         <DefaultButton icon= {<CirclePlay/>}  color = 'green'/> 
         <DefaultButton icon= {<CircleStop/>}  color = 'red'/>
        </form>
      </Container>
      
    </>
  )
}















