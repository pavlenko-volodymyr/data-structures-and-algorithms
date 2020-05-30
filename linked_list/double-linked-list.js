class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        const newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
    }
    pop() {
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            const newTail = this.tail.prev
            this.tail.prev = null
            newTail.next = null
            this.tail = newTail
        }
        this.length--
    }
}

module.exports = {
    DoublyLinkedList,
}