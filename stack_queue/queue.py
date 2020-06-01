class Node:
    def __init__(self, value, next_node=None):
        self.value = value
        self.next_node = next_node


class Queue:
    def __init__(self):
        self.first = None
        self.last = None
        self.size = 0
    
    def is_empty(self):
        return self.size == 0

    def enqueue(self, value):
        if self.is_empty():
            self.first = Node(value)
            self.last = self.first
        else:
            self.last.next_node = Node(value)
            self.last = self.last.next_node
        self.size += 1
        return self.size
    
    def dequeue(self):
        if self.is_empty():
            return
        
        value = self.first.value
        self.first = self.first.next_node
        self.size -= 1
        return value