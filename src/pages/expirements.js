import Tree from '../components/Tree'
import Digital from '../components/Digital'
import { useEffect, useState, useRef } from 'react'
import '../css/experiment.css'
import { useDispatch, useSelector } from "react-redux"
import { setCanvasState } from "../Redux/canvasSlice"
import head from '../resources/headshot.png'
import Headshot from "../components/Headshot"

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
            default:
                break;
        }
    }

    return (
        <div>
            <div className='buttons'>
                <button className='exp-button' onClick={handleExpirement} name='digital'>Digital Rain</button>
                <button className='exp-button' onClick={handleExpirement} name='tree'>Fractal Tree</button>
                <button className='exp-button' onClick={handleExpirement} name='head'>Digital Image</button>
            </div>
            <div className='experiment-wrapper'>
                <div className="experiment">
                    <canvas id='rain' className="d-none" />
                    <canvas id='head' className="head d-none"/>
                    {shown === 'head' ? loaded ?  <Headshot picture={picture.current} />: null : null}
                    {shown === 'digital' ? <Digital/>:null}
                    {shown === 'tree' ? <Tree /> : null}
                </div>
            </div>
        </div>
    )
}
