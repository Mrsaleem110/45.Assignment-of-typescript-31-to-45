// Great Magicians:Start with copy of your program form Exercise 39.Write a function called make_great() that modifies the array of magicians by adding the phrase the great to each magician's name. Call show_magicinas() to see that the list has actually been modified.

let magician:string[]=['harry potter','hermione granger','ron weasley ','Albus dumledore'];

function make_great(magianarry:string[]){
    for(let i=0; i<magianarry.length; i++){
        magician[i] ='the great ' + magianarry[i]
    }
}

function show_magicians(Magicians:string[]){
    Magicians.forEach(element=> {
        console.log(element);
    })
}
make_great(magician);
show_magicians(magician)