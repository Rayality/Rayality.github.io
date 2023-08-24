import Tree from "../components/Tree"
// import Digital from '../components/Digital'
import '../css/intro.css'
import Statement from '../components/Statement'
import { useEffect } from 'react'
import Skills from "../components/Skills"
import head from '../resources/headshot.png'

export default function Intro() {




    useEffect(() => {

    },[])



    return (
        <div className="front-page">
            <section className="top-section">
                <h4 className="construction">Currently in Development. Some features may not be optimized for your device.</h4>
                <div className="pic-container">
                    <div className="profilepic-overlay"/>
                    <img className="profilepic" src={head} alt="profile pic"/>
                </div>
                <Statement />
            </section>
            <section className="skills-section" >
                <div className="skills-section-bg"/>
                <p>Tech that I use regularly for my projects</p>
                <Skills/>
            </section>
            <section className="projects">

            </section>
        </div>
    )
}
