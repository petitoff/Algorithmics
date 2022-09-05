var longestCommonPrefix = function(strs) {
    if(strs == null || strs.length === 0){
        return "";
    }
	let result = "";
	
	let minimumLength = 1;
	for (let i = 0; i < strs.length; i++){
		minimumLength = Math.min(minimumLength, strs[i].length);
	}
	
	for (let i = 0; i < minimumLength; i++){
		let current = strs[0][i];
		for (let j = 0; j < strs.length; j++){
			if (strs[j][i] != current){
				return result;
			}
		}
		result += current;
	}
	return result;
};