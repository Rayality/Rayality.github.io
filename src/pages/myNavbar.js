import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'


export default function MyNavbar() {
    const [dropdown, setDropdown] = useState(false)
    function handleDropdown() {
        setDropdown(!dropdown)
    }
    return (
    <div className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <NavLink className="navbar-brand" href="#navbar">Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <div className="nav-link">
                        <NavLink className="nav-link" aria-current="page" href="#navbar">Home</NavLink>
                    </div>
                    <div className="nav-link">
                        <NavLink className="nav-link" to="#skills">Skills</NavLink>
                    </div>

                    <div className="nav-link">
                        <NavLink className="nav-link" to="#projects">Projects</NavLink>
                    </div>

                    <button className="nav-link " type='button' onClick={handleDropdown} aria-expanded="false">
                        Fun Components
                    </button>
                        <motion.div className="fun-item">
                            <NavLink className="nav-link" to="/tree">Tree</NavLink>
                        </motion.div>
                    <motion.div className="fun-item"><NavLink className="nav-link" to="/mandelbrot">Another action</NavLink></motion.div>
                    <motion.div className="fun-item"><NavLink className="nav-link" to="/fun">Something else here</NavLink></motion.div>
                </ul>
            </div>
        </div>
    </div>
    )
}
