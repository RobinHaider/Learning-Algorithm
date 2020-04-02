
//return the most commonly used char
//abcccccd => c
//abd 111123 => 1

function maxchar(str) {
    let chars = {};
    maxValue = 0;
    maxChar = '';

    for(let char of str){
        chars[char] = chars[char] + 1 || 1;
    }

    for(let char in chars){
        if(chars[char] > maxValue){
            maxValue = chars[char];
            maxChar = char;
        }
    }

    return maxChar;
}