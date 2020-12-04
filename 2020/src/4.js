const { readInput } = require('./utils')
const Joi = require('joi')

const reqFields = Joi.object({
    byr: Joi.number().min(1920).max(2002).required(),
    iyr: Joi.number().min(2010).max(2020).required(),
    eyr: Joi.number().min(2020).max(2030).required(),
    hgt: Joi.string().regex(/((1[5-8][0-9]|19[0-3])cm|(59|6[0-9]|7[0-6])in)/).required(),
    hcl: Joi.string().regex(/#[0-9a-f]{6}/).required(),
    ecl: Joi.string().valid('amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth').required(),
    pid: Joi.string().regex(/^[0-9]{9}$/).required(),
    cid: Joi.optional()
})

const partOne = (rawInput) => {
    const passportsRaw = rawInput.split(/\n{2,}/g).map(x=>x.split(/[\s\n]/))

    const passportsFinal = []
    for (let x = 0; x < passportsRaw.length; x++) {
        const passport = {}
        passportsRaw[x].forEach((keyVal) => {
            const split = keyVal.split(':') 
            passport[split[0]] = split[1]
        })
        passportsFinal[x] = passport 
    }

    console.log(passportsFinal.length)
    let validCnt = 0
    for (let x = 0; x < passportsFinal.length; x++) {
        const { error } = reqFields.validate(passportsFinal[x])
        if (error) {
            // debugging
            // console.log(error)
            continue
        }
        validCnt++
    }
    return validCnt
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

    //console.log('partTwo:', partTwo(input))
}