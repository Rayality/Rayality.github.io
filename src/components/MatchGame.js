import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../css/matchgame.css'
import sword from '../resources/sword.png'
import mace from '../resources/mace.png'
import spear from '../resources/spear.png'
import shield from '../resources/shield.png'


export default function MatchGame() {
    const pieces = [
        {'sword': sword},
        { 'mace': mace },
        { 'spear': spear },
        {'shield': shield}
    ]
    let [columns, setColumns] = useState([]);
    let size = 8;
    let tempColumns = []
    function fillColumn() {
        for (let i = 0; i < size; i++){
            const column = [];
            for (let i = 0; i < size; i++){
                let randomPieceIndex = Math.floor(Math.random() * pieces.length);

                column.push(pieces[randomPieceIndex]);
            }
            tempColumns.push(column)
        }
        setColumns(tempColumns)
    }

    const [dragConstraints, setDragConstraints] = useState({});

    async function getPiece() {
        const piece = document.querySelector('.piece');
        if (piece !== null) {
            setDragConstraints(
                {
                    top: -piece.clientHeight,
                    bottom: piece.clientHeight,
                    left: -piece.clientWidth,
                    right: piece.clientWidth
                }
            )
        } else {
            setTimeout(getPiece, 500)
        }
    }

    function handleMatch() {
        for (let i = 0; i < size; i++) {
            for (let i = 0; i < size; i++) {
                
            }
        }
    }

    useEffect(() => {
        fillColumn();
        getPiece();
    },[])


    function dragStart(e, info) {

    }

    function handleDrag(e, info) {

    }

    function dragDrop(e, info) {

    }

    function dragEnd(e, info) {
        console.log(info,e)
    }

    return (
        <div>
            <div className='board'>
                {columns.length > 0 ? columns.map((column, index1) => {
                    return (
                        <div
                            key={index1}
                            className='column'
                        >
                            {column.map((piece, index) => {
                                const entries = Object.entries(piece)
                                const [key,value] = entries[0]
                            return (
                                <motion.div
                                    key={index}
                                    columnindex={index1}
                                    pieceindex={index}
                                    piecetype={key}
                                    className='piece'
                                    drag
                                    dragConstraints={dragConstraints}
                                    dragSnapToOrigin={true}
                                    dragElastic={0.05}
                                    dragDirectionLock
                                    onDragStart={dragStart}
                                    onDrag={handleDrag}
                                    onDragOver={(e) => e.preventDefault()}
                                    onDragEnter={(e) => e.preventDefault()}
                                    onDragLeave={(e) => e.preventDefault()}
                                    onDrop={dragDrop}
                                    onDragEnd={dragEnd}
                                    style={{
                                        'backgroundImage': `url(${value})`,
                                        'backgroundPosition':'center'
                                    }}
                                >
                                    {/* <img className='piece-image' src={value} alt={key} /> */}
                                </motion.div>
                            )
                            })}
                        </div>
                    )
                }) : null
                }
            </div>
        </div>
    )
}
