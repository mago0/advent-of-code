const path = require('path')
const fs = require('fs')

const readInput = (filePath) => {
    try {
        const dataBuffer = fs.readFileSync(path.join(__dirname, filePath))
        return dataBuffer.toString()
    } catch (e) {
        return ''     
    }
}

module.exports = {
    readInput
}