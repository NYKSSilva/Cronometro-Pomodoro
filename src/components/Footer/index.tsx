import { Copyright } from 'lucide-react'
import styles from './styles.module.css'

export function Footer(){
    return(
        <>
        <footer className={styles.footer}>
            <a href="https://napratica.org.br/noticias/pomodoro">Entenda como funciona a tecnica pomodoro</a>
            <a href="">Conometro Pomodoro <Copyright/>{new Date().getFullYear()}- feito com amor💕</a>
        </footer>
        </>
    )
}