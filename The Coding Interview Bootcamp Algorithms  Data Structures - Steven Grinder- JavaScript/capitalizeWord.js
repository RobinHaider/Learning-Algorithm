//capalize the first character of each word..
//a lazy dog => A Lazy Dog

function capitalizeWord(sentece) {
    let arr = sentece.split(' ');
    
    for(let i=0; i<arr.length; i++){
        
        let tmpArr = arr[i].split('');
        tmpArr[0] = tmpArr[0].toUpperCase();
        arr[i] = tmpArr.join('');
    }

    return arr.join(' ');

}