from tree.priority_queue import PriorityQueue


def test_priority_queueu():
    priority_queue = PriorityQueue()

    priority_queue.enqueue(100, 1)
    priority_queue.enqueue(2, 1000)
    priority_queue.enqueue(15, 7)
    priority_queue.enqueue(80, 20)
    priority_queue.enqueue(3, 4)

    assert priority_queue.dequeue() == 100
    assert priority_queue.dequeue() == 3
    assert priority_queue.dequeue() == 15
    assert priority_queue.dequeue() == 80
    assert priority_queue.dequeue() == 2