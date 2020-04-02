function reverseString(input) {

    return input.split('').reverse().join('');
}

//second solution
function reverseStringOne(str) {
    let arr = [];
    for (let i = str.length-1; i >=0; i--) {
        arr.push(str[i]);        
    }
    return arr.join('');
}

//third solution

function reverseStringTwo(input) {
    let reversed = '';

    for(let char of input){
        reversed = char + reversed;
    }
    return reversed;
}