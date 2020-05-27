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
    push(val) {
        this.tail = new Node(val)
        this.length++
        if (this.head === null) {
            this.head = this.tail
        }
    }
}

module.exports = {
    SinglyLinkedList,
}