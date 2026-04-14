import { Container } from "../../components/container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { MainTemplete } from "../../templates/MainTempletes";

export function Home(){
    return(
        <MainTemplete>
            <Container>
                <CountDown/>
            </Container>

            <Container>
                <MainForm/>
            </Container>
        </MainTemplete>
    );
}