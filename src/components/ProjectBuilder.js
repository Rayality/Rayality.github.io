import github from '../resources/github.png'
import live from '../resources/play.gif'
import RevealAnimation from './RevealAnimation';


export default function Project(props) {
    let icon;
    switch (props.icon) {
        case 'git':
            icon = github;
            break;
        case 'live':
            icon = live;
            break;
        default:
            break;
    }

    return (
        <div className="project-container">
            <RevealAnimation>
                <div className="project-description">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>

                        <ul className="project-skills">
                            {props.skills.map((skill,index) => {
                                return (
                                    <li className="project-skill" key={index}>{skill}</li>
                                )
                            })}
                        </ul>
                        <a
                            style={{ display: 'inline', width: 'max-content' }}
                            href={ props.link }
                            rel='noreferrer'
                            target='_blank'
                        >
                            <img className='project-icon' src={icon} alt={props.icon} />
                        </a>
                </div>
            </RevealAnimation>
            <RevealAnimation>
                <div className="video-container">
                    <video
                        className='project-video'
                        autoPlay={true}
                        loop={true}
                        muted={true}
                        playsInline={true}
                    >
                        <source
                            src={props.video}
                            type='video/mp4'
                        />
                    </video>
                </div>
            </RevealAnimation>
        </div>
    )
}
