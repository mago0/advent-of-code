const fs = require('fs')
// const path = require('path')

const readInput = (file) => {
    try {
        const dataBuffer = fs.readFileSync(file)
        return dataBuffer.toString()
    } catch (e) {
        return ''     
    }
}

module.exports = {
    readInput
}