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
        if (this.length === 0){
            this.top = node
            this.bottom = node
        }else {
            const hold = this.top
            this.top = node
            this.top.next = hold
        }
        this.length++
       return// console.log(this)
    }
    pop(){
        if(!this.top){
            return null;
        }

        if(this.top === this.bottom){
            this.bottom = null
        }

        const top = this.top
        this.top = this.top.next
        this.length--
        console.log(this)
    }

    isEmpty(){}
}

const myStack = new Stack()
myStack.push("google")
myStack.push("udemy")
myStack.push("discord")


myStack.pop()
myStack.pop()
myStack.pop()
myStack.pop()
