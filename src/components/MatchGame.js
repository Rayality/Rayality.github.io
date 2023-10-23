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
        for (let i = 0; i < size; i++){
            const pieceArray = [];
            for (let j = 0; j < size; j++) {
                pieceArray.push(randomPiece());
            };
        };
        setCurrentBoard(boardArray);
    };

    useEffect(() => {
        createBoard()
    }, []);

    return (
        <div className='board'>
            {currentBoard.map((column, index) => {
                column.map((piece, index) => {
                    const [name, image] = Object.entries(piece)[0]
                    return (
                        <div className='piece'>
                            <img src={image} alt={name} />
                        </div>
                    )
                })
            })}
        </div>
    )

}


// export default function MatchGame() {
//     const [currentBoard, setCurrentBoard] = useState([]);
//     const pieces = [
//         { 'sword': sword },
//         { 'mace': mace },
//         { 'spear': spear },
//         { 'shield': shield }
//     ];
//     const size = 8;

//     function randomPiece() {
//         let randomPieceIndex = Math.floor(Math.random() * pieces.length);
//         return pieces[randomPieceIndex]
//     }

//     function checkColumnOfThree() {
//         for (let i = 0; i < 47; i++){
//             const columnCheck = [i, i + size, i + size * 2];
//             const currentPiece = Object.keys(currentBoard[i])[0];
//             if (columnCheck.every(pieceIndex => Object.keys(currentBoard[pieceIndex])[0] === currentPiece)) {
//                 columnCheck.forEach(pieceIndex => currentBoard[pieceIndex] = randomPiece());
//             };
//         };
//     };

//     function checkColumnOfFour() {
//         for (let i = 0; i < 39; i++){
//             const columnCheck = [i, i + size, i + size * 2, i + size * 3];
//             const currentPiece = Object.keys(currentBoard[i])[0];
//             if (columnCheck.every(pieceIndex => Object.keys(currentBoard[pieceIndex])[0] === currentPiece)) {
//                 columnCheck.forEach(pieceIndex => currentBoard[pieceIndex] = randomPiece());
//             };
//         };
//     };

//     function checkColumnOfFive() {
//         for (let i = 0; i < 31; i++){
//             const columnCheck = [i, i + size, i + size * 2, i + size * 3, i + size * 4];
//             const currentPiece = Object.keys(currentBoard[i])[0];
//             if (columnCheck.every(pieceIndex => Object.keys(currentBoard[pieceIndex])[0] === currentPiece)) {
//                 columnCheck.forEach(pieceIndex => currentBoard[pieceIndex] = randomPiece());
//             };
//         };
//     };

//     function checkRowOfThree() {
//         for (let i = 0; i < 64; i++) {
//             const rowCheck = [i, i + 1, i + 2];
//             const currentPiece = Object.keys(currentBoard[i])[0];
//             const skipped = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64];
//             if (skipped.includes(i)) continue;
//             if (rowCheck.every(pieceIndex => Object.keys(currentBoard[pieceIndex])[0] === currentPiece)) {
//                 rowCheck.forEach(pieceIndex => currentBoard[pieceIndex] = randomPiece());
//             };
//         }
//     };

//     function checkRowOfFour() {
//         for (let i = 0; i < 64; i++) {
//             const rowCheck = [i, i + 1, i + 2, i + 3];
//             const currentPiece = Object.keys(currentBoard[i])[0];
//             const skipped = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64];
//             if (skipped.includes(i+1)) continue;
//             if (rowCheck.every(pieceIndex => Object.keys(currentBoard[pieceIndex])[0] === currentPiece)) {
//                 rowCheck.forEach(pieceIndex => currentBoard[pieceIndex] = randomPiece());
//             };
//         }
//     };

//     function checkRowOfFive() {
//         for (let i = 0; i < 64; i++) {
//             const rowCheck = [i, i + 1, i + 2, i + 3, i + 4];
//             const currentPiece = Object.keys(currentBoard[i])[0];
//             const skipped = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64, 65, 66];
//             if (skipped.includes(i+2)) continue;
//             if (rowCheck.every(pieceIndex => Object.keys(currentBoard[pieceIndex])[0] === currentPiece)) {
//                 rowCheck.forEach(pieceIndex => currentBoard[pieceIndex] = randomPiece());
//             };
//         }
//     };

//     function createBoard() {
//         const piecesArray = [];
//         for (let i = 0; i < (size*size); i++){
//             piecesArray.push(randomPiece());
//         };
//         setCurrentBoard(piecesArray);
//     };

//     useEffect(() => {
//         createBoard()
//     }, []);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             console.log('checking')
//             checkColumnOfFive()
//             checkColumnOfFour()
//             checkColumnOfThree()
//             checkRowOfFive()
//             checkRowOfFour()
//             checkRowOfThree()
//             setCurrentBoard([...currentBoard])
//         }, 300);
//         return () => clearInterval(timer)
//     }, [currentBoard])

//     return (
//         <div className='board'>
//             {currentBoard.map((piece, index) => {
//                 const [name, image] = Object.entries(piece)[0]
//                 return (
//                     <div className='piece' key={index}>
//                         {index}
//                         <img className='piece-image' src={image} alt={name} />
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }





// export default function MatchGame() {
//     const pieces = [
//         {'sword': sword},
//         {'mace': mace},
//         {'spear': spear},
//         {'shield': shield}
//     ]
//     let [columns, setColumns] = useState([]);
//     let size = 8;
//     let tempColumns = useRef([]);

//     async function fillColumn() {
//         console.log('filling columns')
//         for (let i = 0; i < size; i++){
//             const column = [];
//             for (let i = 0; i < size; i++){
//                 let randomPieceIndex = Math.floor(Math.random() * pieces.length);
//                 column.push(pieces[randomPieceIndex]);
//             }
//             tempColumns.current.push(column);
//         }
//     }

