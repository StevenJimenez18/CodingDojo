// //Intersect sorted arrays
// Given two arrays of sorted numbers, return a new array that contains only the numbers that are in both arrays
// Ex: given [1,2,2,3,4,5] and [2,4,6,7,8] return [2,4]
// Ex: given [1,1,1,2,3,4] and [1,1,3,4,5] return [1,1,3,4]





function intersectArrays(arr1,arr2){
    newArr = []
    for(i = 0; i < arr1.length; i++ ){
        for(j = 0;j < arr2.length; j++){
            if (arr1[i] == arr2[j]){
                newArr.push(arr1[i])
                i++
            }
        }
    }
    return newArr
}

a1 = [1,1,2,2,5,4,4,5]
a2 = [1,1,1,2,4,4,5,6,7]
console.log(intersectArrays(a1,a2))