class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
        return this.first
    }
    enqueue(value){
        const newNode = new Node(value)
        if (this.length === 0){
            this.first = newNode
        }else{
            const currentLast = this.last
            currentLast.next = newNode
        }
        this.last = newNode
        this.length++
        console.log(this)
         
    }
    dequeue(){
        const currentFirstNode = this.first

        this.first = this.first.next
        this.length--

        if(this.length===0){
          this.last = null
        }
        console.log(this)
    }
    //isEmpty;
  }

var rotateRight = function(head, k) {
    const list = new Queue()
    for(let i = head.length;i < 0; i--){
        list.enqueue(head[i]);
    }


    for(let j =0; j<k;j++){
        
    }
};


