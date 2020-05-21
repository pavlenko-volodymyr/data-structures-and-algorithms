package main

import (
	"reflect"
	"testing"
)

type Case struct {
	given    []int
	expected []int
}

func TestSelectionSort(t *testing.T) {
	testCases := []Case{
		{[]int{3, 4, 1, 5, 6, 1, 7}, []int{1, 1, 3, 4, 5, 6, 7}},
		{[]int{}, []int{}},
		{[]int{1}, []int{1}},
		{[]int{2, 1}, []int{1, 2}},
	}

	for _, testCase := range testCases {
		SelectionSort(testCase.given)
		if !reflect.DeepEqual(testCase.given, testCase.expected) {
			t.Errorf("Expected '%v' doesn't equal to given '%v'", testCase.expected, testCase.given)
		}
	}
}
