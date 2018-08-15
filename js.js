/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give the <body> element a background of #bdc3c7*/
var getBodyElement = document.getElementsByTagName("body");
getBodyElement[0].style.backgroundColor = "#bdc3c7";

/* Make the <h1> element #9b59b6*/
var getH1Tag = document.querySelectorAll("h1");
getH1Tag[0].style.color = "#9b59b6";

/* Make all <h2> elements orange */
var getH2Tag = document.querySelectorAll("h2");
getH2Tag[0].style.color = "orange";

/* Make all <li> elements blue(pick your own hexadecimal blue)*/
var allLiTags = document.getElementsByTagName("li");
for(var x = 0; x<allLiTags.length; x++){
    allLiTags[x].style.color = "#0000ff";
}

/*Change the background on every paragraph to be yellow*/
var allpTags = document.getElementsByTagName("p");
for (var y = 0; y<allpTags.length; y++){
    allpTags[y].style.backgroundColor = "yellow";
}

/*Make all inputs have a 3px red border*/


/* Give everything with the class 'hello' a white background*/
var getAllHello = document.getElementsByClassName("hello");
getAllHello.style.backgroundColor = "White";
//in progress when stopped

/* Give the element with id 'special' a 2px solid blue border(pick your own rgb blue)*/


/*Make all the <p>'s that are nested inside of divs 25px font(font-size: 25px)*/
