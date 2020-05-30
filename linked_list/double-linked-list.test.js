const {DoublyLinkedList} = require('./double-linked-list')

test('doubly linked list, push', () => {
    const list = new DoublyLinkedList()
    list.push(1)
    expect(list.head.val).toEqual(1)
    expect(list.tail.val).toEqual(1)

    list.push(2)
    expect(list.head.val).toEqual(1)
    expect(list.tail.val).toEqual(2)
    expect(list.tail.prev.val).toEqual(1)
})

test('doubly linked list, pop', () => {
    const list = new DoublyLinkedList()
    list.push(1)
    list.push(2)

    const oldTail = list.tail
    list.pop()
    expect(list.tail.val).toEqual(1)
    expect(list.tail.next).toEqual(null)
    expect(oldTail.prev).toEqual(null)
})