// ---------Functions---------


// Print Table of any no.
function printTable(n){
       for(let i=n; i<=n*10; i+=n){
              console.log(i);
       }
}
printTable(5)


// Concatinating Strings
let str=['hi','hello','bye']

function concat(str){
       let result='';

       for(let i=0; i<str.length; i++){
              result += str[i];
       }

       return result;
}


// Odd-Even-Test function
function oddeventest(request,n){
       if( request == 'odd'){
              return function(n){
              console.log(n%2!==0)
              }
       }
       else if( request == 'even'){
              return function(n){
              console.log(n%2==0)
              }
       }
       else{
              console.log('wrong request')
       }
}