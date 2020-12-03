const { readInput } = require('./utils')

const partOne = (rawInput) => {
    const data = rawInput.split('\n')
    if (data) { return true }
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
    console.log('partOne:', partOne(input))
    console.log('partTwo:', partTwo(input))
}