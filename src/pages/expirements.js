import Tree from '../components/Tree'
import Digital from '../components/Digital'
import { useEffect, useState } from 'react'
import '../css/experiment.css'

export default function Expirements() {
    useEffect(() => {
        Digital()
    }, [])

    const [shown, setShown] = useState('digital')

    function handleExpirement(e) {
        let canv = document.getElementById('rain')
        switch (e.target.name) {
            case 'digital':
                setShown('digital');
                canv.classList.remove('d-none')
                break;
            case 'tree':
                canv.classList.add('d-none')
                setShown('tree');
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
            </div>
            <div className='experiment-wrapper'>
                <div className="experiment">
                    <canvas id='rain' className="d-none"/>
                    {shown === 'tree' ? <Tree /> : null}
                </div>
            </div>
        </div>
    )
}
