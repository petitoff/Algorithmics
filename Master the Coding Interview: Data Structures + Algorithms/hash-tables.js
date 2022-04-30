let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function () {
        console.log('ahhhhh!');
    }
}

user.age // O(1)
user.spell = 'abra kadabra'; // O(1)
console.log(user.scream()); // O(1)
console.log(user);

/*
Overflow of hash tables

 O(n/k)
 O(n)
*/

const a = new Map();
const b = new Set();
