import { Move, Option } from "./methods.js"
import { player } from './data.js';

export function controller(e){
    // Keyboard Controller
    if (e.type === 'keydown') {
        switch (e.keyCode) {

            // Digit Keys
            case 49:
                Option.changeColor('red')
                break;
    
            case 50:
                Option.changeColor('green')
                break;
    
            case 51:
                Option.changeColor('blue')
                break;


            // Arrow Keys
            case 38:
                Move.up()
                break;

            case 40:
                Move.down()
                break

            case 39:
                Move.right()
                break;

            case 37:
                Move.left()
                break;
                

            // Space Key
            case 32:
                Option.musicController()
                break


            // Etc
            default:
                console.warn(`Wrong Key: ${e.key}`)
                break;
        }

    }

    // Mouse:over Controller
    if (e.target.id === player.id && e.type === 'mouseover') {
        const temp = player.color
        Option.changeColor('black')
        player.color = temp
        
    }

    // Mouse:out Controller
    if (e.target.id === player.id && e.type === 'mouseout') {
        Option.changeColor(player.color)
        
    }
}
