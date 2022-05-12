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
        this.recrusive(this.head,value)
    }

    recrusive(head,value){
        if(head?.next){
            this.recrusive(this.head.next,value)  
        }else{
            this._append(head,value)
        }
    }
    _append(head,value){
        const newTail = {
            value:value,
            next: null
        }
        head.next = newTail
        this.tail = newTail
        this.length++
    }
}


const myLL = new LinkedList(10)
myLL.append(5)
myLL.append(15)
console.log(myLL)