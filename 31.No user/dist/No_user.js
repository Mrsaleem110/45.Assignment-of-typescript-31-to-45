"use strict";
// No users: Add an if test to excercise 28 to make sure the list of users is not empty.
// if the list is empty,print the message we need to find some users!
// Remove all of the usernames from your array, and make sure the correct message is printed.
let usernames = ['admin', 'm.saleem', 'naqash', 'murtasim', 'salar shah'];
if (usernames.length === 0) {
    console.log('we need to find some users!');
}
else {
    usernames = [];
    console.log('All user names have been removed.' + usernames.length);
}
