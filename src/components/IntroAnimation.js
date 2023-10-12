import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"


export default function IntroAnimation(props) {
    const animationText = props.text;
    const [display, setDisplay] = useState([]);
    const index = useRef(0);
    const zoom = {
        hidden: {
            opacity: 1,
        },
        show: {
            opacity: 0,
            scale: 150,
            transition: {
                duration: 5,
                delay: 9,
                ease:'easeIn'
            },
            transitionEnd:{display:'none'}
        }
    }
    useEffect(() => {
        const load = () => {
            const content = [animationText.charAt(index.current)]
            index.current++;
            const obj = content.map(char => Characters({ 'text': char, 'index': index.current }))
            setDisplay([...display, obj])
        }
        if (index.current <= animationText.length) {
            setTimeout(load,1120)
        } else {
            setTimeout(() => {
                props.setFinished(true)
            }, 6120)
        }
    }, [index.current])

    return (
        <motion.div
            className="intro-animation"
            variants={zoom}
            initial='hidden'
            animate='show'
        >
            {display}

        </motion.div>
    )
}

function Characters(props) {
    const typingBlock = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                duration: 0,
                repeat: 3,
                repeatType: 'mirror',
                repeatDelay: .29,
            },
            transitionEnd: { display:'none' }
        }
    }

    const typingLetter = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                delay:.9,
                duration: 0,
            },
        }
    }

    return (
        <div
            className="typing"
            key={props.index}
        >
            <motion.div
                className="typing-block"
                variants={typingBlock}
                initial='hidden'
                animate='show'
            >
            </motion.div>
            <motion.div
                className="animation-text"
                variants={typingLetter}
                initial='hidden'
                animate='show'
            >
                {props.text}
            </motion.div>
        </div>

    )
}
