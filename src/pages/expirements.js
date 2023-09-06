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

export default function Expirements() {
    let picture = useRef();
    const [loaded, setLoaded] = useState(false)
    const [shown, setShown] = useState('digital')
    const dispatch = useDispatch();

    useEffect(() => {
        picture.current = new Image()
        picture.current.src = head;
        picture.current.addEventListener('load', handleLoaded)
    }, [])

    function handleLoaded() {
        setLoaded(true)
        dispatch(setCanvasState(true))
    }


    function handleExpirement(e) {
        let rain = document.getElementById('rain')
        let head = document.getElementById('head')
        switch (e.target.name) {
            case 'digital':
                rain.classList.remove('d-none')
                head.classList.add('d-none')
                setShown('digital');
                break;
            case 'tree':
                rain.classList.add('d-none')
                head.classList.add('d-none')
                setShown('tree');
                break;
            case 'head':
                rain.classList.add('d-none')
                head.classList.remove('d-none')
                setShown('head')
                break;
            case 'batgame':
                rain.classList.add('d-none')
                head.classList.add('d-none')
                setShown('batgame')
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <div className='options'>
                <div className='buttons'>
                    <h2>Canvas Animations</h2>
                    <button className='exp-button' onClick={handleExpirement} name='digital'>
                        Digital Rain
                        <img src={matrix} alt='#'/>
                    </button>
                    <button className='exp-button' onClick={handleExpirement} name='tree'>
                        Fractal Tree
                        <img src={treepic} alt='#'/>
                    </button>
                    <button className='exp-button' onClick={handleExpirement} name='head'>
                        Digital Image
                        <img src={digpic} alt='#'/>
                    </button>
                </div>
                <div className='buttons'>
                    <h2>Unity Games</h2>
                    <button className='exp-button' onClick={handleExpirement} name='batgame'>
                        Flap Bat
                        <img src={gamepic} alt='#'/>
                    </button>
                </div>
            </div>
            <div className='experiment-wrapper'>
                <div className="experiment">
                    <canvas id='rain' className="d-none" />
                    <canvas id='head' className="head d-none"/>
                    {shown === 'head' ? loaded ?  <Headshot picture={picture.current} />: null : null}
                    {shown === 'digital' ? <Digital/>:null}
                    {shown === 'tree' ? <Tree /> : null}
                    {shown === 'batgame' ? <BatGame/> : null}
                </div>
            </div>
        </div>
    )
}