//     fillColumn();

//     async function refill() {
//         for (let i = 0; i < size; i++){

//             if (tempColumns.current[i].length < size) {
//                 console.log('refilling',tempColumns.current[i].length)
//                 let randomPieceIndex = Math.floor(Math.random() * pieces.length);
//                 tempColumns.current[i].unshift(pieces[randomPieceIndex]);
//                 i--;
//             }
//         }
//     }

//     const [dragConstraints, setDragConstraints] = useState({});

//     async function getPiece() {
//         const piece = document.querySelector('.piece');
//         if (piece !== null) {
//             setDragConstraints(
//                 {
//                     top: -piece.clientHeight,
//                     bottom: piece.clientHeight,
//                     left: -piece.clientWidth,
//                     right: piece.clientWidth
//                 }
//             )
//         } else {
//             setTimeout(getPiece, 500)
//         }
//     }

//     async function handleMatch() {
//         for (let i = 0; i < size - 2; i++){
//             await checkColumn(i);
//             await refill();
//             await checkRow(i, Object.getOwnPropertyNames(tempColumns.current[i][i])[0])
//             await refill();
//         }
//         setColumns(tempColumns.current)
//     }

//     async function checkColumn(columnIndex) {
//         for (let i = 0; i < size - 2; i++){
//             const currentPiece = Object.getOwnPropertyNames(tempColumns.current[columnIndex][i])[0];
//             const nextPiece = Object.getOwnPropertyNames(tempColumns.current[columnIndex][i + 1])[0];
//             if (currentPiece === nextPiece) {
//                 const thirdPiece = Object.getOwnPropertyNames(tempColumns.current[columnIndex][i + 2])[0];
//                 if (currentPiece === thirdPiece) {
//                     if (i < size-3 && currentPiece === Object.getOwnPropertyNames(tempColumns.current[columnIndex][i + 3])[0]) {
//                         if (i < size - 4 && currentPiece === Object.getOwnPropertyNames(tempColumns.current[columnIndex][i + 4])[0]) {
//                             console.log('before splice 5',tempColumns.current[columnIndex])
//                             tempColumns.current[columnIndex].splice(i, 5);
//                             console.log('after splice',tempColumns.current[columnIndex])
//                             break;

//                         }
//                         console.log('before spliced 4',tempColumns.current[columnIndex])
//                         tempColumns.current[columnIndex].splice(i, 4);
//                         console.log('after splice',tempColumns.current[columnIndex])
//                         break;

//                     }
//                     console.log('before spliced 3',tempColumns.current[columnIndex])
//                     tempColumns.current[columnIndex].splice(i, 3);
//                     console.log('after splice',tempColumns.current[columnIndex])
//                     break;

//                 }
//             }
//         }
//     }

//     async function checkRow(rowIndex, pieceName) {
//         let currentPiece = pieceName;
//         for (let i = 0; i < size - 2; i++){
//             const nextPiece = Object.getOwnPropertyNames(tempColumns.current[i+1][rowIndex])[0];
//             if (currentPiece === nextPiece) {
//                 const thirdPiece = Object.getOwnPropertyNames(tempColumns.current[i+2][rowIndex])[0];
//                 if (currentPiece === thirdPiece) {
//                     if (i < size-3 && currentPiece === Object.getOwnPropertyNames(tempColumns.current[i+3][rowIndex])[0]) {
//                         if (i < size - 4 && currentPiece === Object.getOwnPropertyNames(tempColumns.current[i+4][rowIndex])[0]) {
//                             tempColumns.current[i].splice(i, 5);
//                             return;
//                         }
//                         tempColumns.current[i].splice(i, 4);
//                         return;
//                     }
//                     tempColumns.current[i].splice(i, 3);
//                     return;
//                 }
//             }
//         }
//     }


//     useEffect(() => {
//         const load = async () => {
//             setColumns(tempColumns.current);
//             getPiece();
//             handleMatch();
//         }
//         load();
//     }, []);


//     function dragStart(e, info) {

//     }

//     function handleDrag(e, info) {

//     }

//     function dragDrop(e, info) {
//         console.log('drop: ', e, info)
//     }

//     function dragEnd(e, info) {
//         console.log(info,e)
//         handleMatch();
//     }

//     return (
//         <div>
//             <div className='board'>
//                 {columns.length > 0 ? columns.map((column, index1) => {
//                     return (
//                         <div
//                             key={index1}
//                             className='column'
//                         >
//                             {column.map((piece, index) => {
//                                 const entries = Object.entries(piece)
//                                 const [key,value] = entries[0]
//                             return (
//                                 <motion.div
//                                     key={index}
//                                     columnindex={index1}
//                                     pieceindex={index}
//                                     piecetype={key}
//                                     className='piece'
//                                     drag
//                                     dragConstraints={dragConstraints}
//                                     dragSnapToOrigin={true}
//                                     dragElastic={0.05}
//                                     dragDirectionLock
//                                     onDragStart={dragStart}
//                                     onDrag={handleDrag}
//                                     onDragOver={(e) => e.preventDefault()}
//                                     onDragEnter={(e) => e.preventDefault()}
//                                     onDragLeave={(e) => e.preventDefault()}
//                                     onDrop={dragDrop}
//                                     onDragEnd={dragEnd}
//                                     style={{
//                                         'backgroundImage': `url(${value})`,
//                                         'backgroundPosition':'center'
//                                     }}
//                                 >

//                                 </motion.div>
//                             )
//                             })}
//                         </div>
//                     )
//                 }) : null
//                 }
//             </div>
//         </div>
//     )
// }
