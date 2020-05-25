package main

import (
	"math"
)

// GetDigit ...
func GetDigit(number, position int) int {
	return int(math.Floor(math.Abs(float64(number))/math.Pow10(position))) % 10
}

// DigitCount ...
func DigitCount(number int) int {
	if number == 0 {
		return 1
	}
	return int(math.Floor(math.Log10(math.Abs(float64(number))))) + 1
}

// MostDigits ...
func MostDigits(arr []int) int {
	mostDigits := 0
	for _, num := range arr {
		currentDigits := DigitCount(num)
		if currentDigits > mostDigits {
			mostDigits = currentDigits
		}
	}
	return mostDigits
}

// Radixsort ...
func Radixsort(arr []int) {
	maxDigit := MostDigits(arr)
	buckets := make([][]int, 9)

	for i := 0; i < maxDigit; i++ {
		for _, num := range arr {
			digit := GetDigit(num, i)
			buckets[digit] = append(buckets[digit], num)
		}
		arr = arr[:0]
		for i, bucket := range buckets {
			arr = append(arr, bucket...)
			buckets[i] = buckets[i][:0]
		}
	}
}
