function firstRecurringCharacter(input) {
    for (let i=0; i < input.length; i++) {
        for (let j = i+1; i < input.length; j++) {
            if (input[i] === input[j]){
                return input[i];
            }
        }
    }
    return undefined;
} // O(n^2)

function firstRecurringCharacter2(input){
    let map = {};
    for (let i=0; i < input.length; i++){
        if(map[input[i]] !== undefined) {
            return input[i];
        } else {
            map[input[i]] = i;
        }
    }
    return undefined;
} // O(n)

// console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]));
/*
    Error explanation
    The first function (first solution) has the following problem. 
    As we take numbers sequentially and check whether a given number 
    has not repeated. So if we take the setting [2,5,1,2] then 
    the answer will be 2 which is correct. However, 
    if we take [2,5,5,2], the answer will also be 2, which is incorrect. 
    The second function and the answer resists this drawback and works fine.
*/
console.log(firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]));
