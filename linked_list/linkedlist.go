package main

import "fmt"

// Node ...
type Node struct {
	data interface{}
	next *Node
}

// LinkedList ...
type LinkedList struct {
	head *Node
}

func (linkedList *LinkedList) isEmpty() bool {
	return linkedList.head == nil
}

func (linkedList *LinkedList) insertAtHeat(data interface{}) {
	linkedList.head = &Node{data, linkedList.head}
}

func main() {
	linkedList := &LinkedList{}
	fmt.Println(linkedList.isEmpty())
	linkedList.insertAtHeat(1)
}
