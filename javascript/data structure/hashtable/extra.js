// This extras is to prefent the collison within the hash table
// collision means the hash on the keys of the hashtable have a posibility to overlap one and the others

class HashTable {
    constructor(size){
        this.data = new Array(size)
    }

    _hash(key){
        let hash = 0;
        for(let i = 0; key.length;i++){
            hash = (hash + key.charCodeAt(i)*i) %
            this.data.length
        }
        return hash;
    }


    set(key,value){
        let address = this._hash(key)
        if(!this.data[address])
        {
            //Collision -> make another array inside the array of data
            this.data[address]=[]
        }
        this.data[address].push([key,value])
        
    }//o(1)

    get(key){
        let address= this._hash(key)
        let current = this.data[address]
        if (current){
            for (let i = 0; i<current.length;i++){
                // find the data if its have arrays inside the data
                if(current[i][0] === key){
                    return current[i][1]
                }
            }
        }
        return undefined
    } //o(n)

    //basic solution
    _keys(){
        const keysArray = []
        for(let i = 0;i < this.data.length; i++){
            if(this.data[i]){
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    }
    // best solution for collision
    keys() {
        if (!this.data.length) {
          return undefined
        }
        let result = []
        // loop through all the elements
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
              // but also loop through all the potential collisions
              if (this.data.length > 1) {
                for (let j = 0; j < this.data[i].length; j++) {
                  result.push(this.data[i][j][0])
                }
              } else {
                result.push(this.data[i][0])
              } 
            }
        }
        return result; 
      }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
console.log(myHashTable.get('grapes'))

myHashTable.set('apples', 9)
myHashTable.get('apples')
