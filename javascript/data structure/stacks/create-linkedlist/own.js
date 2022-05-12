class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null
        this.bottom = null
        this.length = 0
    }
    peek(){
        return this.top;
    }
    push(value){
        const node = new Node(value)
        this.bottom = node
        this.length++
    }
    pop(){}

    isEmpty(){}
}

const myStack = new Stack()