package main

// Vertex ...
type Vertex struct {
	label string
}

// Graph ...
type Graph struct {
	vertices map[Vertex][]Vertex
}

// NewGraph ...
func NewGraph() *Graph {
	var g Graph
	g.vertices = make(map[Vertex][]Vertex)
	return &g
}

// AddVertex ...
func (g *Graph) AddVertex(vertex Vertex) {
	if g.vertices == nil {
		g.vertices = make(map[Vertex][]Vertex)
	}

	if _, exists := g.vertices[vertex]; !exists {
		g.vertices[vertex] = []Vertex{}
	}
}

// AddEdge ...
func (g *Graph) AddEdge(vertex1, vertex2 Vertex) {
	g.AddVertex(vertex1)
	g.vertices[vertex1] = append(g.vertices[vertex1], vertex2)

	g.AddVertex(vertex2)
	g.vertices[vertex2] = append(g.vertices[vertex2], vertex1)
}

// RemoveEdge ...
func (g *Graph) RemoveEdge(vertex1, vertex2 Vertex) {
	removeIndex := -1
	for index, n := range g.vertices[vertex1] {
		if n == vertex2 {
			removeIndex = index
			break
		}
	}
	if removeIndex != -1 {
		g.vertices[vertex1] = append(g.vertices[vertex1][:removeIndex], g.vertices[vertex1][removeIndex+1:]...)
		removeIndex = -1
	}

	for index, n := range g.vertices[vertex2] {
		if n == vertex1 {
			removeIndex = index
			break
		}
	}
	if removeIndex != -1 {
		g.vertices[vertex2] = append(g.vertices[vertex2][:removeIndex], g.vertices[vertex2][removeIndex+1:]...)
	}
}
