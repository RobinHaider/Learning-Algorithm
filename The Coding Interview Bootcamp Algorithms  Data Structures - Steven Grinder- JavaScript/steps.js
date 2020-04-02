//Example
//make sure steps has space in the right side
//steps(5)
//#
//##
//###
//####
//#####

function steps(number){
    
    for(let i=1; i<=number; i++){
        let stair = '';

        for(let j=1; j<=number; j++){
           if(j<=i){
               stair += "#";
           }else{
               stair += " ";
           }
        }

        console.log(stair);
    }
}


//solution two
//recusion...
function stepsTwo(number, row = 0, stair = '') {
    
    if(number === row){
        return;
    }

    if(stair.length === number){
        console.log(stair);
        return stepsTwo(number, row+1);
    }

    if(stair.length<=row){
        stair += '#';
    }else{
        stair += ' ';
    }

    stepsTwo(number,row,stair);
}

