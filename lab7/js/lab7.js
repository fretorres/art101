/*


   Author: Fre Torres
   Date: June 4, 2024
*/
function sortUserName() {
    var userName = window.prompt("Tell me your name so I can fix it");
    console.log("userName =", userName);
//split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
//sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
//join array back to a string
    var nameSorted = nameArraySort.join('')
    console.log("nameSorted =", nameSorted);
    return nameSorted;
}

document.writeln("fixed it!",
    sortUserName(), "</br>");
