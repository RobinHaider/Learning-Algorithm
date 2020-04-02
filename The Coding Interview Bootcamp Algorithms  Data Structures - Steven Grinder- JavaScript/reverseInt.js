
//reverse a number
//Example
//15 => 51
//500 => 5
//-400 => -4

function reverseInt(number) {
    let reversed = parseInt(number.toString().split('').reverse().join(''));
    if(number<0){
        return reversed * -1;
    }
    return reversed;
}