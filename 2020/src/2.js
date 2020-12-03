const { readInput } = require('./utils')

const partOne = (rawInput) => {
    const data = rawInput.split('\n').map((x) => {
        const row = x.split(/\s/)
        const match = row[0].match(/(\d+)\-(\d+)/)
        return {
            min: match[1],
            max: match[2],
            char: row[1].substring(0,1),
            str: row[2]
        }
    })
    let validCount = 0
    data.forEach((x) => {
        const matches = (x.str.match(new RegExp(x.char, 'g')) || []).length
        if (matches >= x.min && matches <= x.max) {
            validCount++
        }
    })
    return validCount
}

const partTwo = (rawInput) => {
    const data = rawInput.split('\n').map((x) => {
        const row = x.split(/\s/)
        const match = row[0].match(/(\d+)\-(\d+)/)
        return {
            pos1: match[1],
            pos2: match[2],
            char: row[1].substring(0,1),
            str: row[2]
        }
    })
    let validCount = 0
    data.forEach((x) => {
        if ((x.str.charAt(x.pos1-1) === x.char && x.str.charAt(x.pos2-1) !== x.char) ||
            (x.str.charAt(x.pos2-1) === x.char && x.str.charAt(x.pos1-1) !== x.char)) {
            validCount++
        }
    })
    return validCount
}

module.exports = {
    partOne,
    partTwo 
}

if (require.main === module) {
    const input = readInput('../input/2.txt')
    console.log('partOne:', partOne(input))
    console.log('partTwo:', partTwo(input))
}