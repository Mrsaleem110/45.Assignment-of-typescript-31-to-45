"use strict";
// sandwiches: write a function that accepts a array of items a person wants on a sandwich.The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. call the function three times, using a different number of arguments each time.
function makesandwiche(item) {
    console.log('\nmaking your sandwich with: ');
    item.forEach(element => console.log("- " + element));
    console.log('enjoy your sandwich !\n');
}
makesandwiche(['ham', 'cheese', 'lettuce']);
makesandwiche(['turkey', 'cheese', 'bacon']);
makesandwiche(['peanut butter', 'jelly']);
