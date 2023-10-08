import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import '../css/matchgame.css'
import sword from '../resources/sword.png'
import mace from '../resources/mace.png'
import spear from '../resources/spear.png'
import shield from '../resources/shield.png'


export default function MatchGame() {
    const pieces = [
        {'sword': sword},
        {'mace': mace},
        {'spear': spear},
        {'shield': shield}
    ]
    let [columns, setColumns] = useState([]);
    let size = 8;
    let tempColumns = useRef([]);

    async function fillColumn() {
        for (let i = 0; i < size; i++){
            const column = [];
            for (let i = 0; i < size; i++){
                let randomPieceIndex = Math.floor(Math.random() * pieces.length);

                column.push(pieces[randomPieceIndex]);
            }
            tempColumns.current.push(column);
        }
        setColumns(tempColumns.current);
    }

    async function refill() {
        for (let i = 0; i < size; i++){
            if (tempColumns.current[i].length < size) {
                let randomPieceIndex = Math.floor(Math.random() * pieces.length);
                tempColumns.current[i].unshift(pieces[randomPieceIndex]);
                i--;
            }
        }
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

    async function handleMatch() {
        for (let i = 0; i < size - 2; i++){
            await checkColumn(i);
            await refill();
            // if (columnReturn===null) {
            await checkRow(i, Object.getOwnPropertyNames(tempColumns.current[i][i])[0])
            // } else {
                // checkRow(i, columnReturn);
            // }
            await refill();
        }
        setColumns(tempColumns.current)

    }

    async function checkColumn(columnIndex) {
        for (let i = 0; i < size - 2; i++){
            console.log(tempColumns.current)
            const currentPiece = Object.getOwnPropertyNames(tempColumns.current[columnIndex][i])[0];
            const nextPiece = Object.getOwnPropertyNames(tempColumns.current[columnIndex][i + 1])[0];
            if (currentPiece === nextPiece) {
                const thirdPiece = Object.getOwnPropertyNames(tempColumns.current[columnIndex][i + 2])[0];
                if (currentPiece === thirdPiece) {
                    if (i < size-3 && currentPiece === Object.getOwnPropertyNames(tempColumns.current[columnIndex][i + 3])[0]) {
                        if (i < size - 4 && currentPiece === Object.getOwnPropertyNames(tempColumns.current[columnIndex][i + 4])[0]) {
                            tempColumns.current[columnIndex].splice(i, 5);
                            break;
                            // return currentPiece;
                        }
                        tempColumns.current[columnIndex].splice(i, 4);
                        break;
                        // return currentPiece;
                    }
                    tempColumns.current[columnIndex].splice(i, 3);
                    break;
                    // return currentPiece;
                }
            }
        }
    }

    async function checkRow(rowIndex, pieceName) {
        let currentPiece
        for (let i = 0; i < size - 2; i++){
            if (i === 0) {
                currentPiece = pieceName
            } else {
                currentPiece = Object.getOwnPropertyNames(tempColumns.current[i][rowIndex])[0]
            }
            const nextPiece = Object.getOwnPropertyNames(tempColumns.current[i+1][rowIndex])[0];
            if (currentPiece === nextPiece) {
                const thirdPiece = Object.getOwnPropertyNames(tempColumns.current[i+2][rowIndex])[0];
                if (currentPiece === thirdPiece) {
                    if (i < size-3 && currentPiece === Object.getOwnPropertyNames(tempColumns.current[i+3][rowIndex])[0]) {
                        if (i < size - 4 && currentPiece === Object.getOwnPropertyNames(tempColumns.current[i+4][rowIndex])[0]) {
                            tempColumns.current[i].splice(i, 5);
                            return;
                        }
                        tempColumns.current[i].splice(i, 4);
                        return;
                    }
                    tempColumns.current[i].splice(i, 3);
                    return;
                }
            }
        }
    }

    useEffect(() => {
        const load = async () => {
            await fillColumn();
            getPiece();
            handleMatch();
        }
        load();
    },[])


    function dragStart(e, info) {

    }

    function handleDrag(e, info) {

    }

    function dragDrop(e, info) {
        console.log('drop: ', e, info)
    }

    function dragEnd(e, info) {
        console.log(info,e)
        handleMatch();
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
