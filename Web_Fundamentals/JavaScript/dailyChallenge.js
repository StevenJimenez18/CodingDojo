
//  Sigma function!
function sigma(num) {
    var sum=0
    for (var i=1; i<=num; i++) {
        sum+=i
    }
    return sum
}
console.log(sigma(3))

// factorial function!

function factorial(num) {
    var pro=1
    for (var i=1; i<=num; i++) {
        pro = pro*i
    }
    return pro
}
console.log(factorial(5))

// Sigma
// Implement function sigma(num) that given a number, returns the sum of all positive integers
// up to number (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).


//Psuedo
//write function
//


function sigma(num){
    var sum = 0
 for(i = num; i--;){
     if(num > 0){

     }
 }
}






// Factorial
// Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a
// number, returns the product (multiplication) of all positive integers from 1 up to number
// (inclusive). For example, factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).



// Fibonacci
// Create a function to generate Fibonacci numbers. In this famous mathematical sequence,
// each number is the sum of the previous two, starting with values 0 and 1. Your function
// should accept one argument, an index into the sequence (where 0 corresponds to the initial
// value, 4 corresponds to the value four later, etc). Examples: fibonacci(0) = 0 (given),
// fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2
// (fib(1)+fib(2), or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5),
// fibonacci(7) = 13 (5+8), etc. ex: fib(8)



function fibonacci(num){
    var newArr = [0,1]
    var fib = 0
  for (var i = 0; i < num; i++){
    
      fib =  newArr[newArr.length-1] + newArr[newArr.length-2];
      newArr.push(fib)
  }

  return newArr [newArr.length-2]
}
  console.log(fibonacci(7))


  function fibonacci(num){
    var newArr = [0,1]
    var fib = 0
  for (var i = 0; i < num; i++){
    if(num != newArr[newArr.length-1] + newArr[newArr.length-2])
    {
      fib =  newArr[newArr.length-1] + newArr[newArr.length-2];
      newArr.push(fib)
  }

  return newArr [newArr.length-2]
}
  console.log(fibonacci(7))


0,1,2,4,5,6,71



// fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2
// (fib(1)+fib(2), or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5),
// fibonacci(7) = 13 (5+8), etc.

fib(0) = 0, fib(1) = 1, 

0, 1, 1, 2, 3, 5, 8, 13, 21

function fibonacci(num){
    var arr = [0,1]
    for (var i=0;i<num-1;i++){
        arr.push(arr[arr.length-2]+arr[arr.length-1])
    }
    return arr[arr.length-1]
}
console.log(fibonacci(7))}