var similarMovie = "https://tastedive.com/api/similar?q=red+hot+chili+peppers%2C+pulp+fiction&verbose=1"

console.log(similar);

var movieSuggestion = $("<p></p>");
movieSuggestion.text(similarMovie);

$('body').append('<div class = movieTitle></div>');
$('.movieTitle').append(movieSuggestion);
