import { useEffect, useState, useRef } from "react"
import TextLoader from "./textLoad";


export default function Statement() {
    const index = useRef(0)
    const [currentText, setCurrentText] = useState('');
    const statement = `Hello, My name is Charles.
    Welcome to my portfolio.
    Be sure to check out the 'Experiments' page for games and small creations/animations.`

    useEffect(() => {
        if (index.current < statement.length) {
            setTimeout(() => {
                setCurrentText((value) => value + statement.charAt(index.current));
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
            <div className="statement">
                <h3 >{currentText}{
                    currentText.length !== statement.length ?
                    <TextLoader ind={index.current} /> : null
                }
                </h3>
            </div>
        </div>
    )


}


// Xア1ZァA3カU2サBタ5ナGハ4マVヤYャC7ラDワガ9ザTダバDパイ8ィキHシチニヒMミリヰギNジZヂビOピ6ウゥクRスツKヌフFムユュルグLズJブヅプQエェケセテPネヘメレヱゲSゼデベEペオォコソトホモヨョロヲゴIゾドボポヴッン
