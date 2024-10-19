import { board, player } from './data.js';

export function render(){

    // chess board
    const chessBoard = document.createElement('div')
    chessBoard.id = board.id
    chessBoard.style.width = `${board.size.width}px`
    chessBoard.style.height = `${board.size.height}px`
    chessBoard.style.margin = '50px auto';
    chessBoard.style.position = 'relative'

    // Rasterization
    let isTrue = false

    // Rows
    for (let ii = 0; ii < board.block.height; ii++) {
        const row = document.createElement('div')
        row.className = 'row'
        row.style.display = 'flex'

        isTrue = isTrue ? false : true
        for (let i = 0; i < board.block.width; i++) {
            const block = document.createElement('div')

            if (i % 2 == 0) {
                block.className = isTrue ? 'color-bold' : 'color-pale'
                
            } else {
                block.className = isTrue ? 'color-pale' : 'color-bold'
                
            }

            // set background color and styles
            block.style.backgroundColor = block.className === 'color-bold' ? board.block.color1 :  board.block.color2
            block.style.flexGrow = 1
            block.style.aspectRatio = 1
    
            // HTML injection
            row.appendChild(block)
        }
        chessBoard.appendChild(row)
    }
    document.body.appendChild(chessBoard)


    const divPlayer = document.createElement('div')
    divPlayer.id = player.id
    divPlayer.style.backgroundColor = player.color
    divPlayer.style.width = `${player.size.width}px`
    divPlayer.style.height = `${player.size.height}px`
    divPlayer.style.position = 'absolute'
    divPlayer.style.left = player.coordinate.x
    divPlayer.style.top = player.coordinate.y
    chessBoard.appendChild(divPlayer)

    document.body.style.backgroundColor = board.color
}