//check if the strings are anagram of each other
//one string is anagram of another, if it uses same character in same quntity
//only consider alphabet, not not space or punctuation
//capital and small letter doesn't matter
//("raheel", "heelra") => true
//("Hi there", "Bye there") => false
//("rail safety", "fairy tales") = true

function anagrams(strA, strB) {
    strA = strA.replace(/[^\w]/g,'').toLowerCase();
    strB = strB.replace(/[^\w]/g,'').toLowerCase();
    
    if(strA.length !== strB.length){
        return false;
    }

    objectA = {};
    objectB = {};

    for(let i=0; i<strA.length; i++){

        objectA[strA[i]] = objectA[strA[i]] + 1 || 1;
        objectB[strB[i]] = objectB[strB[i]] + 1 || 1;
    }

    for(let char in objectA){
        if(objectA[char] !== objectB[char]){
            return false;
        }
    }

    return true;

}

//solution two
function anagramsTwo(strA, strB) {
    strA = strA.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
    strB = strB.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');

    if(strA === strB){
        return true;
    }

    return false;
}