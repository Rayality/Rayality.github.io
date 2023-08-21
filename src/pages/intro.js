import Tree from "../components/Tree"
// import Digital from '../components/Digital'
import '../css/intro.css'
import Statement from '../components/Statement'
import { useEffect } from 'react'
import Headshot from "../components/Headshot"
import { setCanvasState } from "../Redux/canvasSlice"
import { useDispatch, useSelector } from "react-redux"
import head from '../resources/headshot.png'
import { useState } from "react"
import { useRef } from "react"
export default function Intro() {
    const showCanvas = useSelector((state)=> state.canvasControl.canvasState)
    const [loaded,setLoaded] = useState(false)
    const dispatch = useDispatch();
    let picture = useRef;
    useEffect(() => {
        picture.current = new Image()
        picture.current.src = head;
        picture.current.addEventListener('load', handleLoaded)
    },[showCanvas])

    function handleLoaded() {
        setLoaded(true)
        dispatch(setCanvasState(true))
    }
    return (
        <div>
            <h4 className="construction">Currently in Development. Some features may not be optimized for your device.</h4>
            <section className="top-section">
                <canvas id='head' className="image-canvas"></canvas>
                {loaded ?  <Headshot picture={picture.current} />:null}
                <Statement />
            </section>
        </div>
    )
}
