function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function partition(arr, start, end) {
    const pivot = arr[start]
    let swapIndex = start
    for (let i = start + 1; i < end; i++) {
        if (arr[i] < pivot) {
            swapIndex++
            swap(arr, i, swapIndex)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}

function quicksort(arr, start=0, end=arr.length) {
    if (start < end) {
        const pivotIndex = partition(arr, start, end)
        quicksort(arr, start, pivotIndex - 1)
        quicksort(arr, pivotIndex + 1, end)    
    }
    return arr
}

module.exports = {
    partition,
    quicksort
}