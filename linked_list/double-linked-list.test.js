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