import styles from './styles.module.css';
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, MoonIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
type AvalibleThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvalibleThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvalibleThemes || 'dark');
    return storageTheme;
  });

  const nextThemeIcon={
    dark: <SunIcon/>,
    light: <MoonIcon/>
  }

function handleThemeChange(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
  event.preventDefault();
  setTheme(prevTheme => {
    const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
    return nextTheme;
  });

}
useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}, [theme]);
return (
  <>
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a className={styles.menuLink} href="#"
        arial-label="Ver Historico"
        title='Ver historico'>
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href="#"
        arial-label="Acessar menu"
        title='Acessar menu'>
        <HouseIcon />
      </a>
      <a className={styles.menuLink} href="#"
        arial-label="Acessar configuracoes"
        title='Acessar configurações'>
        <SettingsIcon />
      </a>
      <a className={styles.menuLink} href="#"
        arial-label="Mudar tema"
        title='Mudar tema'
        onClick={handleThemeChange}>
        {nextThemeIcon[theme]}
      </a>
    </nav>
  </>
)
}