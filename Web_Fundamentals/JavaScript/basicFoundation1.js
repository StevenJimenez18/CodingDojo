//1. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function challengeOne(num){
    for (i = 0; i <= num; i++){
        console.log(i)
    }
}
challengeOne(255) //Complete

//2.Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function evennumbers(num){
    for (i = 0; i <= num; i++){
        if (i % 2 == 0){
            console.log(i)
        }
    }
}
evennumbers(100) //Complete

//3. Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function sumOdds(num){
    sum = 0
    for (i = 0; i <= num; i++){
        if(i % 2 != 0){
            sum += i;
        }
    }
  return sum
}
console.log(sumOdds(5000)) //needs verification

//4. Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function sumArray(arr){
    var sum = 0
    for (i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}
console.log(sumArray([2,2,2,2])) //complete

//5. Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function findMax(arr){
    var max = arr[0]
    for (i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }   
    }
    console.log(max)
    return max
}
findMax([-1,1,2,3,4,5]) //complete

//6.Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function findAverage(arr){
    sum = 0
    for (i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    console.log("sum: " + sum/arr.length)
    return sum/arr.length
}
findAverage([1,3,5,7,20]) //complete

//7. Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function arrayOdds(){
    var newArr=[]
    for (i = 0; i < 50; i++){
        if (i % 2 != 0){
            newArr.push(i)
        }
    }
    console.log(newArr)
    return newArr
}
arrayOdds() //Complete

//8.Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greaterThanY(arr,y){
    sum = 0
    for (i= 0; i < arr.length; i++){
        if(arr[i] > y){
        sum ++
    }
    }
    console.log(sum)
}

greaterThanY([1,2,3,4,5], 3) //Complete

//9. Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function arraySquared(arr){
    for(i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i]
    }
    console.log(arr)
    return arr
}
arraySquared([1,5,10,-2]) //Complete


//10. Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function noNegatives(arr, num){
    for (i= 0; i < arr.length; i++){
        if (arr[i] < num){
            arr[i] = num
        }
    }
    console.log(arr)
    return arr
}
noNegatives([-1,2,3,-5,2],0) //complete

//11.Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxMinAvg(arr){
    var max = arr[0]
    var min = arr[0]
    var sum = 0
    var newArr = []
    for(i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }
        else if (arr[i] < min){
            min = arr[i]
        }
        sum = sum + arr [i]
    }
    newArr.push (max)
    newArr.push (min)
    newArr.push (sum/arr.length)
    return newArr
}
console.log(maxMinAvg([2,10,-11,13,-5,0]))

// 12.Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swapValues(arr){
    for(i = 0; i < arr.length; i++){
        
    }
        
}

//13. Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function numberToString(arr){
    for (i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = "Dojo"
        }
    }
    console.log(arr)
    return arr
}
numberToString([-1,-3,2])