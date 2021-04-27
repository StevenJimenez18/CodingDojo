// Write a function that returns whether the given array has a balance point between indices, where one side’s sum is equal to the other’s. Example: [1,2,3,4,10] → true (between indices 3 & 4), but [1,2,4,2,1] → false.


//create for loop


function balancePoint(arr){

    for(let i = 0, left = 0;i < arr.length;i++){
        left += arr[i];
        for( var j = i+ 1, right = 0; j < arr.length; j++) {
            right += arr[j];
        }
        if( left === right){
            return true;
        }
    }
    return false;
}

console.log(balancePoint([1,2,3,4,10]));