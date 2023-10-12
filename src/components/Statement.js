import { useEffect, useState, useRef } from "react"
import TextLoader from "./textLoad";


export default function Statement(props) {
    const index = useRef(0)
    const [currentText, setCurrentText] = useState('');
    const statement = props.text

    useEffect(() => {
        if (index.current < statement.length) {
            setTimeout(() => {
                setCurrentText((value) => {
                    let char = statement.charAt(index.current)
                    return value + char
                });
                index.current += 1;
            }, (Math.random()*160 + 85));
        } else {
            setCurrentText(statement)
            index.current++;
        }
    },
        [index.current]
    );

    return (
        <div style={{width:'100%'}}>
            <h3 >{currentText}
                {currentText.length !== statement.length ?
                    <TextLoader ind={index.current} />
                    :
                    null
                }
            </h3>
        </div>
    )


}


// Xア1ZァA3カU2サBタ5ナGハ4マVヤYャC7ラDワガ9ザTダバDパイ8ィキHシチニヒMミリヰギNジZヂビOピ6ウゥクRスツKヌフFムユュルグLズJブヅプQエェケセテPネヘメレヱゲSゼデベEペオォコソトホモヨョロヲゴIゾドボポヴッン
