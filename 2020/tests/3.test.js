const { readInput } = require('../src/utils')
const { partOne, partTwo } = require('../src/3')

const input = readInput('../tests/fixtures/3.txt')

test('Day 3, part 1 returns correct answer with sample data', () => {
    expect(partOne(input)).toBe(true)
})

test('Day 3, part 2 returns correct answer with sample data', () => {
    expect(partTwo(input)).toBe(true)
})