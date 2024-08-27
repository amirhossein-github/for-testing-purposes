# for-testing-purposes
To test and discover new things 🥼🔎.
let images = []

function setImages(){
    // It covers all 30 folders: from 1 to 30
    for (let i = 0; i < 30; i++) {
        const testNumber = i + 1

        images.push(
            {
                id: `test${testNumber}`,
                imageQuestion: `./Images/${testNumber}/test${testNumber}.png`,
                imageAnswers: []
            }
        )

        // from directory 1 - 12 that they are contain 6 images
        if (i <= 11){
            for (let x = 1; x <= 6; x++) {
                images[i].imageAnswers.push(
                    `./Images/${testNumber}/${testNumber}-${x}.png`
                )
            }

        // from directory 13 - 30 that they are contain 8 images
        } else {
            for (let x = 1; x <= 8; x++) {
                images[i].imageAnswers.push(
                    `./Images/${testNumber}/${testNumber}-${x}.png`
                )
            }
        }
    }
}

setImages()
