import { Container } from "../../components/container" ;
import { Footer } from "../../components/Footer";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";
import type React from "react"

  type MainTemplateProps = {children:React.ReactNode}

export function MainTemplete ({children}: MainTemplateProps){
    return(
       <>
    <Container>
        <Logo/>
    </Container>
    <Container>
        <Menu/>
    </Container>
    {children}
    <Container>
        <Footer/>
    </Container>
       </>
    )

}