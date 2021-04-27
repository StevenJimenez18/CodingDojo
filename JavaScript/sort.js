//Bubble Sort
// Given an array of numbers, sort the numbers by swapping adjacent numbers that are in the wrong order
// Ex:
// [5,9,2,7,6] -> [5,2,7,6,9] -> [2,5,7,6,9] -> [2,5,6,7,9]

function bubbleSort(arr){
    for (i = 0; i < arr.length-1; i++){
        for (j = 0; j < arr.length-1; j++){
            if (arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5,2,7,6,9,5]));

// //Selection Sort
// Given an array of numbers, sort the numbers by finding the smallest number in the unsorted part and shift it to the beginning
// Ex:
// [7,5,2,8,4] -> [2,7,5,8,4] -> [2,4,7,5,8] -> [2,4,5,7,8]

//Selection Sort
function SelectSort(arr){
    for(var i = 0; i< arr.length; i++){
        var idx = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[idx] > arr[j]){
                idx = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[idx];
        arr[idx] = temp;
    }
    return arr;
}

a1 = [7,5,2,8,4];
console.log("Original array: " + a1);
console.log("Answer: ");
console.log(SelectSort(a1));


//Insertion Sort
// Given an array of numbers, sort the numbers by placing values into their correct position at the front (sorted part) of the array
// Ex:
// [9,5,2,7,1] -> [5,9,2,7,1] -> [2,5,9,7,1] -> [2,5,7,9,1] -> [1,2,5,7,9]

function insert(arr){
    var temp 
    var index = 1
    for(var i = 0; i< arr.length; i++){
        for( var j = index; j >=0; j--){
            if(arr[j]<arr[j-1]){
                temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            }
        }
        index++ 
        console.log('temp', temp)
        console.log ('index', index)
    }
    return arr
}
console.log(insert([9,5,2,7,1]))




//Combine arrays
Given two arrays that are sorted, combine them into one sorted array
Ex: 
Should return -> [1,2,3,4,6,8,9,10,11,13]



function partition(arr, pivot){
    var piv = arr[pivot];
    var marker = pivot;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > piv && i < marker){
            var larger = arr[i];
            for(let j = i; j <= marker; j++){
                arr[j] = arr[j+1];
            }
            arr[marker] = larger;
            marker--;
            i--;
        }
        if(arr[i] <= piv && i > marker){
            var smaller = arr[i];
            for(let k = i; k >= marker; k--){
                arr[k] = arr[k-1];
            }
            arr[marker] = smaller;
            marker++;
        }
    }
    return arr;
}


// Given an array of unsorted numbers and a pivot index, sort the array so that all values less than the value at the pivot index are on the left of the value and all values greater than the pivot value are on the right
// Ex: 
// Given var sortArr = [7,9,1,6,2,10,8,4,3] and a pivot index of 3, return [1,2,4,3,6,9,7,10,8]
// Notice how the pivot index of 3 lands on the value of 6 originally and then sorts all numbers in the array around being less than or greater than the number 6
// It is OKAY for the pivot to move, just keep track of the original VALUE of the pivot
// Starter code:
// function partition(arr, pivot){
//     //Your code goes here
// }


function partitionSort(arr,piv){

    for(var j = 0 ; j < arr.length; j++){ 
            pividx = arr[piv]
            newArr1 = []
            newArr2 = []
            console.log(arr[j])
            console.log(pividx)
            if (arr[j]){
                newArr1.push(arr[j])
            }
            if (6 < arr[j]){
                newArr2.push(arr[j])
            }
        
    }
    console.log(newArr2)
    return newArr1.concat(piv,newArr2)
}
console.log(partitionSort([7,9,1,6,2,10,8,4,3], 3))

//[1,2,4,3,6,9,7,10,8]


function quick_Sort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

var myArray = [7,9,1,6,2,10,8,4,3 ];

console.log("Original array: " + myArray);
var sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray);


//Quick sort 
// Use the ideas from partition to create a quick sort. Basically, run partitions until an array is completely sorted
// Partition: given an array and a pivot index, sort the array around the value at the original pivot point