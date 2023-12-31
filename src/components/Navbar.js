import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'
import house from '../resources/house.svg'
import vial from '../resources/vial.png'
import resume from '../resources/resume.png'
import '../css/navbar.css'


export default function MyNavbar() {
    const navigate = useNavigate()


    const slide = {
        hidden: {
            opacity: 0, position: 'sticky', top: 20,
            transition: { when: "afterChildren" }
        },
        show: {
            opacity: 1, position: 'sticky', top: 20,
             transition: {
                when: "beforeChildren",
                duration: 1,
                staggerChildren: .5
            },
        }
    }

    const slideChild = {
        hidden: { opacity: 0, x: 100, },
        show: { opacity: 1, x: 0,
                transition: {
                type: "spring",
                duration: 1,
                },
        }
    }

    function handleHover(e) {
        e.target.classList.add("glitch")
    }

    function handleLeave(e) {
        e.target.classList.remove('glitch')
    }

    function handleClicks(e) {
        navigate(e.target.id)
    }

    return (
        <motion.div
            initial="hidden"
            animate="show"
            variants={slide}
            className="nav-bar"
        >
            <motion.p
                variants={slideChild}
                effect="Charles Cowan"
                onMouseOver={handleHover}
                onMouseLeave={handleLeave}
                onClick={handleClicks}
            >
                Charles Cowan
            </motion.p>
            <motion.div className='nav-wrap'>
                <motion.button
                    className='btn'
                    variants={slideChild}
                    id=""
                    onClick={handleClicks}
                >
                    <img id="" src={house} alt='home' style={{'maxHeight':'2ch'}}/>
                    <p
                        effect="Home"
                        onMouseOver={handleHover}
                        onMouseLeave={handleLeave}
                        id=""
                    >
                        Home
                    </p>
                </motion.button>
                <motion.button
                    id="experiments"
                    className='btn'
                    variants={slideChild}
                    onClick={handleClicks}
                >
                    <img src={vial} alt='experiments' style={{'maxHeight':'2ch'}}/>
                    <p
                        id="experiments"
                        effect="Experiments"
                        onMouseOver={handleHover}
                        onMouseLeave={handleLeave}
                    >
                        Experiments
                    </p>
                </motion.button>
                <motion.button className='btn' variants={slideChild}>
                    <img src={resume} alt='resume' style={{'maxHeight':'2ch'}}/>
                    <p
                        effect="Resume"
                        onMouseOver={handleHover}
                        onMouseLeave={handleLeave}
                        onClick={() => navigate('resume')}
                    >
                        Resume
                    </p>
                </motion.button>
            </motion.div>
        </motion.div>
    )
}
