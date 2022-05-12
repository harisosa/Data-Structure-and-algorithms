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
        //check params
        if (index >= this.length){
            return this.append(value)
        }

        const newNode = new Node(value)
        const leader = this.traverseToIndex(index-1)
        const holdingPointer = leader.next
        leader.next =  newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList()

    } 
    remove(index){
        //check param
        if (index >= this.length){
            return console.log("Out of range")
        }
        const leader = this.traverseToIndex(index-1);
        const afterNext = leader.next.next

        leader.next = afterNext
        this.length--
        return this.printList()

    }    
    traverseToIndex(index){
        //check params

        let counter = 0;
        let currentNode = this.head
        while(counter !== index){
            currentNode=currentNode.next
            counter++
        }
        return currentNode
    }//o(n)
    
}


const myLL = new LinkedList(10)
myLL.append(5)
myLL.append(15)
myLL.prepend(1)
myLL.insert(2,99)
myLL.insert(20,88)
myLL.remove(2)