const path = require('path')
const { readInput } = require('./fixtures/utils')
const { day1Pt1, day1Pt2 } = require('../src/day-01')

const day01Input = readInput(path.join(__dirname, './fixtures/day-01.txt')).split('\n').map(x=>+x)

test('Day 1, part 1', () => {
    expect(day1Pt1(day01Input)).toBe(197451)
})

test('Day 1, part 2', () => {
    expect(day1Pt2(day01Input)).toBe(138233720)
})
