import { useEffect, useState, useRef } from "react"
import TextLoader from "./textLoad";


export default function Statement() {
    const index = useRef(0)
    const [currentText, setCurrentText] = useState('');
    const statement = "  Hello! My name is Charles and I am a full-stack Software Engineer. Welcome to my portfolio site!"
    const [finished,setFinished] = useState(false)
    const [placeholder, setPlaceHolder] = useState("  Hello! My name is Charles and I am a full-stack Software Engineer. Welcome to my portfolio site!")
    const openp = "<p>"
    const closep = "</p>"

    useEffect(() => {
        if (index.current < statement.length) {
            setTimeout(() => {
                setPlaceHolder((value)=> value = value.replace(placeholder.charAt(0),''))
                setCurrentText((value) => value + statement.charAt(index.current));
                index.current += 1;
            }, 100);
        } else {
            setFinished(true)
        }
    }, [placeholder,finished]);

    return (
        <div style={{width:'100%'}}>
            <div className="statement">

                <h3 >{currentText}{finished===false ? <TextLoader finished={finished} ind={index.current} /> : null} </h3>
                {/* <h3 className="statement-ph">{placeholder}</h3> */}
            </div>
        </div>
    )


}


// Xア1ZァA3カU2サBタ5ナGハ4マVヤYャC7ラDワガ9ザTダバDパイ8ィキHシチニヒMミリヰギNジZヂビOピ6ウゥクRスツKヌフFムユュルグLズJブヅプQエェケセテPネヘメレヱゲSゼデベEペオォコソトホモヨョロヲゴIゾドボポヴッン
