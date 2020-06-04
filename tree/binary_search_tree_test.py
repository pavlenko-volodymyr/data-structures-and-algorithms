from tree.binary_search_tree import BinarySearchTree


def test_insert():
    tree = BinarySearchTree()

    tree.insert(15)
    assert tree.root.value == 15

    tree.insert(10)
    assert tree.root.left.value == 10

    tree.insert(3)
    assert tree.root.left.left.value == 3

    tree.insert(11)
    assert tree.root.left.right.value == 11


def test_find():
    tree = BinarySearchTree()

    tree.insert(15)
    tree.insert(10)
    tree.insert(3)
    tree.insert(11)

    found = tree.find(3)
    assert found.value == 3

    found = tree.find(100)
    assert found is None