class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  } // O(1)

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    console.log(currentBucket);
    if (currentBucket.length) {
      for(let i = 0; i < currentBucket.length; i++)
      {
        if(currentBucket[i][0] == key) {
          return currentBucket[i][1];
        }
      }
    } // O(1) or O(n)
    return undefined;
  } 

  keys() {
    const keysArrays = [];
    for (let i=0; i < this.data.length; i++)
    {
      if(this.data[i]){
        console.log(this.data[i][0][0]);
        keysArrays.push(this.data[i][0][0]);
      }
    }
    return keysArrays;
  }
}
  
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);
console.log(myHashTable.get('apples'));
console.log(myHashTable.keys());