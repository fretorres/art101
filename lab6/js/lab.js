// index.js - Lab 6, Arrays anf objects
// Author: Freddie Torres
// Date: April 29, 2024

// Define Variables
Modesoftransport = ["golfredo", "Bike", "Skateboard"]

// create an object for modes of transport
golfredo = {
    make: "Volkswagen",
    model: "Golf",
    color: "Grey",
    year: 2005,
    age: function() {
        return 2024 - this.year;
  }
}

// output
document.writeln("Modes of transportation")
document.writeln("golfredo: <pre>",
  JSON.stringify(golfredo, null, '\t'),"</pre>");

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
