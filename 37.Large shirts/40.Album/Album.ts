// Album:write a function called make_album() that builds a object describing a music album.The function should take in an artist name and an album title, and it should return a object contaiing these two pieces of information. Use the function  to make three dictionaries representing different albums.print each return value to show that objects are storing the album information correctly.Add an optional parameter to make_album() that allows you to store the number of tracks on an album.If the callling line includes a value for the number of tracks, add that value to the album's object. Make at least one new function call that includes the number of tracks on an alblum.
function make_album(artist:string,title:string, tracks?:number){
const alblum:{artist:string, title:string,tracks?:number}
={
    artist:artist,
    title:title
}
if (tracks!== undefined){
    alblum.tracks=tracks;
}
return alblum;

}
const album1 =make_album('artist 1','artist title 1')
console.log(album1)
const album2 =make_album('artist 2','artist title 2')
console.log(album2)
const album3 =make_album('artist 3','artist title 3')
console.log(album3)