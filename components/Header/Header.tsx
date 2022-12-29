import styles from './Header.module.scss'

export default function Header() {
  return (
    <>
    <header className={styles.header}>
        <img src='logo.svg'></img>
        <nav className={styles.navsdektop}>
            <div className={styles.line}></div>
            <ul>
                <li><span className={styles.number}>00</span> <span className={styles.name}>HOME</span></li>
                <li><span className={styles.number}>01</span> <span className={styles.name}>DESTINATION</span></li>
                <li><span className={styles.number}>02</span> <span className={styles.name}>CREW</span></li>
                <li><span className={styles.number}>03</span> <span className={styles.name}>TECHNOLOGY</span></li>
            </ul>
        </nav>
    </header>
    </>
  )
}
