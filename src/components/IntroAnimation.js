import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { setIntroState } from "../Redux/introSlice";
import TextLoader from './textLoad'

export default function IntroAnimation(props) {
    const dispatch = useDispatch();
    const animationText = props.text;
    const [display, setDisplay] = useState([]);
    const [loaded, setLoaded] = useState(false)
    const index = useRef(0);
    const zoom = {
        hidden: {
            opacity: 1,
        },
        show: {
            opacity: 0,
            scale: 1650,
            y: -250,
            transition: {
                duration: 4,
                delay: 6.8,
                ease: 'easeIn',
                y: { duration: 2 }
            },
            transitionEnd: { display: 'none' }
        }
    };
    useEffect(() => {
        const load = () => {
            const content = [animationText.charAt(index.current)]
            index.current++;
            setDisplay([...display, content]);
        }
        if (index.current < animationText.length) {
            setTimeout(load, 800);
        } else {
            setLoaded(true)
            setTimeout(() => {
                dispatch(setIntroState(true))
            }, 4520);
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
            {loaded ? null: <TextLoader />}
        </motion.h1>
    )
}
