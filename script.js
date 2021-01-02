//general container
var generalContainer = $('<div class = "container">');
$('body').append(generalContainer);

//headers
var titleSubDiv = $('<h2 class= "has-text-centered is-size-6 pt-6 appH2" id = "appH2">').text('Interactive Entertainment Planner');
$('.container').append(titleSubDiv);


var headerDiv = $('<h1 class = "has-text-centered is-size-1 pt-1 pb-3  class = "appH1" id = "appH1">').text(' Let\'s have fun tonight!');
$('.container').append(headerDiv);

var headerSubDiv = $('<h2 class= "has-text-centered is-size-5 pt-3 appH2" id = "appH2">').text('Need help with your evening plans? Well you\'ve come to the right place! Welcome friend!');
$('.container').append(headerSubDiv);


var appIntroText = $('<p class = "has-text-centered is-size-6 pt-6 pb-5 appIntro" id = "appIntro">').text('First, enter a movie title or genre in the input field below. Then click the following buttons to generate a drink and a recipe. Finally, have fun!');
$('.container').append(appIntroText);

//make 3 containers, one for each field

//movie
var movieContainer = $('<div class = "container column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd" id = "movie-container">');
$('body').append(movieContainer);
//create btn
movieInput = $("<input>")
movieInput.attr('id', 'movie-input');
movieBtn = $("<button>")
movieBtn.text('Enter');
movieBtn.attr('class', 'button movie-button', );
$("#movie-container").append(movieInput)
$("#movie-container").append(movieBtn)
//container for results
var movieResultsContainer = $('<div class = "container" id = "movie-container-results">');
$('body').append(movieResultsContainer);

//drinks
var drinkContainer = $('<div class = "container column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd" id = "drink-container">');
$('body').append(drinkContainer);
//create btn
drinkBtn = $("<button>")
drinkBtn.text('Generate Drink');
$("#drink-container").append(drinkBtn)
drinkBtn.attr('class', 'button')
//container for results
var drinkResultsContainer = $('<div class = "container" id = "drink-container-results">');
$('body').append(drinkResultsContainer);


//recipe
var recipeContainer = $('<div class = "container column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd" id = "recipe-container">');
$('body').append(recipeContainer);
//create btn
recipeInput = $("<input>").attr('id', 'recipeInput').attr('placeholder', 'Enter ingredients separated by a comma!');
recipeBtn = $("<button>").attr('id', 'recipeSearch');
recipeBtn.text('enter');
$("#recipe-container").append(recipeInput)
$("#recipe-container").append(recipeBtn)
recipeBtn.attr('class', 'button');
//container for results
var recipeResultsContainer = $('<div class = "container" id = "recipe-container-results">');
$('body').append(recipeResultsContainer);


