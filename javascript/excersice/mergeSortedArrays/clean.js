function mergeSortedArray(arr1,arr2){
    //check code
    if(arr1.length === 0){
        return arr2
    }
    if(arr2.length === 0){
        return arr1
    }
    return Sort(arr1,arr2)
}

function Sort(arr1,arr2){
    const result = [];

    let arr1Item = arr1[0]
    let arr2Item = arr2[0]
    let i = 1;
    let j = 1;

    while(arr1Item || arr2Item){
        if(!arr2Item || arr1Item < arr2Item){ 
            //check condition when the second array item is undefined
            // then go to this scope
            result.push(arr1Item)       
            arr1Item = arr1[i]
            i++
        }else{
            result.push(arr2Item)
            arr2Item = arr2[j]
            j++
        }
    }
    return result
}
mergeSortedArray([0,3,4],[4,6,30])