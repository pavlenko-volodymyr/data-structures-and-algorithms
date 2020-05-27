package main

// Partition ...
func Partition(arr []int, left int, right int) int {
	pivot := arr[left]
	swapIndex := left
	for i := 0; i < right; i++ {
		if arr[i] < pivot {
			swapIndex++
			arr[swapIndex], arr[i] = arr[i], arr[swapIndex]
		}
	}
	arr[left], arr[swapIndex] = arr[swapIndex], arr[left]
	return swapIndex
}

// Quicksort ...
func Quicksort(arr []int) {
	quicksortRunner(arr, 0, len(arr))
}

func quicksortRunner(arr []int, left int, right int) {
	if left < right {
		pivotIndex := Partition(arr, left, right)
		quicksortRunner(arr, left, pivotIndex-1)
		quicksortRunner(arr, pivotIndex+1, right)
	}
	return
}
