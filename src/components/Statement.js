import { useEffect, useState, useRef } from "react"
import TextLoader from "./textLoad";


export default function Statement(props) {

    const index = useRef(1)
    const [currentText, setCurrentText] = useState('');
    const statement = props.text

    useEffect(() => {
        if (index.current < statement.length) {
            setTimeout(() => {
                const segment = statement.slice(0, index.current)
                index.current += 1;
                setCurrentText(segment);
            }, (Math.random()*160 + 45));
        } else {
            setCurrentText(statement)
            index.current++;
        }
    },
        [index.current]
    );

    return (
        <div style={{width:'100%'}}>
            <p style={{ display: 'inline' }}>
                {currentText}
            </p>
                {currentText.length !== statement.length ?
                    <TextLoader ind={index.current} />
                    :
                    null
                }
        </div>
    )

    // #2666cb -- element blue
    // #dccd79 -- function name yellow
    // #ffd710 -- parenthesis/curly yellow
    // #ce70d6 -- return pink
}


// Xア1ZァA3カU2サBタ5ナGハ4マVヤYャC7ラDワガ9ザTダバDパイ8ィキHシチニヒMミリヰギNジZヂビOピ6ウゥクRスツKヌフFムユュルグLズJブヅプQエェケセテPネヘメレヱゲSゼデベEペオォコソトホモヨョロヲゴIゾドボポヴッン
