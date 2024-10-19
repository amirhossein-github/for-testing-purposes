export let player = {
    id: 'player',
    speed: 50,
    color: 'rgb(77,115,240)',
    coordinate: {
        x: 0,
        y: 0
    },
    size:{
        width: 50,
        height: 50
    }
}

export let board = {
    id: 'board',
    color: 'rgb(0, 82, 4)',
    size:{
        width: 500,
        height: 500
    },
    music: {
        object: new Audio('./assets/sounds/sound.mp3'),
        isActive: false
    },
    block: {
        width: 10,
        height: 10,
        color1: 'rgb(165,211,72)',
        color2: 'rgb(138,198,57)'
    }
}