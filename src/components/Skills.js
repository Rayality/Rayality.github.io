import * as i from '../resources/devicons'
import '../css/skills.css'
import Slider from 'react-slick'


export default function Skills() {
    const settings = {
        className: 'slide',
        focusOnSelect: true,
        variableWidth: true,
        adaptiveHeight: false,
        centerMode: true,
        swipeToSlide: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 824,
                settings: {
                    centerPadding: 0,
                    className: 'slide',
                    focusOnSelect: true,
                    variableWidth: true,
                    adaptiveHeight: false,
                    centerMode: true,
                    swipeToSlide: true,
                    infinite: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 1500,
                    speed: 900,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='slider-container'>
            <div className='slider-overlay'/>
            <Slider {...settings}>
                <div>
                <div className='skill'>
                    {i.bootstrapIcon}
                    <p>Bootstrap</p>
                    </div>
                    </div>
                <div className='skill'>
                    {i.cIcon}
                    <p>C</p>
                </div>
                <div className='skill'>
                    {i.cssIcon}
                    <p>CSS</p>
                </div>
                <div className='skill'>
                    {i.dockerIcon}
                    <p>Docker</p>
                </div>
                <div className='skill'>
                    {i.djangoIcon}
                    <p>Django</p>
                </div>
                <div className='skill'>
                    {i.fastapiIcon}
                    <p>FastAPI</p>
                </div>
                <div className='skill'>
                    {i.gitIcon}
                    <p>Git</p>
                </div>
                <div className='skill'>
                    {i.htmlIcon}
                    <p>HTML</p>
                </div>
                <div className='skill'>
                    {i.javaIcon}
                    <p>Java</p>
                </div>
                <div className='skill'>
                    {i.jsIcon}
                    <p>Javascript</p>
                </div>
                <div className='skill'>
                    {i.pythonIcon}
                    <p>Python</p>
                </div>
                <div className='skill'>
                    {i.postgresIcon}
                    <p>PostgreSQL</p>
                </div>
                <div className='skill'>
                    {i.reduxIcon}
                    <p>Redux</p>
                </div>
                <div className='skill'>
                    {i.reactIcon}
                    <p>React</p>
                </div>
            </Slider>
        </div>
    )
}
