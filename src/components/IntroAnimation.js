import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setIntroState } from "../Redux/introSlice";
import TextLoader from './textLoad';
import videoBackground from '../resources/textVideo.mp4'

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
            scale: 3650,
            transition: {
                duration: 3.5,
                delay: 6,
                ease: 'easeIn',
            },
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
            }, 5300);
        };
    }, [index.current]);

    return (
        <div className="intro-animation">

            <motion.h1
                className="intro-h1"
                variants={zoom}
                initial='hidden'
                animate='show'
            >
                {display}
                { loaded ? null : <TextLoader /> }
            </motion.h1>

            <motion.div
                style={{
                    position: 'absolute',
                    zIndex: '-1',
                    width: '100vw',
                    height: '100vh'
                }}
            >
                <motion.video
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    variants={{
                        start: {
                            opacity: 0,
                        },
                        finished: {
                            opacity: [
                                0,
                                .8,
                                .6,
                                .4,
                                0
                            ],
                            scale: [
                                1,
                                1.5,
                                2,
                                2.5,
                                1135
                            ],
                            transition: {
                                delay: 7,
                                duration: 4,
                                times: [
                                    0,
                                    .4,
                                    .6,
                                    .8,
                                    1
                                ],
                                ease: 'linear'
                            },
                        }
                    }}
                    initial='start'
                    animate='finished'
                    src={videoBackground}
                    autoPlay
                    muted
                />
            </motion.div>

        </div>
    )
}
