from collections import deque
from tree.binary_search_tree import BinarySearchTree


def bfs_walk(tree):
    if tree.is_empty():
        return
    # queue = deque([tree.root])
    queue = [tree.root]
    visited = []
    while queue:
        node = queue.pop(0)
        visited.append(node.value)
        if node.left is not None:
            queue.append(node.left)
        if node.right is not None:
            queue.append(node.right)
    return visited