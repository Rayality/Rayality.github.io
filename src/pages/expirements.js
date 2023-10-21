import Tree from '../components/Tree'
import Digital from '../components/Digital'
import { useEffect, useState, useRef } from 'react'
import '../css/experiment.css'
import head from '../resources/headshot.png'
import Headshot from "../components/Headshot"
import BatGame from '../components/BatGame'
import digpic from '../resources/DigitalPicture.png'
import gamepic from '../resources/FlapBat.png'
import matrix from '../resources/MatrixRain.png'
import treepic from '../resources/FractalTree.png'
import Experiment from '../components/ExperimentContent'

export default function Expirements() {
    const picture = useRef();
    const [loaded, setLoaded] = useState(false)
    const [shown, setShown] = useState('')
    const [requestUnloadUnity, setRequestUnloadUnity] = useState(true)
    const unloadUnityReplacement = useRef()

    useEffect(() => {
        picture.current = new Image();
        picture.current.src = head;
        picture.current.addEventListener('load', handleLoaded);
    }, [shown, unloadUnityReplacement.current, setShown])

    function handleLoaded() {
        setLoaded(true)
    }


    async function handleExpirement(e) {
        console.log(e)
        const name = e.target.name
        unloadUnityReplacement.current = name
        if (name !== 'Flap Bat') {
            setRequestUnloadUnity(true)
        }
        let check = await handleUnload()
        if (check === true){
        let head = document.getElementById('head')
        switch (name) {
            case 'Matrix Effect':
                setShown(name);
                break;

            case 'Fractal Tree':
                setShown(name);
                break;

            case 'Digital Image':
                setShown(name);
                break;

            case 'Flap Bat':
                setRequestUnloadUnity(false)
                setShown('Flap Bat');
                break;

            default:
                break;
            }
        } else {
            setTimeout(() => handleExpirement(e), 2000)
        }

    }

    async function handleUnload() {
        return true
    }

    return (
        <div>
            <div className='options'>
                <div className='tech-area'>
                    <div className='area-description'>
                        <h2 className='glitch' effect="Experiments">Experiments</h2>
                        <p>
                            These were small projects I used to familiarize myself with different libraries
                            , elements, and applications. Click the pictures to play. The experiment plays below the list.
                        </p>
                    </div>
                    <div className='tech-expirement'>
                        <Experiment
                        title="Flap Bat"
                        click={handleExpirement}
                        picture={gamepic}
                        description="My first game built with Unity.
                         It has a 'flappy bird' style of gameplay with increasing difficulty.
                         Use spacebar or left mouseclick to navigate through obstacles."
                        />
                        <Experiment
                            title="Fractal Tree"
                            click={handleExpirement}
                            picture={treepic}
                            description="
                                A recursive function draws branches.
                                The screen size and user mouse determines angle and length.
                                The color is determined by length.
                            "
                        />
                        <Experiment
                            title="Matrix Effect"
                            click={handleExpirement}
                            picture={matrix}
                            description="
                                Canvas animation that divides the canvas into columns.
                                Monospace text is drawn and increments down by the text height.
                            "
                        />
                        <Experiment
                            title="Digital Image"
                            click={handleExpirement}
                            picture={digpic}
                            description="
                                Parses an image and averages pixel color values.
                                The pixels average determines the speed and alpha value of falling characters.
                            "
                        />
                    </div>
                </div>
                <div className='experiment-display'>
                    <div className="experiment">
                        {shown === 'Digital Image' ? loaded ?  <Headshot picture={picture.current} width='600px' />: null : null}
                        {shown === 'Matrix Effect' ? <Digital /> : null}
                        {shown === 'Fractal Tree' ? <Tree /> : null}
                        {shown === 'Flap Bat' ?
                            <BatGame shown={shown} setShown={setShown} requestUnload={requestUnloadUnity} unloadedReplacement={unloadUnityReplacement.current} />
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
