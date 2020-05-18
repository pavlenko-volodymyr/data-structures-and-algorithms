package main

import "fmt"

func binarySearch(arr []int, value int) int {
	if len(arr) == 0 {
		return -1
	}

	left := 0
	right := len(arr) - 1
	var mid int

	for left <= right {
		mid = left + ((right - left) / 2)
		if arr[mid] == value {
			return mid
		} else if arr[mid] > value {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	return -1
}

func main() {
	fmt.Println(binarySearch([]int{1, 2, 3, 4, 5}, 2) == 1)
	fmt.Println(binarySearch([]int{1, 2, 3, 4, 5}, 6) == -1)
	fmt.Println(binarySearch([]int{}, 6) == -1)
}
