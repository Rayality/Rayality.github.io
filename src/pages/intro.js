import '../css/intro.css'
import Statement from '../components/Statement'
import { useEffect } from 'react'
import Skills from "../components/Skills"
import head from '../resources/headshot.png'
import { Contact } from '../components/Contact'
import Projects from '../components/Projects'

export default function Intro() {
    useEffect(() => {

    },[])

    return (
        <div className="front-page">
            <section className="top-section">
                <div className="pic-container">
                    <div className="profilepic-overlay"/>
                    <img className="profilepic" src={head} alt="profile pic"/>
                </div>
                <Statement />
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
        </div>
    )
}
//
