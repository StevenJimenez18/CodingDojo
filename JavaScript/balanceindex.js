// Here, a balance point is on an index, not between indices. Return the balance index where sums are equal on either side (exclude its own value). Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2, but [9,9] → -1.


function balanceIndex(arr){
    if (arr.length < 3) return -1;

    for(let i = 1,left = 0;i < arr.length;i++){
        left += arr[i-1];
        for( var j = i+ 1, right = 0; j < arr.length; j++) {
            right += arr[j];
        }
        if( left === right){
            return i;
        }
    }
    return -1;
}

console.log(balanceIndex([-2,5,7,0,3]));
console.log(balanceIndex([9,9]));