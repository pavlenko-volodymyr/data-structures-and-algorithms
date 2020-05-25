package main

import (
	"reflect"
	"testing"
)

func TestGetDigit(t *testing.T) {
	type testCase struct {
		number   int
		position int
		digit    int
	}
	testCases := []testCase{
		{12345, 0, 5},
		{-12345, 3, 2},
		{1, 1, 0},
	}

	for _, testCase := range testCases {
		digit := GetDigit(testCase.number, testCase.position)
		if digit != testCase.digit {
			t.Errorf(
				"Digit '%v' from position '%v' of number '%v' doesn't equal to '%v'",
				testCase.digit, testCase.position, testCase.number, digit,
			)
		}
	}
}

func TestDigitCount(t *testing.T) {
	type testCase struct {
		number int
		count  int
	}
	testCases := []testCase{
		{12345, 5},
		{1, 1},
		{321, 3},
		{-100, 3},
	}

	for _, testCase := range testCases {
		count := DigitCount(testCase.number)
		if count != testCase.count {
			t.Errorf(
				"Count '%v' for '%v' doesn't equal to '%v'",
				testCase.count, testCase.number, count,
			)
		}
	}
}

func TestMostDigits(t *testing.T) {
	type testCase struct {
		arr   []int
		count int
	}
	testCases := []testCase{
		{[]int{12345, 1, 2, 5}, 5},
		{[]int{12345, 1, 20000000, 5}, 8},
	}

	for _, testCase := range testCases {
		count := MostDigits(testCase.arr)
		if count != testCase.count {
			t.Errorf(
				"Count '%v' for '%v' doesn't equal to '%v'",
				testCase.count, testCase.arr, count,
			)
		}
	}
}

func TestRadixsort(t *testing.T) {
	type testCase struct {
		arr      []int
		expected []int
	}
	testCases := []testCase{
		{[]int{}, []int{}},
		{[]int{2, 3, 1}, []int{1, 2, 3}},
		{[]int{2}, []int{2}},
		{[]int{10, 1, 15, 8, 1}, []int{1, 1, 8, 10, 15}},
	}

	for _, testCase := range testCases {
		Radixsort(testCase.arr)
		if !reflect.DeepEqual(testCase.arr, testCase.expected) {
			t.Errorf(
				"Given '%v' doesn't equal to expected '%v'",
				testCase.arr, testCase.expected,
			)
		}
	}
}
