/*eslint-env browser*/

var Jukebox = function () {
    "use strict";
    var albums = [], self;
    self = {
        addAlbum: function (album) {
            albums.push(album);
        },
        favoriteAlbum: function () {
            var max = 0, fav, i;
            
            for (i = 0; i < albums.length; i++) {
                if (albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                }
            }
            return fav.display();
        }
    };
    return self;
};

var Album = function (artist, album) {
    "use strict";
    var self = {
        played: 0,
        play: function () {
            this.played += 1;
        },
        display: function () {
            return artist + " \"" + album + "\". It's has been played " + this.played + " times.";
        }
    };
    return self;
};
//CREATE JUKEBOX
var jukebox = new Jukebox();

//CREATE ALBUMS
var album1 = new Album("Shakira", "Knock on my door");
var album2 = new Album("Marilyn Manson", "Hollywood");
var album3 = new Album("The Prodigy", "The fat of the land");

//ADD ALL ALBUMS TO JUKEBOX
jukebox.addAlbum(album1);
jukebox.addAlbum(album2);
jukebox.addAlbum(album3);

//PLAY ALBUMS
album1.play();
album1.play();
album1.play();
album2.play();
album2.play();
album2.play();
album1.play();
album2.play();
album2.play();
album3.play();
album3.play();
album3.play();
album3.play();
album3.play();
album3.play();
album3.play();
album3.play();
album3.play();
album3.play();
album2.play();
album2.play();

//DISPLAY FAVORITE ALBUM BASED ON PLAYS
window.console.log("Your favorite album is " + jukebox.favoriteAlbum());