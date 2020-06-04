from tree.bfs import bfs_walk
from tree.binary_search_tree import BinarySearchTree


def test_bfs():
    tree = BinarySearchTree()
    tree.insert(10)
    tree.insert(15)
    tree.insert(20)
    tree.insert(40)
    tree.insert(16)
    tree.insert(3)
    tree.insert(2)
    tree.insert(1)
    tree.insert(5)
    tree.insert(11)
    values = bfs_walk(tree)
    assert values == [10, 3, 15, 2, 5, 11, 20, 1, 16, 40]
