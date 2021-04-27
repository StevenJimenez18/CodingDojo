function pangram(){
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