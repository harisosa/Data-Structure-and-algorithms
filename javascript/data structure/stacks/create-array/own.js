class Stack {
    constructor(){
        this.data = []
        this.length = 0;
    }

    peek(){
        return this.data[0]
    }

    push(value){
        this.data.unshift(value)
        this.length++
        console.log(this)
    }

    pop(){
        if (this.length === 0){
            return
        }
        this.data[this.length-1] = null
        this.length--
        console.log(this)
    }
}

const myStack = new Stack()
myStack.push("google")
myStack.push("udemy")
myStack.push("discord")


myStack.pop()
myStack.pop()
myStack.pop()
myStack.pop()