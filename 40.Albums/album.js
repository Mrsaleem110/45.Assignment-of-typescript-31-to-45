"use strict";
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album('Artist 1', 'Album title 1');
console.log(album1);
const album2 = make_album('Artist 2', 'Album title 2');
console.log(album2);
const album3 = make_album('Artist 3', 'Album title 3');
console.log(album3);
