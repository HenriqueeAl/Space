import { useState } from 'react'
import styles from './crew.module.scss'

export default function Crewcontent() {

    const [prof, setProf] = useState('Commander');
    const [name, setName] = useState('Douglas Hurley');
    const [desc, setDesc] = useState('Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.');
    const [img, setImg] = useState('commander.png');

    const commander = ()=> {
        setProf('Commander')
        setName('Douglas Hurley')
        setDesc('Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ')
        setImg('commander.png')
    }

    const mission = ()=> {
        setProf('Mission Specialist')
        setName('MARK SHUTTLEWORTH')
        setDesc('Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.')
        setImg('mission.png')
    }

    const pilot = ()=> {
        setProf('Pilot')
        setName('Victor Glover')
        setDesc('Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.')
        setImg('pilot.png')
    }

    const flight = ()=> {
        setProf('Flight Engineer')
        setName('Anousheh Ansari')
        setDesc('Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.')
        setImg('flight.png')
    }

    return (
        <main className={styles.content}>
            <section>
                <div className={styles.textmeet}>
                    <span className={styles.number}>02</span>
                    <span className='text'>MEET YOUR CREW</span>
                </div>
                <div className={styles.textdesktop}>
                    <h3>{prof}</h3>
                    <h2>{name}</h2>
                    <p>
                        {desc}
                    </p>
                    <nav>
                        <ul>
                            <li style={prof == 'Commander' ? {opacity: '1'}: {}} onClick={()=> commander()}></li>
                            <li style={prof == 'Mission Specialist' ? {opacity: '1'}: {}} onClick={()=> mission()}></li>
                            <li style={prof == 'Pilot' ? {opacity: '1'}: {}} onClick={()=> pilot()}></li>
                            <li style={prof == 'Flight Engineer' ? {opacity: '1'}: {}} onClick={()=> flight()}></li>
                        </ul>
                    </nav>
                </div>
            </section>
            <section className={styles.image}>
                <img src={img} alt='pessoa'></img>
            </section>
        </main>
    )
}
