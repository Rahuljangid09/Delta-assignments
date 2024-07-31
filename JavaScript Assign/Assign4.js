// Longest-Name in the array

let country=['australia','india','germany','united states of america'];

function longestname(){
       ansindex=0;
       for(let i=0; i<country.length; i++){
              anslen = country[ansindex].length;
              currlen = country[i].length;
              if( currlen > anslen){
                     ansindex=i;
              }
       }
       return country[ansindex];
}