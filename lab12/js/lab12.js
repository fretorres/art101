/*


   Author: Fre Torres
   Date: June 4, 2024
*/

function sortingHat(str) {
    var length = str.length;
    var mod = length % 4;
    var house = "";
    
    if (mod === 0) {
        house = "Gryffindor";
    } else if (mod === 1) {
        house = "Ravenclaw";
    } else if (mod === 2) {
        house = "Slytherin";
    } else if (mod === 3) {
        house = "Hufflepuff";
   }
    
   return 'The Sorting Hat has sorted you into ' +house; 
}

document.getElementById("button").addEventListener("click", function() {
   var name= document.getElementById('input').value;
   document.getElementById('output').innerText= sortingHat(name);
});