//general container
var generalContainer = $('<div class = "container">');
$('body').append(generalContainer);

//headers
var headerDiv = $('<h1 class = "appH1" id = "appH1">').text('Interactive Entertainment Planner - Let\'s have fun tonight!');
$('.container').append(headerDiv);

var headerSubDiv = $('<h2 class= "appH2" id = "appH2">').text('Need help with your evening plans? Well you\'ve come to the right place! Welcome friend!');
$('.container').append(headerSubDiv);

var appIntroText = $('<p1 class = "appIntro" id = "appIntro">').text('Here is where we will describe how to use the site!');
$('.container').append(appIntroText);

var appIntroText = $('<p1 class = "appIntro" id = "appIntro">').text('Here is where we will describe how to use the site!');
$('.container').append(appIntroText);

//make 3 containers, one for each field

//drinks
var drinkContainer = $('<div class = "container" id = "drink-container">');
$('body').append(drinkContainer);
//create btn
drinkBtn = $("<button>")
drinkBtn.text('generate a drink');
$("#drink-container").append(drinkBtn)
//container for results
var drinkResultsContainer = $('<div class = "container" id = "drink-container-results">');
$('body').append(drinkResultsContainer);

//movie
var movieContainer = $('<div class = "container" id = "movie-container">');
$('body').append(movieContainer);
//create btn
movieInput = $("<input>")
movieBtn = $("<button>")
movieBtn.text('enter');
$("#movie-container").append(movieInput)
$("#movie-container").append(movieBtn)
//container for results
var movieResultsContainer = $('<div class = "container" id = "movie-container-results">');
$('body').append(movieResultsContainer);

//recipe
var recipeContainer = $('<div class = "container" id = "recipe-container">');
$('body').append(recipeContainer);
//create btn
recipeBtn = $("<button>")
recipeBtn.text('generate a recipe');
$("#recipe-container").append(recipeBtn)
//container for results
var recipeResultsContainer = $('<div class = "container" id = "recipe-container-results">');
$('body').append(recipeResultsContainer);


