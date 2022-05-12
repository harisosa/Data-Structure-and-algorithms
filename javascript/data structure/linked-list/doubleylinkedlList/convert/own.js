//sample of linked list

class Node {
  constructor(value){
      this.prev = null
      this.value = value
      this.next = null
  }
}
class DoubledLinkedList{
  constructor(value){
      this.head = new Node(value)
      this.tail=this.head;
      this.length  = 1;
  }
  append(value){
      const newNode= new Node(value)
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail=newNode
      this.length++
  }
  prepend(value){
      const newNode= new Node(value)
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
      this.length++
  }

  printList(){
      const array=[];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value,currentNode.prev)
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
      newNode.prev = leader;
      const holdingPointer = leader.next
      holdingPointer.prev = newNode
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
      afterNext.prev = leader

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


const myLL = new DoubledLinkedList(10)
myLL.append(5)
myLL.append(15)
myLL.prepend(1)
//myLL.printList()
myLL.insert(2,99)
//myLL.insert(20,88)
myLL.remove(2)