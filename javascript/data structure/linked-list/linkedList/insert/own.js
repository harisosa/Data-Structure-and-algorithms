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

class Node {
    constructor(value){
        this.value = value
        this.next = null
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
        const newNode= new Node(value)
        this.tail.next = newNode
        this.tail=newNode
        this.length++
    }
    prepend(value){
        const newNode= new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
    }

    printList(){
        const array=[];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(array)
        return array;
    }
    insert(index,value){
        const newNode = new Node(value)
        let node = {}
        let nodeNext = {}
         for (let i=0;i<= index;i++){
           node= this._recrusive(this.head)

        }
        nodeNext = node.next
        node.next = newNode
        newNode.next = nodeNext
        this.length++
    } 

    _recrusive(node){
        return node.next
    }
    
}


const myLL = new LinkedList(10)
myLL.append(5)
myLL.append(15)
//myLL.prepend(1)
myLL.insert(2,99)
myLL.printList()