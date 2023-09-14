import github from '../resources/github.png'
import live from '../resources/play.gif'

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
                        style={{display:'inline'}}
                        href={props.link}
                        rel='noreferrer'
                        target='_blank'
                    >
                        <img className='project-icon' src={icon} alt={props.icon} />
                    </a>

            </div>
            <div className="video-container">
                {props.videos.map((video,index) => {
                    return (
                        <video key={index} className='project-video' autoPlay={true} loop={true} muted={true} playsInline={true}>
                            <source
                                src={video}
                                type='video/mp4'
                            />
                        </video>
                    )
                })}
            </div>
        </div>
    )
}
