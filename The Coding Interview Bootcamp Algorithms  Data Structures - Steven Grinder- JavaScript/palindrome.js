//if orginial str and reverse str are same return true otherwise return false....

function palindrome(str) {
    let reversedStr = '';

    for(let char of str){
        reversedStr = char + reversedStr;
    }

    // if(str === reversedStr){
    //     return true;
    // }else{
    //     return false;
    // }
    return str === reversedStr;
}