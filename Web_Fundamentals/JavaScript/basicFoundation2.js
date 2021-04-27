// 1.Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function biggieSize(arr){
    for(i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big"
        }
    }
    console.log(arr)
    return arr
}
biggieSize([-1,3,5,-5]) //Complete

// 2.Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function printLowReturnHigh(arr){
    var min = arr[0]
    var max = arr[0]
    for (i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i]
        }
        if (arr[i] > max){
            max = arr[i]
        }
    }
    console.log(min)
    return max
}
printLowReturnHigh([2,3,4,5,3]) //complete

// 3.Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

function printOneReturnAnother(arr){
    var firstOdd = 0
    var secondToLast = 0
    for (i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            firstOdd = arr[i]
            break
        }
    }
    console.log(firstOdd)
    return arr.length -1
}
printOneReturnAnother([2,3,1,2,3,4,5,7,8]) //Complete

//4. Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubleVision(){
    var arr = [1,2,3]
    for(i = 0; i < arr.length; i++){
        arr[i] += arr[i]
    }
    console.log(arr)
}
doubleVision() //complete

//5.Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPositives(arr){
    var count = 0
    for (i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            count++
        }
    }
    arr.pop()
    arr.push(count)
    console.log(arr)
}
countPositives([-1,1,1,1]) //complete

//6.Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function evensAndOdds(arr){
    for(i = 0; i < arr.length; i++){
        var oddCount = 0
        var evenCount = 0
        if()
    }
}

//7. Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function addToSeconds(arr){
    for (i = 0; i< arr.length; i++)
    if(i % 2 != 0){
        arr[i]++
    }
    console.log(arr)
    return arr
}
addToSeconds([1,2,3,4,5,6]) //Complete

//8. Previous Lengths - You are passed an array  containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function previousLengths(){
    for(i = 0; i < arr.length; i++){

    }
}

//9. Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSeven(arr){
    var newArr = []
    var counter = 0
    for (i = 0; i < arr.length; i++){
        counter = arr[i] + 7
        newArr.push(counter)
    }
    console.log(newArr)
}
addSeven([1,2,3,4,5]) //Complete

//10. Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

//11.Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function negativeArray(arr){
    for(i = 0; i < arr.length; i++){
        var newArr = []
        var counter = 0
        if(arr[i] > 0){
           counter = arr[i] * -1
           newArr.push(counter)
        }
    }
    console.log(arr)
    return newArr

}
negativeArray([1,-3,5]) //Complete

//12.Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

function alwaysHungry(arr){
    for(i = 0; i < arr.length; i++){
        if(arr[i] == 'food'){
            console.log('yummy')
        }
        else if(arr[i] != "food"){
            console.log("I'm hungry")
        }
    }
    console.log(arr)
}
alwaysHungry(['food',0,'food',3,4]) //complete

//13.Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.


//14.Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scaleTheArray(arr,num){
    for(i = 0; i < arr.length; i++){
        arr[i] = arr[i] * num
    }
    console.log(arr)
}
scaleTheArray([1,2,3], 3) //complete

