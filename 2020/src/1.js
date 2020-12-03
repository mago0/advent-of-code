const { readInput } = require('./utils')

const partOne = (rawInput) => {
    const data = rawInput.split('\n').map(x=>+x)
    let answer = undefined

    data.some((amtX) => {
        data.some((amtY) => {
            if (amtX !== amtY && amtX + amtY === 2020) {
                return answer = amtX * amtY
            }
        })
        return answer
    })
    return answer
}

const partTwo = (rawInput) => {
    const data = rawInput.split('\n').map(x=>+x)
    let answer = undefined

    data.some((amtX) => {
        data.some((amtY) => {
            if (amtX !== amtY && amtX + amtY < 2020) {
                data.some((amtZ) => {
                    if ( ![amtX, amtY].includes(amtZ) && amtX + amtY + amtZ === 2020) {
                        return answer = amtX * amtY * amtZ
                    }
                })
            }
            return answer
        })
        return answer
    })
    return answer
}

module.exports = {
    partOne,
    partTwo
}

if (require.main === module) {
    const input = readInput('../input/1.txt')
    console.log('partOne:', partOne(input)) 
    console.log('partTwo:', partTwo(input)) 
}