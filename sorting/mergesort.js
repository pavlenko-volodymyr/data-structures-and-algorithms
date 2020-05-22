function merge(left, right) {
    let result = []
    let i = 0
    let j = 0
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++
        } else if (right[j] < left[i]) {
            result.push(right[j])
            j++
        } else {
            result.push(left[i])
            result.push(right[j])
            i++
            j++
        }
    }

    result = result.concat(left.slice(i))
    result = result.concat(right.slice(j))

    return result
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    const mid = Math.floor(arr.length / 2)
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
}

module.exports = mergeSort