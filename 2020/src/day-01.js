const day1Pt1 = (data) => {
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

const day1Pt2 = (data) => {
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
    day1Pt1,
    day1Pt2
}
