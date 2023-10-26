import * as i from '../resources/devicons'
import '../css/skills.css'
import RevealAnimation from './RevealAnimation'


export default function Skills() {
    const skills = {
        'Bootstrap': i.bootstrapIcon,
        'C': i.cIcon,
        'CSS': i.cssIcon,
        'Docker': i.dockerIcon,
        'Django': i.djangoIcon,
        'FastAPI': i.fastapiIcon,
        'Git': i.gitIcon,
        'HTML': i.htmlIcon,
        'Java': i.javaIcon,
        'Javascript': i.jsIcon,
        'Python': i.pythonIcon,
        'PostgreSQL': i.postgresIcon,
        'Redux': i.reduxIcon,
        'React': i.reactIcon,
    }
    const length = Object.entries(skills).length

    return (
        <div className='skills-container'>
            <div
                className='carousel'
                style={{ '--l': length }}
            >
                {Object.entries(skills).map(([key, value], index) => {
                    return (
                        <span
                            key={index}
                            style={{
                            '--i': index,
                            '--l': length
                            }}
                        >
                            <RevealAnimation>
                                <div>
                                    {key}
                                </div>
                                {value}
                            </RevealAnimation>
                        </span>
                    )
                })}
            </div>
        </div>
    )
}
