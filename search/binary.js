function binarySearchIterative(arr, value) {
    if (arr.length === 0) return -1
    let left = 0
    let right = arr.length - 1
    let mid
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2)
        if (arr[mid] === value) {
            return mid
        } else if (arr[mid] > value) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return -1
}


function binarySearchRecursive(arr, value, left, right) {
    if (arr.length === 0) return -1

    left = left || 0
    right = right || arr.length - 1

    if (left > right) {
        return -1
    }
    const mid = left + Math.floor((right - left) / 2)
    if (arr[mid] === value) {
        return mid
    } else if (arr[mid] > value) {
        return binarySearchRecursive(arr, value, left, mid - 1)
    } else {
        return binarySearchRecursive(arr, value, mid + 1, right)
    }
}

console.log(binarySearchIterative([1, 2, 3, 4, 5, 6], 3) === 2)
console.log(binarySearchIterative([1, 2, 3, 4, 5, 6], 7) === -1)
console.log(binarySearchIterative([], 5) === -1)

console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6], 3) === 2)
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6], 7) === -1)
console.log(binarySearchRecursive([], 5) === -1)