const {quicksort, partition} = require('./quicksort')

test('partition of quicksort', () => {
    const arr = [3, 4, 1, 6, -1]
    const pivotIndex = partition(arr, 0, arr.length)
    expect(pivotIndex).toEqual(2)
    expect(arr).toEqual([-1, 1, 3, 6, 4])
})

test('quick sort full', () => {
    const arr = [3, 2, 6, 1, 4, 6, 100]
    quicksort(arr)
    const expected = [1, 2, 3, 4, 6, 6, 100]
    expect(arr).toEqual(expected)
})

test('quick sort empty', () => {
    const arr = []
    quicksort(arr)
    const expected = []
    expect(arr).toEqual(expected)
})

test('quick sort minimal', () => {
    const arr = [2, 1]
    quicksort(arr)
    const expected = [1, 2]
    expect(arr).toEqual(expected)
})