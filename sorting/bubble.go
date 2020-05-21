package main

// BubbleSort ...
func BubbleSort(arr []int) {
	for i := range arr {
		for j := range arr[:len(arr)-i-1] {
			if arr[j] > arr[j+1] {
				arr[j], arr[j+1] = arr[j+1], arr[j]
			}
		}
	}
}
