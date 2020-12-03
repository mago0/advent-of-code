const { readInput } = require('../src/utils')
const { partOne, partTwo } = require('../src/3')

const input = readInput('../tests/fixtures/3.txt')

test('Day 3, part 1 returns correct answer with sample data', () => {
    expect(partOne(input, 3, 1)).toBe(7)
})

test('Day 3, part 2 returns correct answer with sample data', () => {
    const a = partOne(input, 1, 1) 
    const b = partOne(input, 3, 1) 
    const c = partOne(input, 5, 1) 
    const d = partOne(input, 7, 1) 
    const e = partOne(input, 1, 2) 

    const answer = a * b * c * d * e

    expect(answer).toBe(336)
})