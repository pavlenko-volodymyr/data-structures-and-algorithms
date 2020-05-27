const {SinglyLinkedList} = require('./linked-list')

test('singly linked list, push', () => {
    const list = new SinglyLinkedList()
    expect(list.length).toEqual(0)

    list.push("first")

    expect(list.length).toEqual(1)
    expect(list.head.val).toEqual("first")
    expect(list.tail.val).toEqual("first")

    list.push("second")
    expect(list.length).toEqual(2)
    expect(list.head.val).toEqual("first")
    expect(list.tail.val).toEqual("second")
})