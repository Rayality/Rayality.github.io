import '../css/intro.css'
import Statement from '../components/Statement'
import { useEffect, useRef, useState} from 'react'
import Skills from "../components/Skills"
import head from '../resources/headshot.png'
import { Contact } from '../components/Contact'
import Projects from '../components/Projects'
import IntroAnimation from '../components/IntroAnimation'
import { motion } from 'framer-motion'
import RevealAnimation from '../components/RevealAnimation'
import { useSelector } from 'react-redux/es/hooks/useSelector'


export default function Intro() {
    const completedIntro = useSelector((state) => state.introControl.introState)
    console.log(completedIntro)
    const [finishedAnimation, setFinishedAnimation] = useState(false)

    useEffect(() => {

    }, [])

    const fade = {
        hidden: {
            opacity:0
        },
        show: {
            opacity: 1,
            transition: {
                duration: 2
            }
        }
    }



    return (
        <div className="front-page">
            {completedIntro ?
                <motion.div
                variants={fade}
                initial='hidden'
                animate='show'
                >
                    <section className="top-section">
                        <RevealAnimation name='pic-container'>
                                <div>
                                    <div className="profilepic-overlay"/>
                                    <img className="profilepic" src={head} alt="profile pic"/>
                                </div>
                        </RevealAnimation>
                        <RevealAnimation name='statement'>

                                    <Statement text="Welcome! My name is Charles. Be sure to check out the 'Experiments' page for games and small creations/animations."/>

                        </RevealAnimation>
                    </section>
                <section className="projects">
                        <Projects />
                    <div className="projects-bg" />
                </section>
                <RevealAnimation >
                    <section className="skills-section" >
                        <RevealAnimation>
                            <h2 className="skills-text">Tech that I use regularly for my projects</h2>
                        </RevealAnimation>
                            <Skills/>
                    </section>
                </RevealAnimation>
                <section className='contact-section'>
                    <Contact/>
                    <div className="contact-bg"/>
                </section>
            </motion.div>
           :
                <IntroAnimation text="Welcome" />}
        </div>
    )
}
