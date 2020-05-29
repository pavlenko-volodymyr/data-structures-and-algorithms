class Node {
    constructor(val, next=null) {
        this.val = val
        this.next = next
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
            this.length = 0
        } else {
            this.tail = newTail
            this.tail.next = null
            this.length--
        }
        return current
    }
    shift() {
        if (this.isEmpty()) {
            return
        }
        const currentHead = this.head
        this.head = currentHead.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return currentHead
    }
    unshift(val) {
        const newNode = new Node(val)
        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined
        }
        let node = this.head
        while (index) {
            node = node.next
            index--
        }
        return node
    }
    set(index, val) {
        const node = this.get(index)
        if (node === undefined) {
            return false
        }
        node.val = val
        return true
    }
    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false
        }
        if (index === 0) {
            this.unshift(val)
            return true
        }
        if (index === this.length) {
            this.push(val)
            return true
        }
        const prevNode = this.get(index - 1)
        prevNode.next = new Node(val, prevNode.next)
        return true
    }
    remove(index) {
        if (index < 0 || index > this.length) {
            return false
        }
        if (index === 0) {
            this.shift()
            return true
        }
        if (index === this.length - 1) {
            this.pop()
            return true
        }
        const prevNode = this.get(index - 1)
        prevNode.next = prevNode.next.next
        return true
    }
}

module.exports = {
    SinglyLinkedList,
}