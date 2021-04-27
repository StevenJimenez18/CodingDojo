var testArr = [6,3,5,1,2,4]
sum = 0
function valuesAndSum(){
    for (i = 0; i < testArr.length; i++){
        sum += testArr[i]
        console.log("Num: " + testArr[i]+ " Sum: " + sum)
    }
    return sum
}
valuesAndSum(testArr)


var testArr = [6,3,5,1,2,4]

function valuesAndSum(){
    for (i = 0; i < testArr.length; i++){
        testArr[i] *= i
        console.log(testArr[i])
    }
  
}
valuesAndSum(testArr)