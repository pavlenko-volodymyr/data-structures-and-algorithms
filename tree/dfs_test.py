from tree.dfs import dfs_walk
from tree.binary_search_tree import BinarySearchTree


def test_dfs():
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
    values = dfs_walk(tree)
    assert values == [10, 3, 2, 1, 5, 15, 11, 20, 16, 40]
