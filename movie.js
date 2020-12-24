var userChoice = 'mermaids';
var similarMovie = "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=" + userChoice + "&verbose=1&k=395755-Interact-E48M1JK8";

console.log(similarMovie);
$.ajax({
    url: similarMovie,
    method: "GET"
}).then(function(responseMovie){
    console.log(responseMovie);
    // const unixTimeCurrent = responseCurrent.dt;
    // var weatherIcon = responseCurrent.weather[0].icon;
    // var todaysIcon = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";

var movieSuggestion = $("<p></p>");
movieSuggestion.text(responseMovie.Similar.Results[0].Name);
var movieTrailerClip = responseMovie.Similar.Results[0].yUrl;
var movieTrailer = $("<a href=responseMovie.Similar.Results[0].yUrl></a>");
movieTrailer.attr(responseMovie.Similar.Results[0].wUrl);
console.log(movieTrailer);
console.log(responseMovie.Similar.Results[0].yUrl);

// $('body').append('<div class = movieTitle></div>');
$(movieResultsContainer).append(movieSuggestion);
$(movieResultsContainer).append(movieTrailer);
})
