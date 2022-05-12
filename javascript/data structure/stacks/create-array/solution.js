class Stack {
    constructor(){
        this.array = []
    }

    peek(){
        return this.array[this.array.length-1]
    }

    push(value){
        this.array.push(value)
        console.log(this)
    }

    pop(){
        if (this.array.length === 0){
            return
        }
        this.array.pop()
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