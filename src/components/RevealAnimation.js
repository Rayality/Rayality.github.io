import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect } from "react";
import { useRef } from "react";
import code from '../resources/text.png'

export default function RevealAnimation({ children, name }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const contentControls = useAnimation()


    useEffect(() => {
        if (isInView) {
            contentControls.start('show')
        }
    }, [isInView]);

    return (
        <motion.div
            style={{position: 'relative'}}
            ref={ref}
            className={name}
            variants={{
                    hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: {duration:2}
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
                transition={{delay: .8, duration:.3}}
            >
                {children}
            </motion.div>
            <motion.div
                style={{
                    position: 'absolute',
                    inset: 1,
                    backgroundColor:'#111',
                    backgroundImage: `url(${code})`,
                    zIndex:100
                }}
                variants={{
                    hidden: {
                        opacity: 0,
                        left: '-100%',
                    },
                    show: {
                        opacity: 1,
                        left: '100%',
                    }
                }}
                initial='hidden'
                animate={contentControls}
                transition={{ duration: 1, delay: .1 }}
            />
        </motion.div>
    )
}
