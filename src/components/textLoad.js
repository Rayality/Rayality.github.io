import { useEffect, useState } from "react"

export default function TextLoader(props) {
    const [currentText, setCurrentText] = useState('');


    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

    useEffect(() => {
        while(props.finished) {
            setTimeout(() => {
                setCurrentText(characters.charAt(Math.random()*(characters.length-1)))
            },505);
        }
    },[props.finished])
    return (
        <div className="text-load">{currentText}</div>
    )

    }

    // ア1ァA3カU2サBタ5ナGハ4マVヤYャC7ラDワガ9ザTダバDパイ8ィキHシチニヒMミリヰギNジZヂビOピ6ウゥクRスツKヌフFムユュルグLズJブヅプQエェケセテPネヘメレヱゲSゼデベEペオォコソトホモヨョロヲゴIゾドボポヴッン
