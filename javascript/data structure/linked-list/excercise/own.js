// create reverse


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
        //return this.printList()

    } 
    remove(index){
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next
        leader.next = unwantedNode.next

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

    reverse(){
        //explanation
        if (!this.head.next){
            return this.head
        }
        let first = this.head
        /*first step will store 
            {
                value : 1 , 
                next : 
                    {
                        value : 10 , 
                        next :
                        {
                            value : 99 , 
                            next : 
                            {
                                value : 5 , 
                                next :
                                {
                                    value : 15 , 
                                    next :nul
                                }
                            }
                        }
                    }
                }
            }*/
        this.tail = this.head 
        /*
            set tail to head
        */
        let second = first.next
        /* 
            second set to
            {
                        value : 10 , 
                        next :
                        {
                            value : 99 , 
                            next : 
                            {
                                value : 5 , 
                                next :
                                {
                                    value : 15 , 
                                    next :nul
                                }
                            }
                        }
                    }
        */
       let loop = 1;
        while(second){

            console.log(`loop count : ${loop}`)
            loop++;
            const temp = second.next
            /* 1st loop
                temp = {
                            value : 99 , 
                            next : 
                            {
                                value : 5 , 
                                next :
                                {
                                    value : 15 , 
                                    next :nul
                                }
                            }
                        }
            */
            second.next = first
            /*
                second.next =  {
                value : 1 , 
                next : 
                    {
                        value : 10 , 
                        next :
                        {
                            value : 99 , 
                            next : 
                            {
                                value : 5 , 
                                next :
                                {
                                    value : 15 , 
                                    next :nul
                                }
                            }
                        }
                    }
                }
            }*
            */
            first = second
            /*
                first = {
                        value : 10 , 
                        next :
                        {
                            value : 99 , 
                            next : 
                            {
                                value : 5 , 
                                next :
                                {
                                    value : 15 , 
                                    next :nul
                                }
                            }
                        }
                    }
            */
            second = temp
            /*
                second = {
                            value : 99 , 
                            next : 
                            {
                                value : 5 , 
                                next :
                                {
                                    value : 15 , 
                                    next :nul
                                }
                            }
                        } */
            console.log(`first : ${first.value}, next : ${first.next?.value}`)
            console.log(`second : ${second?.value}, next : ${second?.next?.value}`)
            console.log(`temp : ${temp?.value}, next : ${temp?.next?.value}`)
            console.log("=======================================================\n")
        }

        this.head.next = null
        this.head = first
        //return this.printList()
    }

}


const myLL = new LinkedList(10)
myLL.append(5)
myLL.append(15)
myLL.prepend(1)
myLL.insert(2,99)
myLL.insert(20,88)
//myLL.remove(2)
//myLL.remove(1)

myLL.reverse()