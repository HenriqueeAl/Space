import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../../components/Header/Header'
import styles from './destinationcontent.module.scss'

export default function Destinationcontent() {
    const router = useRouter();
    const rota: string = router.asPath

    const names = ['MOON', 'MARS', 'EUROPA', 'TITAN']

    const texts = [
        'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
        ]

    const distance = ['384,400 KM','225 MIL. KM','628 MIL. KM','1.6 BIL. KM']

    const travel = ['3 DAYS', '9 MONTHS', '3 YEARS', '7 YEARS']

    let planet: string = '/luabg.png'

    if (rota == '/destination/moon'){
        planet = '/luabg.png'
    }else if(rota == '/destination/mars'){
        planet = '/martebg.png'
    }else if(rota == '/destination/europa'){
        planet = '/europabg.png'
    }else if(rota == '/destination/titan'){
        planet = '/titanbg.png'
    }

    return (
        <main className={styles.content}>
            <section className={styles.left}>
                <div className={styles.textpick}>
                    <span className={styles.numberpick}>00</span>
                    <span>Pick your destination</span>
                </div>
                <img src={planet} alt='planet'></img>
            </section>
            <section className={styles.rigth}>
                <nav>
                    <ul>
                        <Link href='/destination/moon'>
                            <li style={rota == '/destination/moon' ? {borderBottom: '3px solid white'} : {}}>MOON</li>
                        </Link>
                        <Link href='/destination/mars'>
                            <li style={rota == '/destination/mars' ? {borderBottom: '3px solid white', marginLeft: '38px'} : {marginLeft: '38px'}}>MARS</li>
                        </Link>
                        <Link href='/destination/europa'>
                            <li style={rota == '/destination/europa' ? {borderBottom: '3px solid white', marginLeft: '38px'} : {marginLeft: '38px'}}>EUROPA</li>
                        </Link>
                        <Link href='/destination/titan'>
                            <li style={rota == '/destination/titan' ? {borderBottom: '3px solid white', marginLeft: '38px'} : {marginLeft: '38px'}}>TITAN</li>
                        </Link>
                    </ul>
                </nav>
                <h1>
                    {rota == '/destination/moon' ? names[0]: null}
                    {rota == '/destination/mars' ? names[1]: null}
                    {rota == '/destination/europa' ? names[2]: null}
                    {rota == '/destination/titan' ? names[3]: null}
                </h1>
                <p>
                    {rota == '/destination/moon' ? texts[0]: null}
                    {rota == '/destination/mars' ? texts[1]: null}
                    {rota == '/destination/europa' ? texts[2]: null}
                    {rota == '/destination/titan' ? texts[3]: null}
                </p>
                <div className={styles.rigthbotton}>
                    <div className={styles.distance}>
                        <p>AVG. DISTANCE</p>
                        <span>
                            {rota == '/destination/moon' ? distance[0]: null}
                            {rota == '/destination/mars' ? distance[1]: null}
                            {rota == '/destination/europa' ? distance[2]: null}
                            {rota == '/destination/titan' ? distance[3]: null}
                        </span>
                    </div>
                    <div className={styles.traveltime}>
                        <p>EST TRAVEL TIME</p>
                        <span>
                            {rota == '/destination/moon' ? travel[0]: null}
                            {rota == '/destination/mars' ? travel[1]: null}
                            {rota == '/destination/europa' ? travel[2]: null}
                            {rota == '/destination/titan' ? travel[3]: null}
                        </span>
                    </div>
                </div>
            </section>
        </main>
    )
}
