const swap = (arr, i, j) => {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }
        }
    }
}

const arr = [3, 4, 1, 5, 6, 1, 7]
bubbleSort(arr)
console.log(arr)