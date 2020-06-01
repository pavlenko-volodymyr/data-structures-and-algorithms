from stack_queue.queue import Queue

def test_queue():
    q = Queue()
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)

    assert q.size == 3

    value = q.dequeue()
    assert value == 1
    assert q.size == 2

    value = q.dequeue()
    assert value == 2
    assert q.size == 1

    value = q.dequeue()
    assert value == 3
    assert q.size == 0

    value = q.dequeue()
    assert value == None
    assert q.size == 0