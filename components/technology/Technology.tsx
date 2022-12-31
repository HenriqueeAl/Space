import { useState } from 'react'
import styles from './technology.module.scss'

export default function Technologycontent() {

    const [name, setName] = useState('LAUNCH VEHICLE');
    const [desc, setDesc] = useState("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!");
    const [img, setImg] = useState('techone.png')
    const [imgmobile, setImgmobile] = useState('techonemobile.png')

    const one = ()=>{
        setName('LAUNCH VEHICLE')
        setDesc("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!")
        setImg('techone.png')
        setImgmobile('techonemobile.png')
    }

    const two = ()=>{
        setName('SPACEPORT')
        setDesc("A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.")
        setImg('techtwo.png')
        setImgmobile('techtwoemobile.png')
    }

    const three = ()=>{
        setName('SPACE CAPSULE')
        setDesc("A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.")
        setImg('techthree.png')
        setImgmobile('techthreemobile.png')
    }

  return (
    <>
    <main className={styles.main}>
        <section className={styles.content}>
            <div className={styles.textspace}>
                <span className={styles.number}>03</span>
                <span className='text'>SPACE LAUNCH 101</span>
            </div>
            <div className={styles.textdesktop}>
                <nav>
                    <ul>
                        <li style={img == 'techone.png' ? {backgroundColor:'white', color: '#0B0D17'} : {}} onClick={()=>{one()}}>1</li>
                        <li style={img == 'techtwo.png' ? {backgroundColor:'white', color: '#0B0D17'} : {}} onClick={()=>{two()}}>2</li>
                        <li style={img == 'techthree.png' ? {backgroundColor:'white', color: '#0B0D17'} : {}} onClick={()=>{three()}}>3</li>
                    </ul>
                </nav>
                <div className={styles.text}>
                    <h3>THE TERMINOLOGY…</h3>
                    <h2>{name}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        </section>
        <section className={styles.image}>
            <img src={img} className={styles.desktopimg}></img>
            <img src={imgmobile} className={styles.mobileimg}></img>
            <div className={styles.textmobile}>
                <nav>
                    <ul>
                        <li style={img == 'techone.png' ? {backgroundColor:'white', color: '#0B0D17'} : {}} onClick={()=>{one()}}>1</li>
                        <li style={img == 'techtwo.png' ? {backgroundColor:'white', color: '#0B0D17'} : {}} onClick={()=>{two()}}>2</li>
                        <li style={img == 'techthree.png' ? {backgroundColor:'white', color: '#0B0D17'} : {}} onClick={()=>{three()}}>3</li>
                    </ul>
                </nav>
                <div className={styles.text}>
                    <h3>THE TERMINOLOGY…</h3>
                    <h2>{name}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        </section>
    </main>
    </>
  )
}
