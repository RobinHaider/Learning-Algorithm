//return the number of vowels used in a string

function vowels(str) {
    let count = 0;

    for(let char of str.toLowerCase()){

        if(char ==='a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
    }

    return count;
}