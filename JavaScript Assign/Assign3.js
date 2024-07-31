// Guess the correct No. Game

let max = prompt('enter the max number');
const random = Math.floor(Math.random()*max)+1
let guess = prompt('guess a number')

while(true){
       if ( guess=='quit'){
              console.log('user quit')
              break;
       }
       else if( guess == random){
              console.log('correct guess')
              break;
       }
       else if ( guess < random ){
              guess = prompt('ur guess was smaller. Try again')
       }
       else if ( guess > random ){
              guess = prompt('ur guess was larger. Try again')
       }
       else {
              guess = prompt('ur guess is wrong try again')
       }
}