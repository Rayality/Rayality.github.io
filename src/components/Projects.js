
import MatchFynder from '../resources/MatchFynderVid.mkv'
import FlapBat from '../resources/flapbat.mkv'
import Project from './ProjectBuilder'
import '../css/projects.css'

export default function Projects() {
    return (
        <div className='projects-wrapper'>
            <h2 style={{textAlign:'center'}}>Projects</h2>
            <Project
                videos={[MatchFynder]}
                title="MatchFynder"
                description="
                    Match Fynder facilitates easy, fun decision-making for busy groups of people.
                    A group of your friends/family match with a nearby restaurant via a Tinder-like interface.
                    When all participants agree on a place everyone is notified and shown details about the match.
                "
                skills={[
                    "React",
                    "Javascript",
                    "PostgreSQL",
                    "Redux",
                    "Python",
                    "FastAPI",
                    "CSS"
                ]}
                link="https://github.com/Rayality/MatchFynder/"
                icon="git"
            />
            <Project
                videos={[FlapBat]}
                title="Flap Bat"
                description="
                My first game built with Unity.
                 It has a 'flappy bird' style of gameplay with increasing difficulty.
                 Features collisions/hitboxes, high score tracking, multiple scenes and object management.
                 All scripts are C#.
                "
                skills={[
                    "Unity",
                    "C#",
                    "Game Development"
                ]}
                link={window.location + "experiments"}
                icon="live"
            />
        </div>
    )
}
