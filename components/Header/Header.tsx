import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from './Header.module.scss'

export default function Header() {
  const router = useRouter();
  const rota = router.asPath
  return (
    <>
    <header className={styles.header}>
        <img src='/logo.svg' alt='logo'></img>
        <nav className={styles.navsdektop}>
            <div className={styles.line}></div>
            <ul>
                <Link href='/home' className={styles.link} style={rota == '/home' ? {borderBottom: '1px solid white'} : {}}>
                  <li><span className={styles.number}>00</span> <span className={styles.name}>HOME</span></li>
                </Link>
                <Link href='/destination/moon' className={styles.link} style={rota.match('/destination') ? {borderBottom: '1px solid white'} : {}}>
                  <li><span className={styles.number}>01</span> <span className={styles.name}>DESTINATION</span></li>
                </Link>
                <Link href='/crew' className={styles.link} style={rota == '/crew' ? {borderBottom: '1px solid white'} : {}}>
                  <li><span className={styles.number}>02</span> <span className={styles.name}>CREW</span></li>
                </Link>
                <Link href='/technology' className={styles.link} style={rota == '/technology' ? {borderBottom: '1px solid white'} : {}}>
                  <li><span className={styles.number}>03</span> <span className={styles.name}>TECHNOLOGY</span></li>
                </Link>
            </ul>
        </nav>
    </header>
    </>
  )
}
