"use strict";
// Magicians: Make a array of magician's names.Pass the array to a function called show_magicians(), which prints the names of each magician in the array.
let magician = ['harry potter', 'hermione granger', 'ron weasley ', 'Albus dumledore'];
function show_magicians(Magicians) {
    Magicians.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
