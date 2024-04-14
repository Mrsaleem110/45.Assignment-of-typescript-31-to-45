"use strict";
// pizzas : think of at least three kinds of your favourite pizza.store these pizza names in a array, and then use a for loop to print a sentences using the name of the pizza.
// Modify your for loop to print a sentence using the name of the instead of printing just the name of the pizza, for each pizza you should have one line of output containing a simple statement like i like pepperoni pizza.
// add a line at the end of your program,outside the for loop,that states how much you like pizza . The output should consist of three or more lines about the kinds of pizza you like and then an additional sentences, such as I really love pizza!
let pizzas = ['pepperoni', 'cuban', 'bbq chicken'];
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza`);
}
console.log(`I really love pizza!`);
