const { readInput } = require('./utils')

const buildGrid = (rawInput, slope) => {
    const startGrid = rawInput.split('\n').map(x=>x.split(''))
    let endGrid = startGrid

    while (endGrid.length / endGrid[0].length > slope) {
        for (let row = 0; row < endGrid.length; row++) {
            endGrid[row] = [ ...endGrid[row], ...startGrid[row] ]
        }
    }
    
    return endGrid 
}

const partOne = (rawInput, xMove, yMove) => {
    const slope = yMove / xMove
    const grid = buildGrid(rawInput, slope)

    let y = 0
    let x = 0
    let trees = 0

    while (y < grid.length && x < grid[0].length) {
        if (grid[y][x] === '#') {
            trees += 1
        }

        y += yMove
        x += xMove
    }
    return trees 
}

const partTwo = (rawInput) => {
    const data = rawInput.split('\n')
    if (data) { return true }
}

module.exports = {
    partOne,
    partTwo 
}

if (require.main === module) {
    const input = readInput('../input/3.txt')
    console.log('partOne:', partOne(input, 3, 1))

    const a = partOne(input, 1, 1)
    const b = partOne(input, 3, 1) 
    const c = partOne(input, 5, 1) 
    const d = partOne(input, 7, 1) 
    const e = partOne(input, 1, 2) 

    const answer = a * b * c * d * e
    console.log('partTwo:', answer)
}