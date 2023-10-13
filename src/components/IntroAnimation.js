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
            scale: 350,
            transition: {
                duration: 4,
                delay: 6.3,
                ease: 'easeIn'
            },
            transitionEnd: { display: 'none' }
        }
    };
    useEffect(() => {
        const load = () => {
            const content = [animationText.charAt(index.current)]
            index.current++;
            const obj = content.map(char => {
                return (
                    Characters({ 'text': char, 'index': index.current })
                )
            });
            setDisplay([...display, obj]);
        }
        if (index.current <= animationText.length) {
            setTimeout(load, 700);
        } else {
            setTimeout(() => {
                props.setFinished(true);
            }, 4120);
        };
    }, [index.current])

    return (
        <motion.h1
            className="intro-animation"
            variants={zoom}
            initial='hidden'
            animate='show'
        >
            {display}

        </motion.h1>
    )
}

function Characters(props) {
    const typingBlock = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 0,
                repeat: 3,
                repeatType: 'mirror',
                repeatDelay: .2,
            },
            transitionEnd: { display:'none' }
        }
    }

    const typingLetter = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delay:.6,
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
