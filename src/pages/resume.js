import parch from '../resources/parchment.jpg'
import '../css/resume.css'
import link from '../resources/linkWhite.png'
import pdfRes from '../resources/Resume.pdf'
import docRes from '../resources/Resume.docx'
import word from '../resources/word.png'
import pdf from '../resources/pdf.png'
import download from '../resources/downloadWhite.png'
import web from '../resources/web.png'


export default function Resume() {

    return (
        <div className='page-wrapper'>
            <div className='download'>
            <p className='support-content'>Download or view</p>
                <a className='link' href={pdfRes} download="Charles-Cowan-Resume" rel='noreferrer'>
                    <img className='link-icon' src={download} alt='#' />
                    Resume.pdf
                    <img className='link-icon' src={pdf} alt='PDF icon'/>
                </a>
                <a className='link' href={docRes} download="Charles-Cowan-Resume" rel='noreferrer'>
                    <img className='link-icon' src={download} alt='#' />
                    Resume.docx
                    <img className='link-icon' src={word} alt='MS Word icon'/>
                </a>
                <a className='link' href="https://docs.google.com/document/d/1qT5Eoqsz_WfJ-T6uWJBIrEs9vdnBpBn2xAveXxN9Z2A/edit?usp=sharing" download="Charles-Cowan-Resume" rel='noreferrer'>
                    <img className='link-icon' src={link} alt='PDF icon'/>
                    Docs.Google
                    <img className='link-icon' src={web} alt='#' />
                </a>
            </div>

            <div className="page">
                <img className='bg-image' src={parch} alt='paper' />
                <div className='wrapper'>
                    <h1 className='me'>Charles Cowan</h1>
                    <p>linkedin.com/in/charles-cowan-286764265 | gitlab.com/CharlesRay</p>
                </div>
                <div className='wrapper'>
                    <h2>Technical Skills</h2>
                    <h4>Programming: <p>Python 3, JavaScript ES6+, SQL, Java, C, HTML5, CSS</p></h4>
                    <h4>System Design: <p>Microservices, Domain-driven-design, Event sourcing, Message passing</p></h4>
                    <h4>Back-end: <p>PostgreSQL, Django 4, RabbitMQ, FastAPI, MongoDB</p></h4>
                    <h4>Front-end: <p>React, React Hooks, Redux Toolkit, DOM manipulation, WebSockets</p></h4>
                </div>
                <div className='wrapper'>
                    <h2>Application Development Experience</h2>
                    <h4>MatchFynder</h4>
                    <p>An application to assist groups in finding a place to eat. Uses React, FastAPI, and Postgresql Docker containers</p>
                    <ul>
                        <li>Utilized React and Google API to get results/directions to facilitate restaurant search and arrival.</li>
                        <li>Created dynamic PostgreSQL insert/select/update functions, streamlining database interactions.</li>
                        <li>Implemented Websockets/Redux to manage data; creating a unique/real-time user experiences.</li>
                    </ul>
                    <h4>Wheeler Dealer</h4>
                    <p>Django microservices for managing a car dealership. Combines vehicle service dept., sales dept., and inventory.</p>
                    <ul>
                        <li>Worked cohesively using domain-driven design to deliver a user-friendly interface to employees.</li>
                        <li>Integrated multiple Django API containers; presented on a React/JavaScript website for users.</li>
                    </ul>
                    <h4>Conference Convergence</h4>
                    <p>An application to manage conference events. Tracks presentations and attendees for each event.</p>
                    <ul>
                        <li>Translated a monolithic Django app into microservice Docker containers to facilitate expansion.</li>
                        <li>Utilized RabbitMQ and PIKA to implement RPC protocols for communications between APIs.</li>
                    </ul>
                </div>
                <div className='wrapper'>
                    <h2>Professional Experience</h2>
                    <div className="info-date">
                        <h4>International Paper | <p>Maintenance Technician</p></h4><div>2021-2022</div>
                    </div>
                    <ul>
                        <li>Diagnosed and repaired faults in complex manufacturing systems to reduce production stops.</li>
                        <li>
                            Conducted interviews with each machine operator weekly,
                            and designed/constructed modifications to their machines
                            to facilitate productivity and quality of life increases.
                        </li>
                    </ul>
                    <div className="info-date">
                        <h4>Air Force | <p>Electrical Systems Craftsman</p></h4><div>2012-2022</div>
                    </div>
                    <ul>
                        <li>Reviewed and designed electrical systems to ensure a balanced and functional electrical grid.</li>
                        <li>Assessed and resolved errors in electrical systems to prevent further service interruptions.</li>
                    </ul>
                    <h2>Education</h2>
                    <div className="info-date">
                        <h4>Hack Reactor | <p>Advanced Software Engineering Certificate</p></h4><div>2023</div>
                    </div>
                    <div className="info-date">
                        <h4>CCAF | <p>64 credit hours in Electrical Engineering Technology/General</p></h4><div>2013-2018</div>
                    </div>
                </div>
            </div>
</div>
    )
}
