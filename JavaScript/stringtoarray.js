
// function findLongestWordLength(str) {
//     let sortedWords = str.split(' ').sort((a, b) => b.length - a.length)
//     console.log(sortedWords[0])
//     return sortedWords[0].length
//   }

import { array } from "prop-types"

  
// findLongestWordLength("The quick brown fox jumped over the lazy dog");



// //String to Word Array
// Given a string, return an array with each individual word in it
// Ex: Given "Hello World" return ["Hello", "World"]
// Ex: Given "Happy Monday everyone" return ["Happy", "Monday", "everyone"]

function strToWordArray(str){
    newArray = str.split(" ")
    return newArray
}

console.log(strToWordArray("Hello World"))


// //Reverse Word Order
// Given a string, return a new string that has all the words reversed (NOT the letters)
// Ex: Given "Hello World" return "World Hello"
// Ex: Given "Happy Monday everyone" return "everyone Monday Happy"


function strToWordArray(str){
    newArray = str.split(" ").reverse().join(" ")
    return newArray
}

console.log(strToWordArray("Hello World"))




// //String Rotation
// Given a string and a number, rotate a string by that number
// Ex: Given RotateString("Hello World",3) return "rldHello Wo"
// Ex: Given RotateString("Rotated",4) return "atedRot"

function stringRotation(str, num){
    for(i = 0; i < str.length; i++){
        var counter = num
        for (j = str.length-1; 0 < counter ; j--){ 
            temp = str[j]
            console.log(temp)
            tempTwo = str[i]
            str[i] = temp
            tempThree= str[i+1]
            console.log(str[i])
            counter = counter - 1
        }   
    return str
    }
}
console.log(stringRotation("Hello World", 3))

// //String dedupe
// Given a string, return a new string that has all duplicate letters removed -- do not count capital and lowercase as duplicates
// Ex: given: "Alabama" return "Alabm"
// Ex: given: "It's time to duel!" return "It's imeodul!" (notice a space was also counted as a letter)

function stringDedupe(str, n){
    index = 0
    for(i = 0; i < n; i++){
        for(j = 0; j < i; j++){
            if ( str[i] == str[j]){
                break;
            }
        }
        if(j == i){
            str[index++] = str[i]
            
        }
    }
    return str 
    
}
str = "Alabama"
n = str.length
console.log(stringDedupe(str, n))



str = "It's time to duel!"
newStr = [...new Set(str)].join(" ")
console.log(newStr)


// Given a string, return an encoded version of it. (Assume the letters are in order)
// Ex: given "aaaabbbbbcc" return "a4b5c2"
// Ex: given "dddddddeeef" return "d7e3f1"
// ttttttqqqqllwll = t6q4l2w1l2

function encodeString(str){
    var newStr= ""
    var counter = 0
    for(i = 0; i < str.length; i++){
        if (str[i] == str[i+1]){
            counter += 1
        }
        if (str[i] != str[i+1]){
            counter += 1
            newStr = newStr.concat(str[i], counter)
            counter = 0
        }
        }
        return newStr
    }
ex1 = "aaaabbbbbcc"
ex2 = "dddddddeeef"
ex3 = "ttttttqqqqllwll"

console.log(encodeString(ex1))


// //String decode
// Given an encoded string, decode it
// Ex: given "a3b7c12" return "aaabbbbbbbcccccccccccc"
// Ex: given "d1e10f4" return "deeeeeeeeeeffff"

function decodeString(str){
    num = 0
    reg = /\d+/g;
    for(i = 0; i < str.length; i++){
        num = str.match(reg)
        console.log(num)
    }
    return num
}

console.log(decodeString("a3b7c12"))



function pangram(str, arr){
    var alpha = "abcdefghijklmnopqrstuvwxyz"
    alpha = alpha.split(" ")
    return alpha
    }


function alphaCheck(letter, arr){
for(i= 0; i <= array.length - 1; i++){
    if(letter == arr[i]){
        arr.splice(i, 1)
    }
}
}

function hasAllAlpha(str){
    let abc = pangram()
    let str = str.split(" ").join("").split("")
    for (let i = 0; i <= str.length; i++){
        alphaCheck(str[i], abc)
    }
    if (abc.length === 0){
        return true
    } else {
        return false
    }

}

function isPangram (str){
    var result = []
    for (let i = 0; i <= str.length -1; i++){
        if(hasAllAlpha(str[i])){
            result.push("true")
        } else {
            result.push("false")
        }
    }
    return result
}

console.log(isPangram("Sphinx of black quartz, judge my vow"))