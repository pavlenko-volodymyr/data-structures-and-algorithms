package main

import (
	"reflect"
	"testing"
)

func TestBubbleSort(t *testing.T) {
	given := []int{3, 4, 1, 5, 6, 1, 7}
	expected := []int{1, 1, 3, 4, 5, 6, 7}
	BubbleSort(given)
	if !reflect.DeepEqual(given, expected) {
		t.Error("Failed")
	}
}
