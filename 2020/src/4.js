const { readInput } = require('./utils')

const partOne = (rawInput) => {
    return true
}

const partTwo = (rawInput) => {
    return true
}

module.exports = {
    partOne,
    partTwo 
}

if (require.main === module) {
    const input = readInput('../input/4.txt')
    console.log('partOne:', partOne(input))

    console.log('partTwo:', partTwo(input))
}