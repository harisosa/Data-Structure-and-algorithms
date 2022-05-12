class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(value){
      //Code here
        const newNode = new Node(value)
      if (!this.root){
          this.root = newNode
      }else{
        let left = this.left
        let right = this.right
  
  
        if (this.root.value < value){
          while(left){
              if (left.value< value){
                  if (!left.left){
                      left.left = newNode
                  }
                  left = left.left
              }
          }
        }
 
          if (this.root.value > value){

            if (!right){
              this.root.right = newNode
              return
            }
              while(right){
                  if (right.value< value){
                      if (!right.right){
                          right.right = newNode
                      }
                      right = right.right
                  }
              }
        }
      
      

      return
      }
    }
    lookup(value){
      //Code here
    }
    // remove
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  let tx = JSON.stringify(traverse(tree.root))
  console.log(tx)
  
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  
  
  