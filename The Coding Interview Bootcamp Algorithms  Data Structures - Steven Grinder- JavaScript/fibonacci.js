//print out the nth entry of the fibonacci series
//the fibonacci series is oredering of number where 
//each number is the sum of preceding two
//for example.
//[0,1,1,2,3,5,8,13,21,34]
//fib(4)=3

function fibonacci(n) {
    let arr = [0,1];

    for(let i=2; i<=n; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }

    return arr[n];
}

//solution two
//recursive
// //error...
// function fibonacciThree(n, i=2, result = [0,1]) {
//     if(i+1 == n){
//         return result[n];
//     }

//     result[i] = result[i-1] + result[i-2];
//     fibonacciTwo(n, i++, result);
// }


//solution three
//Time complexity - Exponential time - 2^N
function fibSlow(n) {
    if(n<2){
        return n;
    }

    return fibSlow(n-1) + fibSlow(n-2);
}

//for improving the time complexity of fibSlow via memoization
function memoize(fn) {
    const cache = {};

    return function(...args) {
        if(cache[args]){
            return cache[args];
        }

        const result = fn.apply(this. args);
        cache[args] = result;

        return result;
    }
}

fibSlow = memoize(fibSlow);