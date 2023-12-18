import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import '../css/matchgame.css'
import sword from '../resources/sword.png'
import mace from '../resources/mace.png'
import spear from '../resources/spear.png'
import shield from '../resources/shield.png'


export default function MatchGame() {
    const [currentBoard, setCurrentBoard] = useState([]);
    const size = 8;
    const pieces = [
        { 'sword': sword },
        { 'mace': mace },
        { 'spear': spear },
        { 'shield': shield }
    ];

    function randomPiece() {
        let randomPieceIndex = Math.floor(Math.random() * pieces.length);
        return pieces[randomPieceIndex]
    }

    function createBoard() {
        const boardArray = [];
        for (let i = 0; i < size * size; i++){
            boardArray.push(randomPiece());
        };
        setCurrentBoard(boardArray);
    };

    useEffect(() => {
        createBoard()
    }, []);

    function handleClick(e) {
        const piece = e.target
        console.log(piece)
        piece.classList.add('selected')

    }

    return (
        <div className='board'>
            {currentBoard.map((piece, index) => {
                const [name, image] = Object.entries(piece)[0]
                return (
                    <img key={index} className='piece' src={image} alt={name} name={index} onClick={handleClick}/>
                )
            })}
        </div>
    )

}
