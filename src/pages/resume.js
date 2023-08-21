import parch from '../resources/parchment.jpg'
import '../css/resume.css'
import seal from '../resources/seal.png'
import pdfRes from '../resources/Resume.pdf'
import docRes from '../resources/Resume.docx'
import word from '../resources/word.png'
import pdf from '../resources/pdf.png'


export default function Resume() {

    return (
        <div className='page-wrapper'>
            {/* <div className='scroll'>
                <img className='seal' src={seal} alt='seal' />
            </div> */}
            <section className='download'>
                <a href={pdfRes} download="Charles-Cowan-Resume" rel='noreferrer'>
                    <button className='dl left'>
                        <img className='dl-image' src={pdf} alt='PDF icon'/>
                        Download
                    </button>
                </a>
                <a href={docRes} download="Charles-Cowan-Resume" rel='noreferrer'>
                    <button className='dl right'>
                        <img className='dl-image' src={word} alt='MS Word icon'/>
                        Download
                    </button>
                </a>
            </section>
    <section className="page">
        <img className='bg-image' src={parch} alt='paper'/>
        <h1 className='me'>Charles Cowan</h1>
        <p>charlesraycowan@yahoo.com</p>
        <p>linkedin.com/in/charles-cowan-286764265 | gitlab.com/CharlesRay</p>
        <h2>Technical Skills</h2>
        <h4>Programming: <p>Python 3, JavaScript ES6+, SQL, HTML5, CSS</p></h4>
        <h4>System Design: <p>Microservices, Domain-driven-design, Event sourcing, Message passing</p></h4>
        <h4>Back-end: <p>PostgreSQL, Django 4, RabbitMQ, FastAPI, MongoDB</p></h4>
        <h4>Front-end: <p>React, React Hooks, Redux Toolkit, DOM manipulation, WebSockets</p></h4>
        <h2>Application Development Experience</h2>
        <h4>MatchFynder</h4>
        <p>An application to assist groups in finding a place to eat. Uses React, FastAPI, and Postgresql Docker containers</p>
        <ul>
            <li>Utilized React and Google API to get results/directions to facilitate restaurant search and arrival.</li>
            <li>Created dynamic PostgreSQL insert/select/update functions, streamlining database interactions.</li>
            <li>Implemented Websockets/Redux to manage data; creating a unique/real-time user experiences.</li>
        </ul>
        <h4>Wheeler Dealer</h4>
        <p>A microservice API for managing a car dealership. Combines vehicle service dept., sales dept., and inventory.</p>
        <ul>
            <li>Worked cohesively using domain-driven design to deliver a user-friendly interface to employees.</li>
            <li>Integrated multiple containerized APIs to present data on a React/JavaScript website for users.</li>
        </ul>
        <h4>Conference Convergence</h4>
        <p>An application to manage conference events. Tracks presentations and attendees for each event.</p>
        <ul>
            <li>Translated a monolithic Django app into microservice Docker containers to facilitate expansion.</li>
            <li>Utilized RabbitMQ and PIKA to implement RPC protocols for communications between APIs.</li>
        </ul>
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
    </section>
</div>
    )
}
