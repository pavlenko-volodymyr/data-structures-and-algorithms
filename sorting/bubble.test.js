const bubbleSort = require('./bubble')

test('bubble sort', () => {
    const testCases = [
        {
            given: [3, 4, 1, 5, 6, 1, 7],
            expected: [1, 1, 3, 4, 5, 6, 7]
        },
        {
            given: [1],
            expected: [1]
        },
        {
            given: [2, 1],
            expected: [1, 2]
        }
    ]

    for (let testCase of testCases) {
        bubbleSort(testCase.given)
        expect(testCase.given).toEqual(testCase.expected)    
    }
})