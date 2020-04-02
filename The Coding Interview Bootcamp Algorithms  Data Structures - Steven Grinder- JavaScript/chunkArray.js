//given an array and chunk size, divide tha array in many sub-array
//where each sub array is the specified chunk size
//([1,2,3,4],2) => [[1,2],[3,4]]
//([1,2,3,4,5],2) => [[1,2],[3,4],[5]]

function chunkArray(array, size) {
    let resultArray = [];
    let tmpArray = [];

    for(let i=0; i<array.length; i++){

        if(tmpArray.length == size){
            resultArray.push(tmpArray);
            tmpArray=[];
        }
        if(tmpArray.length<size){
            tmpArray.push(array[i]);
        }
        if(i+1==array.length){
            resultArray.push(tmpArray);
        }
    }

    return resultArray;
}


//solution two
function chunkArrayTwo(array, size) {
    let resultArray = [];
    let index = 0;

    while(index<array.length){
        resultArray.push(array.slice(index,index + size));
        index += size;
    }

    return resultArray;
}