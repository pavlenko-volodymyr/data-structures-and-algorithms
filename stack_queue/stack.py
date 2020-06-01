class Node:
    value = None
    next_node = None

    def __init__(self, value, next_node=None):
        self.value = value
        self.next_node = next_node


class Stack:
    def __init__(self):
        self.last = None
        self.size = 0

    def is_empty(self):
        return self.size == 0

    def push(self, value):
        self.last = Node(value=value, next_node=self.last)
        self.size += 1
        return self.size

    def pop(self):
        if self.is_empty():
            return
        value = self.last.value
        self.last = self.last.next_node
        self.size -= 1
        return value