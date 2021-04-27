//Print Odds 1-20
    for (i = 0; i < 20; i++){
        if (i % 2 != 0){
            console.log(i)
        }
    }


//sum and Print 1-5   

    function sumAndPrint(){
        var sum = 0;
    for (i = 1; i <= 5; i++){
        sum += i
        console.log("Num: " + i , "Sum: " + sum)
        }
        return sum
    }
    sumAndPrint()