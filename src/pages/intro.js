import Tree from "../components/Tree"
// import Digital from '../components/Digital'
import '../css/intro.css'
import Statement from '../components/Statement'
import { useEffect } from 'react'
import Headshot from "../components/Headshot"
import { setCanvasState } from "../Redux/canvasSlice"
import { useDispatch, useSelector } from "react-redux"
import head from '../resources/headshot.png'
export default function Intro() {
    const showCanvas = useSelector((state)=> state.canvasControl.canvasState)
    const dispatch = useDispatch();
    let picture = new Image();
    picture.src = head;
    useEffect(() => {
        picture.addEventListener('load',dispatch(setCanvasState(true)))
    },[])

    return (
        <div>
            <h4 className="construction">Currently in Development. Some features may not be optimized for your device.</h4>
            <section className="top-section">
                <canvas id='head' className="image-canvas"></canvas>
                {showCanvas ? <Headshot picture={picture} />:null}
                <Statement />
            </section>
        </div>
    )
}
