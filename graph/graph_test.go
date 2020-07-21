package main

import (
	"testing"
)

func TestAddVertex(t *testing.T) {
	g := NewGraph()
	if g.vertices != nil {
		t.Errorf("vertices isn't empty")
	}

	vertex1 := Vertex{"vertex1"}
	g.AddVertex(vertex1)
	if _, exists := g.vertices[vertex1]; !exists {
		t.Errorf("new vertex hasn't been saved")
	}
}

func TestAddEdge(t *testing.T) {
	g := NewGraph()
	vertex1 := Vertex{"vertex1"}
	vertex2 := Vertex{"vertex2"}
	g.AddVertex(vertex1)
	g.AddVertex(vertex2)
	g.AddEdge(vertex1, vertex2)
	if g.vertices[vertex1][0] != vertex2 || g.vertices[vertex2][0] != vertex1 {
		t.Errorf("new edge between %v and %v hasn't been saved", vertex1, vertex2)
	}
}

func TestRemoveEdge(t *testing.T) {
	g := NewGraph()
	vertex1 := Vertex{"vertex1"}
	vertex2 := Vertex{"vertex2"}
	g.AddVertex(vertex1)
	g.AddVertex(vertex2)
	g.AddEdge(vertex1, vertex2)
	g.RemoveEdge(vertex1, vertex2)

	if len(g.vertices[vertex1]) != 0 || len(g.vertices[vertex2]) != 0 {
		t.Errorf("new edge between %v and %v hasn't been removed", vertex1, vertex2)
	}
}
