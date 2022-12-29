import Header from '../../components/Header/Header'
import styles from './Homecontent.module.scss'

export default function Homecontent() {
  return (
    <section className={styles.content}>
        <div className={styles.text}>
            <h3>SO, YOU WANT TO TRAVEL TO</h3>
            <h1>SPACE</h1>
            <p>
                Let’s face it; if you want to go to space, you might as well genuinely go to
                outer space and not hover kind of on the edge of it. Well sit back, and relax
                because we’ll give you a truly out of this world experience!
            </p>
        </div>
        <div className={styles.explore}>
            <p>EXPLORE</p>
        </div>
    </section>
  )
}
