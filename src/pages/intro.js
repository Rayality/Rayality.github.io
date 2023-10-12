import '../css/intro.css'
import Statement from '../components/Statement'
import { useEffect, useState} from 'react'
import Skills from "../components/Skills"
import head from '../resources/headshot.png'
import { Contact } from '../components/Contact'
import Projects from '../components/Projects'
import IntroAnimation from '../components/IntroAnimation'
import { motion } from 'framer-motion'


export default function Intro() {
    const [finishedAnimation, setFinishedAnimation] = useState(false)
    useEffect(() => {

    },[])
    const fade = {
        hidden: {
            opacity:0
        },
        show: {
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    }
    return (
        <div className="front-page">
        {finishedAnimation ?
                <motion.div
                    variants={fade}
                    initial='hidden'
                    animate='show'
                >
                <section className="top-section">
                    <div className="pic-container">
                        <div className="profilepic-overlay"/>
                        <img className="profilepic" src={head} alt="profile pic"/>
                    </div>
                    <div className='statement'>
                        <Statement text="Welcome! My name is Charles. Be sure to check out the 'Experiments' page for games and small creations/animations."/>
                    </div>
                </section>
                <section className="projects">
                    <div className="projects-bg" />
                    <Projects />
                </section>
                <section className="skills-section" >
                    <h2 className="skills-text" style={{fontWeight:'500'}}>Tech that I use regularly for my projects</h2>
                    <Skills/>
                </section>
                <section className='contact-section'>
                    <Contact/>
                    <div className="contact-bg"/>
                </section>
            </motion.div>
                :
            <IntroAnimation setFinished={setFinishedAnimation} text="Welcome" />}
        </div>
    )
}
