/*

    @return {number}
*/

var myAtoi = function(s) {
    let indexCheck = 0;
    let sign = 0;
    let startNumber = false;
    const result = [];
    stringTrimed = s.trim(); // remove white spaces
    for(let i = 0; i < stringTrimed.length;i++){
        if (stringTrimed[i]==="-") {
            result.push("-");
            sign++;
            startNumber = true;
            continue;
        } else if(stringTrimed[i]==="+"){
            sign++;
            startNumber = true;
            continue;
        }

        if(sign>1){
            return 0;
        }

        if(!isNaN(stringTrimed[i])){
            result.push(stringTrimed[i]);
        } else{
            if(startNumber==" "){
                return 0;
            }
            if(stringTrimed[i]===" " && indexCheck===0){
                indexCheck++;
            } else{
                break;
            }
        }
    }

    const resultOuput = OutputCheck(result.join(""));

    if(resultOuput==1){
        return 2147483647;
    } else if(resultOuput==2){
        return -2147483648
    } else if(resultOuput==3){
        return 0
    }


    return +result.join("");
};

const OutputCheck=function(number){
    const intMax = 2147483647;
    const intMin = - intMax - 1;
    if(number > intMax){
        return 1
    }

    if(number < intMin){
        return 2
    }

    if(isNaN(number)){
        return 3
    }

    return 4;
}

console.log(myAtoi("4193 with words"));