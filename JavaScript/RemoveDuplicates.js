// Remove array duplicates. Do not alter original. Return new array with results ‘stable’ (original order). For [1,2,1,3,4,2] return [1,2,3,4].

function removeDuplicates(arr){
    newArr = []
    for(i = 0; i < arr.length; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr;
}
console.log(removeDuplicates([1,2,1,3,4,2]))
