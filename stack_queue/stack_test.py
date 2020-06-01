from stack_queue.stack import Stack


def test_stack():
    s = Stack()
    s.push(1)
    s.push("two")
    s.push(3)
    assert s.size == 3
    value = s.pop()
    assert value == 3
    assert s.size == 2

    value = s.pop()
    assert value == "two"
    assert s.size == 1

    value = s.pop()
    assert value == 1
    assert s.size == 0
