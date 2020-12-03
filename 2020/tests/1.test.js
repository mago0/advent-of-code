const { readInput } = require('../src/utils')
const { partOne, partTwo} = require('../src/1')

const input = readInput('../tests/fixtures/1.txt')

test('Day 1, part 1 returns correct answer with sample data', () => {
    expect(partOne(input)).toBe(514579)
})

test('Day 1, part 2 returns correct answer with sample data', () => {
    expect(partTwo(input)).toBe(241861950)
})
