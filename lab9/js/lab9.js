/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Fre Torres
   Date: 2024
*/

// Append the button to the .minor-section
$(".minor-section").append("<buxtton class='btn btn-secondary highlight-button'>Make Special</button>");

$(".highlight-button").click(function(){
    $("#Challenge").toggleClass("special");
    $("#Problems").toggleClass("special");
    $("#Results").toggleClass("special");
    $("#Reflection").toggleClass("special");
});