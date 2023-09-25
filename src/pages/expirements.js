import Tree from '../components/Tree'
import Digital from '../components/Digital'
import { useEffect, useState, useRef } from 'react'
import '../css/experiment.css'
import { useDispatch } from "react-redux"
import { setCanvasState } from "../Redux/canvasSlice"
import head from '../resources/headshot.png'
import Headshot from "../components/Headshot"
import BatGame from '../components/BatGame'
import digpic from '../resources/DigitalPicture.png'
import gamepic from '../resources/FlapBat.png'
import matrix from '../resources/MatrixRain.png'
import treepic from '../resources/FractalTree.png'
import Experiment from '../components/ExperimentContent'

export default function Expirements() {
    let picture = useRef();
    const [loaded, setLoaded] = useState(false)
    const [shown, setShown] = useState('Flap Bat')
    const dispatch = useDispatch();

    useEffect(() => {
        picture.current = new Image();
        picture.current.src = head;
        picture.current.addEventListener('load', handleLoaded);
        setShown('')
    }, [])

    function handleLoaded() {
        setLoaded(true)
        dispatch(setCanvasState(true))
    }


    function handleExpirement(e) {
        let rain = document.getElementById('rain')
        let head = document.getElementById('head')
        switch (e.target.name) {
            case 'Matrix Effect':
                rain.classList.remove('d-none');
                head.classList.add('d-none');
                setShown('Matrix Effect');

                break;
            case 'Fractal Tree':
                rain.classList.add('d-none');
                head.classList.add('d-none');
                setShown('Fractal Tree');
                break;
            case 'Digital Image':
                rain.classList.add('d-none');
                head.classList.remove('d-none');
                setShown('Digital Image');
                break;
            case 'Flap Bat':
                rain.classList.add('d-none');
                head.classList.add('d-none');
                setShown('Flap Bat');
                break;
            default:
                break;
        }
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
                        <canvas id='rain' className="d-none" />
                        <canvas id='head' className="head d-none"/>
                        {shown === 'Digital Image' ? loaded ?  <Headshot picture={picture.current} />: null : null}
                        {shown === 'Matrix Effect' ? <Digital/> : null}
                        {shown === 'Fractal Tree' ? <Tree /> : null}
                        <BatGame shown={shown} />
                    </div>
                </div>
            </div>
        </div>
    )
}
