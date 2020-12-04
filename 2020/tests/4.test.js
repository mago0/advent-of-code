const { readInput } = require('../src/utils')
const { partOne, partTwo } = require('../src/4')

const input = readInput('../tests/fixtures/4.txt')

test('Day 4, part 1 returns correct answer with sample data', () => {
    expect(partOne(input)).toBe(true)
})