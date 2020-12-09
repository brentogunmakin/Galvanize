

let Movies = {
	"1":{
		"Title":"Star Wars Episode 4",
		"ReleaseDate":"May 25, 1977",
		"Category":"Action, Adventure, Fantasy",
		"Actors":"Mark Hamill, Carrie Fisher, Harrison Ford, Alec Guinness",
		"Description":"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader."
	},
	"2":{
		"Title":"Battlestar Galactica Razor",
		"ReleaseDate":"November 24, 2007",
		"Category":"Action, Drama, Sci-Fi",
		"Actors":"Edward James Olmos, Mary McDonnell, Katee Sackhoff",
		"Description":"A two-hour Battlestar Galactica special that tells the story of the Battlestar Pegasus several months prior to it finding the Galactica."
	},
	"3":{
		"Title":"Battlestar Galactica",
		"ReleaseDate":"January 1, 2004",
		"Category":"Action, Adventure, Drama",
		"Actors":"Edward James Olmos, Mary McDonnell, Jamie Bamber",
		"Description":"When an old enemy, the Cylons, resurface and obliterate the 12 colonies, the crew of the aged Galactica protect a small civilian fleet - the last of humanity - as they journey toward the fabled 13th colony, Earth."
	},
	"4":{
		"Title":"Battlestar Galactica Blood & Chrome",
		"ReleaseDate":"November 9, 2012",
		"Category":"Action, Sci-Fi",
		"Actors":"Luke Pasqualino, Ben Cotton, Lili Bordan",
		"Description":"The adventures of young William Adama in the First Cylon War."
	},
	"5":{
		"Title":"Guardians of the Galaxy Vol. 2",
		"ReleaseDate":"May 5, 2017",
		"Category":"Action, Adventure, Comedy",
		"Actors":"Chris Pratt, Zoe Saldana, Dave Bautista",
		"Description":"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego."
	},
	"6":{
		"Title":"The Godfather",
		"ReleaseDate":"March 24, 1972",
		"Category":"Crime, Drama",
		"Actors":"Marlon Brando, Al Pacino, James Caan",
		"Description":"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
	},
	"7":{
		"Title":"for the Birds",
		"ReleaseDate":"November 2, 2001",
		"Category":"Animation, Short, Comedy",
		"Actors":"Ralph Eggleston",
		"Description":"A group of snooty birds roosting on a telephone wire get their just deserts when a goofy bird drops in."
	}
}
let previousMovieCode = '';
function getMovieInfo(movieCode) {
    previousMovieCode = movieCode;
    for (i = 1; i < 8; i++){
        let x = document.getElementById(i)
        if(i != movieCode) {
            if (x.style.display === "none") {
                x.style.display = "block";
              } else {
                x.style.display = "none";
              }
        }
    }
    let y = document.getElementById('Back2results');
    let z = document.getElementById('LeaveAComment');
    

    if (y.style.display == "none") {
        y.style.display = "flex";
        z.style.display = "flex";
      } else {
        y.style.display = "none";
        z.style.display = "none";
      }
 
}
function lolezworkaround() {
    getMovieInfo(previousMovieCode);
}

//I need coors to try this so it's a nope for me
/* function loadMovies () {
    fetch('./Data.json')
    .then((input) => {input.json()})
    .then(input => (Movies = input))
    
} */


