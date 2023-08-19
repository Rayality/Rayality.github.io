import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

export default function TextLoader(finished) {
    const [currentText, setCurrentText] = useState('');
    const [fin, setFin] = useState(finished)

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

    useEffect(() => {
        setFin(finished)
    },[finished])

    while(true) {
        setTimeout(() => {
            setCurrentText(characters.charAt(Math.random()*(characters.length-1)))
        },505);
        return (
            fin ? <div className="text-load">{currentText}</div> : null
        )
    }
    }

    // ア1ァA3カU2サBタ5ナGハ4マVヤYャC7ラDワガ9ザTダバDパイ8ィキHシチニヒMミリヰギNジZヂビOピ6ウゥクRスツKヌフFムユュルグLズJブヅプQエェケセテPネヘメレヱゲSゼデベEペオォコソトホモヨョロヲゴIゾドボポヴッン
