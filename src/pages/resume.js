import parch from '../resources/parchment.jpg'
import '../css/resume.css'


export default function Resume() {

    return (
        <div className='page-wrapper'>
            <div className="page">
                <img className='bg-image' src={parch} alt='paper' />
                <div className='wrapper'>
                    <h1 className='me'>Charles Cowan</h1>
                    <p>Lifelong engineer with an obsession for problem-solving and a passion for elegant solutions.</p>
                    <p>linkedin.com/in/charles-cowan-286764265 | gitlab.com/CharlesRay | </p>
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
                    <p>An application to assist groups in finding a place to eat. Technologies: React, FastAPI, Postgresql, and Docker.</p>
                    <ul>
                        <li>
                            Led end-to-end development from concept to reality. Including user story creation, wireframing,
                            design engineering, team creation, task planning, and process setup in an AGILE environment.
                        </li>
                        <li>Created dynamic PostgreSQL functions and improved code by condensing 170 lines to 20.</li>
                        <li>Implemented Websockets/Redux to manage data; creating a unique/real-time user experiences.</li>
                    </ul>
                    <h4>Wheeler Dealer</h4>
                    <p>Microservices for managing a car dealership. Technologies: Django, Python, React, RabbitMQ, and PostgreSQL.</p>
                    <ul>
                        <li>Used domain-driven design to deliver a user-friendly interface to employees and costumers.</li>
                        <li>Integrated multiple Django API microservices; Designed and built React/JavaScript frontend UI.</li>
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
                        <li>
                            Process Engineering: Identified, diagnosed, and implemented improvements to complex
                            anufacturing systems to improve performance measured in both time and quality.
                        </li>
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
                        <li>Located and resolved faults in complex electrical systems to resolve service interruptions.</li>
                        <li>Progressed from E1 to E6 within 6 years, twice as fast as average, due to knowledge/esteem.</li>
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
