const mergeSort = require('./mergesort')

test('merge sort full', () => {
    const arr = [3, 2, 6, 1, 4, 6, 100, -1]
    const given = mergeSort(arr)
    const expected = [-1, 1, 2, 3, 4, 6, 6, 100]
    expect(given).toEqual(expected)
})

test('merge sort empty', () => {
    const arr = []
    const given = mergeSort(arr)
    const expected = []
    expect(given).toEqual(expected)
})

test('merge sort minimal', () => {
    const arr = [2, 1]
    const given = mergeSort(arr)
    const expected = [1, 2]
    expect(given).toEqual(expected)
})