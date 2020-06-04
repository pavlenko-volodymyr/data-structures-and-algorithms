class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


class BinarySearchTree:
    def __init__(self):
        self.root = None
    
    def is_empty(self):
        return self.root is None
    
    def insert_recursively(self, node, value):
        if value < node.value:
            if node.left:
                self.insert_recursively(node.left, value)
            else:
                node.left = Node(value)
                return
        elif value > node.value:
            if node.right:
                self.insert_recursively(node.right, value)
            else:
                node.right = Node(value)
                return
        else:
            return

    def insert_iteratively(self, value):
        current = self.root
        while True:
            if value < current.value:
                if current.left:
                    current = current.left
                else:
                    current.left = Node(value)
                    break
            elif value > current.value:
                if current.right:
                    current = current.right
                else:
                    current.right = Node(value)
                    break
            else:
                return

    def insert(self, value):
        if self.root is None:
            self.root = Node(value)
        else:
            # self.insert_iteratively(value)
            self.insert_recursively(self.root, value)
    
    def find(self, value):
        if self.root is None:
            return
        else:
            current = self.root
            while current is not None:
                if current.value == value:
                    return current
                elif current.value < value:
                    current = current.right
                else:
                    current = current.left
            return