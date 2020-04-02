//Examples
//spiralMatrix(3)
//[[1,2,3]
// [8,9,4]
// [7,6,5]]

//last number will be n*n like.. 3*3 = 9

function spiralMatrix(n) {
    const result = [];

    for(let i=0; i<n; i++){
        result.push([]);
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n-1;
    let startRow = 0;
    let endRow = n-1;

    while(startColumn <= endColumn && startRow <= endRow){
        //Top row
        for(let i=startColumn; i<=endColumn; i++){
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;

        //Right side
        for(let i=startRow; i<=endRow; i++){
            result[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        //bottom row
        for(let i=endColumn; i>=startColumn; i--){
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;

        //left side
        for(let i=endRow; i>=startRow; i--){
            result[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }

    return result;
}