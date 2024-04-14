// checking usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// make a list of five or more usernames called current_users.
// make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// loop through the new_users list to see if each new username has already been used.IF it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// make sure your comparison is case insensitive . If 'jhon' has been used ,'JHON' should not be accepted.
let current_users:string[]=['m.saleem','naqash','taha','kawish','tahir']
let new_users:string[]=['m.saleem','naqash','taha','faiq','faqir']
new_users.forEach(newUsername=> {
    let lowerCase = newUsername.toLowerCase();
    if (current_users.map(current_users =>current_users.toLowerCase()).includes(lowerCase)){
        console.log(`The username ${newUsername}is not avaiable.Please write a diffrent username`);   
    }else{
        console.log(`The username ${newUsername}is avaiable`)
    }
})






