from tree.binary_heap import MaxBinaryHeap


def test_max_binary_heap():
    max_binary_heap = MaxBinaryHeap()

    max_binary_heap.insert(10)
    assert max_binary_heap.top() == 10

    max_binary_heap.insert(30)
    assert max_binary_heap.top() == 30

    max_binary_heap.insert(1)
    assert max_binary_heap.top() == 30

    max_binary_heap.insert(50)
    assert max_binary_heap.top() == 50

    max_binary_heap.insert(100)
    assert max_binary_heap.top() == 100

    value = max_binary_heap.extract_max()
    assert value == 100

    value = max_binary_heap.extract_max()
    assert value == 50

    value = max_binary_heap.extract_max()
    assert value == 30

    value = max_binary_heap.extract_max()
    assert value == 10

    value = max_binary_heap.extract_max()
    assert value == 1

    value = max_binary_heap.extract_max()
    assert value == None
