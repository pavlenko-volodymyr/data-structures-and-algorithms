package main

import "fmt"

func selectionSort(arr []int) {
	for i := 0; i < len(arr); i++ {
		min := i
		for j := i + 1; j < len(arr); j++ {
			if arr[j] < arr[min] {
				min = j
			}
		}
		arr[i], arr[min] = arr[min], arr[i]
	}
}

func main() {
	arr := []int{3, 4, 1, 5, 6, 1, 7}
	selectionSort(arr)
	fmt.Println(arr)
}
