function pangram(str){
    var alpha = "abcdefghijklmnopqrstuvwxyz"
    for(let i = 0; i <= str.length; i++){
        for (let j = 0; j <= str.length; j++){
            var count = 0
                while(count < str.length){
                        count += 1
                        str.find(alpha)
                    }
        }
    }
    return count

}
console.log(pangram("aphinx of black quartz, judge my vow"))