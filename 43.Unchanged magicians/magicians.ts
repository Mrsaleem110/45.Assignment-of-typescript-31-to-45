// unchanged magicians: start with your work from Exercise 42. call the function Make_great() with a copy of the array of magician's names. beacuse the original array will be unchanged, return the new array and store it in a separate array. call show_magicians() with each array to show that you have one array of the original names add one array with the great added to each magician's name.


let magician:string[]=['harry potter','hermione granger','ron weasley ','Albus dumledore'];
function copyArray(arr:string[]){
    return[...arr]

}


function make_great(magicianarry:string[]){
    for(let i=0; i<magicianarry.length; i++){
        magicianarry[i] ='the great ' + magicianarry[i]
    }
}

function show_magicians(Magicians:string[]){
    Magicians.forEach(element=> {
        console.log(element);
    })
}
const copymagicianarray=copyArray(magician)

make_great(copymagicianarray);
console.log('This is my original array:')
show_magicians(magician);

console.log('\n\nThis is my modified copy of array:')
show_magicians(copymagicianarray);