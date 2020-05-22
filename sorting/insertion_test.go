package main

import (
	"reflect"
	"testing"
)

func TestInsertionSort(t *testing.T) {
	type testCase struct {
		given    []int
		expected []int
	}

	testCases := []testCase{
		{[]int{3, 4, 1, 5, 6, 1, 7}, []int{1, 1, 3, 4, 5, 6, 7}},
		{[]int{}, []int{}},
		{[]int{1}, []int{1}},
		{[]int{2, 1}, []int{1, 2}},
	}

	for _, testCase := range testCases {
		InsertionSort(testCase.given)
		if !reflect.DeepEqual(testCase.given, testCase.expected) {
			t.Errorf("Expected '%v' doesn't equal to given '%v'", testCase.expected, testCase.given)
		}
	}
}
