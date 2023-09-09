import github from '../resources/github.png'

export default function Project(props) {

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
                        href="https://github.com/Rayality/MatchFynder/"
                        rel='noreferrer'
                        target='_blank'
                    >
                        <img className='project-icon' src={github} alt='github' />
                    </a>

            </div>
            <div className="video-container">
                {props.videos.map((video,index) => {
                    return (
                        <video key={index} className='project-video' src={video} autoPlay={true} loop={true} />
                    )
                })}
            </div>
        </div>
    )
}
