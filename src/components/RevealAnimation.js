import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react";

import Digital from "./Digital";

export default function RevealAnimation({ children, name, width='100%' }) {
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
                transition={{delay: 1.8, duration:.5}}
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
                    }
                }}
                initial='hidden'
                animate={contentControls}
                transition={{ duration: 2 }}
            >
                <Digital controls={contentControls} />
            </motion.div>
        </motion.div>
    )
}
