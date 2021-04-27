//1.
function a(){
    return 35;
}
console.log(a())

//prediction
//35

//2.
function a(){
    return 4;
}
console.log(a()+a());

//prediction: 8 
//Answer: 8


//3.
function a(b){
    return b;
}
console.log(a(2)+a(4));


//prediction: 6
//answer: 6

//4.
function a(b){
        console.log(b);
        return b*3;
    }
    console.log(a(3));

//prediction: 3, 9    
//answer: 3,9

function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10));
 
//prediction: 40
//answer: 40

//5.

function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

//prediction: 4
//answer: 4

//6.

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );


//prediction: 10, 3, 30, 
//Answer: 10, 3, 30

//7.
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

//prediction: 3, 4
//answer: 3, 4

//8.
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

//Prediction: 2, 5, 8, 11
//Answer: 2, 5, 8, 11

//9.
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));

//prediction:1,2,3,4,5,6,7,8,9,10, 0 
//1,2,3,4,5,6,7,8,9,10, 0

//answer: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0

//10.

function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}

//prediction: Doesnt run due to function not being called
//Answer: doesnt run due to missing functiuon call

//11.

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}

//Prediction: won't run due to missing function call
//answer: wont run due to missing function call

//12.

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

//predict: 15, 15
//answer: 10...I fell for the trap.

//13.
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);

//prediction: 15, 10
//answer: 15, 10

//14.

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

//prediction: 15, 15, 10
//answer: 15, 15