/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Fre Torres
   Date: June 4, 2024
*/

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
  }
  

$(document).ready(function() {
    // click listener for button
    $("#submit").click(function(){
      const userName = $("#user-name").val();
      const userNameSorted = sortString(userName);
      // append a new div to our output div
      $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
    });
  });
