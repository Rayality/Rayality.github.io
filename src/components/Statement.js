import { useEffect, useState, useRef } from "react"
import TextLoader from "./textLoad";


export default function Statement() {
    const index = useRef(0)
    const [currentText, setCurrentText] = useState('');
    const statement = "Hello! My name is Charles and I am a full-stack Software Engineer. Welcome to my portfolio."
    const [finished,setFinished] = useState(false)

    useEffect(() => {
        if (index.current < statement.length) {
            setTimeout(() => {
                setCurrentText((value) => value + statement.charAt(index.current));
                index.current += 1;
            }, (Math.random()*160 + 85));
        } else {
            setTimeout(() => {
                setFinished(true)
            }, 50)
        }
    }, [index.current]);

    return (
        <div style={{width:'100%'}}>
            <div className="statement">
                <h3 >{currentText}{finished===false ? <TextLoader finished={finished} ind={index.current} /> : null} </h3>
            </div>
        </div>
    )


}


// Xア1ZァA3カU2サBタ5ナGハ4マVヤYャC7ラDワガ9ザTダバDパイ8ィキHシチニヒMミリヰギNジZヂビOピ6ウゥクRスツKヌフFムユュルグLズJブヅプQエェケセテPネヘメレヱゲSゼデベEペオォコソトホモヨョロヲゴIゾドボポヴッン
