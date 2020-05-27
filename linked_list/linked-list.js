class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }
    isEmpty() {
        return this.head === null
    }
    push(val) {
        const newNode = new Node(val)
        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }
    pop() {
        if (this.isEmpty()) {
            return
        }
        let current = this.head
        let newTail = current
        while (current.next !== null) {
            newTail = current
            current = current.next
        }
        if (current === this.head) {
            this.head = null
            this.tail = null
        } else {
            this.tail = newTail
            this.tail.next = null
        }
        return current
    }
}

module.exports = {
    SinglyLinkedList,
}