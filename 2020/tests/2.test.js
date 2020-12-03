const { readInput } = require('../src/utils')
const { partOne, partTwo } = require('../src/2')

const input = readInput('../tests/fixtures/2.txt')

test('Day 2, part 1 returns correct answer with sample data', () => {
    expect(partOne(input)).toBe(2)
})

test('Day 2, part 2 returns correct answer with sample data', () => {
    expect(partTwo(input)).toBe(1)
})