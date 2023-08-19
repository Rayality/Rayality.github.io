import Tree from "../components/Tree"
// import Digital from '../components/Digital'
import '../css/intro.css'
import Statement from '../components/Statement'
import { useEffect } from 'react'
import Headshot from "../components/Headshot"

export default function Intro() {
    useEffect(() => {
        const load = async () => {
            Headshot();
        }
        load();
    }, []);

    return (
        <div>
            <h4 className="construction">Currently in Development. Some features may not be optimized for your device.</h4>
            <section className="top-section">
                <canvas id='head' className="image-canvas"></canvas>
                <Statement />
            </section>
        </div>
    )
}

