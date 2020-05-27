package main

import (
	"reflect"
	"testing"
)

func TestPartition(t *testing.T) {
	arr := []int{13, 5, 1, 7, 10, 14, 100}
	expectedPartion := []int{10, 5, 1, 7, 13, 14, 100}
	expectedPivotIndex := 4
	givenPivotIndex := Partition(arr, 0, len(arr))
	if givenPivotIndex != expectedPivotIndex {
		t.Errorf("Given index '%v' doesn't equal to expected '%v'", givenPivotIndex, expectedPivotIndex)
	}
	if !reflect.DeepEqual(arr, expectedPartion) {
		t.Errorf("Given arr '%v' doesn't equal to expected '%v'", arr, expectedPartion)
	}
}

func TestQuicksort(t *testing.T) {
	arr := []int{13, 5, 1, 7, 10, 14, 100}
	expected := []int{1, 5, 7, 10, 13, 14, 100}
	Quicksort(arr)
	if !reflect.DeepEqual(arr, expected) {
		t.Errorf("Given arr '%v' doesn't equal to expected '%v'", arr, expected)
	}
}
