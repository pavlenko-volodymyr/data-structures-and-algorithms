package main

// InsertionSort ...
func InsertionSort(arr []int) {
	for i := 1; i < len(arr); i++ {
		currentValue := arr[i]
		var j int
		for j = i - 1; j >= 0 && arr[j] > currentValue; j-- {
			arr[j+1] = arr[j]
		}
		arr[j+1] = currentValue
	}
}
