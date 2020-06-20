from tree.binary_heap import MaxBinaryHeap


def test_max_binary_heap():
    max_binary_heap = MaxBinaryHeap()

    max_binary_heap.insert(10)
    assert max_binary_heap.extract_max() == 10

    max_binary_heap.insert(30)
    assert max_binary_heap.extract_max() == 30

    max_binary_heap.insert(1)
    assert max_binary_heap.extract_max() == 30
