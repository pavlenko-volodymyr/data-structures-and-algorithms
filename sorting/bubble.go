package main

import "fmt"

func bubble(arr []int) {
	for i := range arr {
		for j := range arr[:len(arr)-i-1] {
			if arr[j] > arr[j+1] {
				arr[j], arr[j+1] = arr[j+1], arr[j]
			}
		}
	}
}

func main() {
	arr := []int{3, 4, 1, 5, 6, 1, 7}
	bubble(arr)
	fmt.Println(arr)
}
