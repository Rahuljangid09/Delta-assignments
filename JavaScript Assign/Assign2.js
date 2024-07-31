// 1] Code for greater number in array than the given number.

let arr = [2,5,7,8,4,6,9]
let num = 5;

function larger(){
       for( let i=0; i<arr.length; i++){
              if(arr[i]>num){
                     console.log(arr[i])

              }
       }
}


// 2] Enter 3 number and get the greater one

let num1=prompt('enter 1st num');
let num2 = prompt('enter 2nd num');
let num3 = prompt('enter 3rd num');

if(num1>num2){
    if (num1>num3){
        console.log(num1,'is greatest')
    }
    else{
        console.log(num3,' is grestest')
    }
}
else{
    if (num2>num3){
        console.log(num2, 'is greatest')
    }
    else{
        console.log(num3 ,'is greatest')
    }
}

// Get largest number in array

let arr2 = [4,2,6,1,8,9,5];
largest = 0;

for(i=0; i<arr.length-1; i++){
    if(largest<arr[i]){
        largest = arr[i]
    }
}
console.log(largest)