import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import Headshot from "./Headshot";
import Digital from "./Digital";
import head from '../resources/headshot.png'


export default function RevealAnimation({ children, name='', width='100%' }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: .5 });
    const contentControls = useAnimation()
    const picture = useRef();
    const [picLoaded, setPicLoaded] = useState(false);

    useEffect(() => {
        if (isInView) {
            contentControls.start('show')
        }
        if (name === 'pic-container') {
            picture.current = new Image()
            picture.current.src = head
            picture.current.addEventListener('load', handleLoaded);
        }
    }, [isInView]);

    function handleLoaded() {
        setPicLoaded(true);
    }

    return (
        <motion.div
            style={{position: 'relative'}}
            ref={ref}
            className={name}
            variants={{
                    hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: { duration: 2 },
                }
                }}
            initial='hidden'
            animate={contentControls}
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1}
                }}
                initial='hidden'
                animate={contentControls}
                transition={{delay: 2, duration:2}}
            >
                {children}
            </motion.div>
            <motion.div
                style={{
                    position: 'absolute',
                    width:{width},
                    inset: 1,
                    zIndex: 100,
                }}
                variants={{
                    hidden: {
                        opacity: 1,
                    },
                    show: {
                        opacity: 0,
                        transition: { duration: 3 },
                        transitionEnd: { display: 'none' }
                    }
                }}
                initial='hidden'
                animate={contentControls}
            >
                { name === 'pic-container' ?
                    picLoaded ? <Headshot picture={picture.current} /> : null
                    :
                    <Digital controls={contentControls} />
                }
            </motion.div>
        </motion.div>
    )
}
