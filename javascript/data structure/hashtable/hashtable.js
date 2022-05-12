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
        this.data[address] = value
        
    }//o(1)

    get(key){
        let hash= this._hash(key)
        return this.data[hash]
    }//o(1)
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
console.log(myHashTable.get('grapes'))

myHashTable.set('apples', 9)
myHashTable.get('apples')
