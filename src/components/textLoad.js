import { useEffect, useState } from "react"

export default function TextLoader(props) {
    const [currentText, setCurrentText] = useState('');
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!.-"

    useEffect(() => {
        let cancelid;
        function changes() {
            setTimeout(() => {
                if (props.finished === false) {
                    setCurrentText(characters.charAt(Math.random()*(characters.length-1)));
                    cancelid=requestAnimationFrame(changes)
                } else {
                    return ()=> cancelAnimationFrame(cancelid)
                }
            }, 50);
        }
        changes();
        return ()=> cancelAnimationFrame(cancelid)
    },[props.finished])


        return (
            <div className="text-load">{currentText}</div>
        )


    }

    // ア1ァA3カU2サBタ5ナGハ4マVヤYャC7ラDワガ9ザTダバDパイ8ィキHシチニヒMミリヰギNジZヂビOピ6ウゥクRスツKヌフFムユュルグLズJブヅプQエェケセテPネヘメレヱゲSゼデベEペオォコソトホモヨョロヲゴIゾドボポヴッン
