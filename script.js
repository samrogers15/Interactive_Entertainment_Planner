//general container
var generalContainer = $('<div class = "container">');
$('body').append(generalContainer);

//headers
var titleSubDiv = $('<h2 class= "has-background-warning-light has-text-weight-semibold has-text-centered is-size-6 pt-4 pb-4 appH2" id = "appH2">').text('Interactive Entertainment Planner');
$('.container').append(titleSubDiv);


var headerDiv = $('<h1 class = "has-text-centered is-uppercase is-size-1 pt-1 pb-3  class = "appH1" id = "appH1">').text(' Let\'s have fun tonight!');
$('.container').append(headerDiv);

var headerSubDiv = $('<h2 class= "has-background-warning-light  has-text-centered is-size-5 pt-4 pb-4 appH2" id = "appH2">').text('Need help with your evening plans? Well you\'ve come to the right place! Welcome friend!');
$('.container').append(headerSubDiv);


var appIntroText = $('<p class = "has-text-centered has-text-light has-background-primary-dark pt-5 pb-5 appIntro" id = "appIntro">').text('First, enter a movie title in the input field below. Then click the following buttons to generate a drink and a recipe. Finally, have fun!');
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
movieBtn.attr('class', 'button movie-button has-background-primary-dark has-text-light has-text-weight-light', );
$("#movie-container").append(movieInput)
$("#movie-container").append(movieBtn)
//container for results
var movieResultsContainer = $('<div class = "container" id = "movie-container-results">');
$('body').append(movieResultsContainer);
movieResultsContainer.attr('class', 'movie-results has-text-centered has-background-warning-light is-block has-text-weight-semibold mb-6')

//drinks
var drinkContainer = $('<div class = "container column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd" id = "drink-container">');
$('body').append(drinkContainer);
//create btn
drinkBtn = $("<button id='drink-button'>")
drinkBtn.text('Generate Drink');
$("#drink-container").append(drinkBtn)
drinkBtn.attr('class', 'button has-background-primary-dark has-text-light has-text-weight-light')
//container for results
var drinkResultsContainer = $('<div class = "container" id = "drink-container-results">');
$('body').append(drinkResultsContainer);


//recipe
var recipeContainer = $('<div class = "container column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd" id = "recipe-container">');
$('body').append(recipeContainer);
//create btn
recipeInput = $("<input>").attr('id', 'recipeInput').attr('placeholder', 'Enter ingredients separated by a comma!');
recipeBtn = $("<button>").attr('id', 'recipeSearch');
recipeBtn.text('Enter');
$("#recipe-container").append(recipeInput)
$("#recipe-container").append(recipeBtn)
recipeBtn.attr('class', 'button has-text-light has-text-weight-light mb-4 has-background-primary-dark');
//container for results
var recipeResultsContainer = $('<div class = "container" id = "recipe-container-results">');
$('body').append(recipeResultsContainer);
recipeResultsContainer.attr('class', 'recipe-results mt-4 mb-6 has-text-centered has-background-warning-light is-block has-text-weight-semibold');



