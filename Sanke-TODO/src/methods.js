import { board, player } from "./data.js";

export class Move{
    static up(){
        if (player.coordinate.y > 0){
            player.coordinate.y -= player.speed;
            document.getElementById(player.id).style.top = `${player.coordinate.y}px`;

        }
    }
    
    static down(){
        if (player.coordinate.y < board.size.width - player.size.width){
            player.coordinate.y += player.speed;
            document.getElementById(player.id).style.top = `${player.coordinate.y}px`;

        }
    }
    
    static right(){
        if (player.coordinate.x < board.size.width - player.size.width){
            player.coordinate.x += player.speed;
            document.getElementById(player.id).style.left = `${player.coordinate.x}px`;
            
        }
    }
    
    static left(){
        if (player.coordinate.x > 0){
            player.coordinate.x -= player.speed;
            document.getElementById(player.id).style.left = `${player.coordinate.x}px`;

        }
    }
}

export class Option{

    static changeColor(color){
        player.color = color
        document.getElementById(player.id).style.backgroundColor = player.color;
    }

    // Version 1
    static musicController(){
        if (board.music.isActive){
            document.getElementById(board.music.id).pause()
            board.music.isActive = false

        } else {
            document.getElementById(board.music.id).play();
            board.music.isActive = true
           
        }
    }

    // Version 2
    static musicController(){
        if (board.music.isActive){
            board.music.object.pause()
            board.music.isActive = false

        } else {
            board.music.object.play()
            board.music.isActive = true
           
        }

    }
}