//sample of linked list

let myLinkedList={
    head:{
        value:10,
        next:{
            value:5,
            next:{
                value:16,
                next :null,
            }
        }
    }
}


class LinkedList{
    constructor(value){
        this.head ={
            value:value,
            next: null
        }
        this.tail=this.head;
        this.length  = 1;
    }
    append(value){
        const newNode={
            value:value,
            next:null
        }
        this.tail.next = newNode
        this.tail=newNode
        this.length++
    }
    prepend(value){
        const newNode = {
            value:value,
            next:this.head
        }
        this.head = newNode
        this.length++
    }

 
}


const myLL = new LinkedList(10)
myLL.append(5)
myLL.append(15)
myLL.prepend(1)
console.log(myLL)