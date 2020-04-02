//write a program that console log the numbers form 1 to n
//but the for mulitples of three print "fizz" insted
//for multiples of five print "buzz" instead
//and which are multiples of both print "fizzbuzz"
// 1  2  fizz 4 buzz 

function fizzbuzz(number) {

    for(let i=1; i<=number; i++){
        
        if(i%3 == 0 && i%5 == 0){
            console.log('fizzbuzz');
        }else if(i%3 == 0){
            console.log('fizz');
        }else if(i%5 == 0){
            console.log('buzz');
        }else{
            console.log(i);
        }
    }
}