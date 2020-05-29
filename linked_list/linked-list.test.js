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

test('singly linked list, pop', () => {
    const list = new SinglyLinkedList()
    expect(list.pop()).toEqual(undefined)

    list.push("first")
    expect(list.length).toEqual(1)
    expect(list.pop().val).toEqual("first")
    expect(list.pop()).toEqual(undefined)

    list.push("first")
    list.push("second")
    expect(list.pop().val).toEqual("second")
    expect(list.pop().val).toEqual("first")
    expect(list.pop()).toEqual(undefined)
})

test('singly linked list, shift', () => {
    const list = new SinglyLinkedList()
    expect(list.shift()).toEqual(undefined)

    list.push("first")
    list.push("second")
    expect(list.length).toEqual(2)
    expect(list.shift().val).toEqual("first")
    expect(list.shift().val).toEqual("second")
    expect(list.shift()).toEqual(undefined)
    expect(list.length).toEqual(0)
})

test('singly linked list, unshift', () => {
    const list = new SinglyLinkedList()
    list.unshift("one")
    expect(list.head.val).toEqual("one")

    list.unshift("two")
    expect(list.head.val).toEqual("two")

    list.unshift("three")
    expect(list.head.val).toEqual("three")

    list.unshift("four")
    expect(list.head.val).toEqual("four")
})

test('singly linked list, get', () => {
    const list = new SinglyLinkedList()
    list.push("one")
    list.push("two")
    list.push("three")
    list.push("four")
    list.push("five")

    expect(list.get(3).val).toEqual("four")
    expect(list.get(0).val).toEqual("one")
    expect(list.get(100)).toEqual(undefined)
})

test('singly linked list, set', () => {
    const list = new SinglyLinkedList()
    expect(list.set(0, "one")).toEqual(false)

    list.push("one")
    list.push("two")
    list.push("three")

    list.set(0, "two")
    expect(list.get(0).val).toEqual("two")
    list.set(1, "three")
    expect(list.get(1).val).toEqual("three")
    list.set(2, "one")
    expect(list.get(2).val).toEqual("one")
})

test('singly linked list, reverse', () => {
    const list = new SinglyLinkedList()
    list.push("one")
    list.push("two")
    list.push("three")
    expect(list.get(0).val).toEqual("one")
    expect(list.get(1).val).toEqual("two")
    expect(list.get(2).val).toEqual("three")

    list.reverse()

    expect(list.get(2).val).toEqual("one")
    expect(list.get(1).val).toEqual("two")
    expect(list.get(0).val).toEqual("three")
})