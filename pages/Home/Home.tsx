import Header from '../../components/Header/Header'
import Homecontent from '../../components/Homecontent/Homecontent'
import styles from './Home.module.scss'

export default function Homepage() {
  return (
    <div className={styles.test}>
        <Header></Header>
        <Homecontent></Homecontent>
    </div>
  )
}
