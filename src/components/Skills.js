import * as i from '../resources/devicons'
import '../css/skills.css'

export default function Skills() {
    const langsAndFrames = [
        "Python",
        "FastAPI",
        "Django",
        "PostgreSQL",
        "JS",
        "React",
        "Redux",
        "Java",
        "CSS",
        "HTML",
        "Git",
        "Docker"
    ]

    return (
        <div className='skill-container'>
            <div className='skill'>
                {i.bootstrapIcon}
            </div>
            <div className='skill'>
                {i.cIcon}
            </div>
            <div className='skill'>
                {i.cssIcon}
            </div>
            <div className='skill'>
                {i.dockerIcon}
            </div>
            <div className='skill'>
                {i.djangoIcon}
            </div>
            <div className='skill'>
                {i.fastapiIcon}
            </div>
            <div className='skill'>
                {i.gitIcon}
            </div>
            <div className='skill'>
                {i.htmlIcon}
            </div>
            <div className='skill'>
                {i.javaIcon}
            </div>
            <div className='skill'>
                {i.jsIcon}
            </div>
            <div className='skill'>
                {i.pythonIcon}
            </div>
            <div className='skill'>
                {i.postgresIcon}
            </div>
            <div className='skill'>
                {i.reduxIcon}
            </div>
            <div className='skill'>
                {i.reactIcon}
            </div>
        </div>
    )
}
