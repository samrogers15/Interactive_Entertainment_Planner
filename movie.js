console.log("https://tastedive.com/api/similar?q=what+dreams+may+come&verbose=1&k=395755-Interact-E48M1JK8");


$(movieBtn).on('click', function(evt){
    var userChoice = $(movieInput).val();
    var similarMovie = "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=" + userChoice + "&verbose=1&k=395755-Interact-E48M1JK8";
    console.log(similarMovie);


$.ajax({
    url: similarMovie,
    method: "GET"
}).then(function(responseMovie){
    console.log(responseMovie);
    $(movieResultsContainer).text(JSON.stringify(movieSuggestion))


   
    var movieSuggestion = $("<p></p>");
    movieSuggestion.text(responseMovie.Similar.Results[0].Name);
    var movieTrailerClip = responseMovie.Similar.Results[0].yUrl;
    var movieTrailer = $("<a></a>").attr('href', movieTrailerClip).text(JSON.stringify(responseMovie.Similar.Results[0].Name));
    console.log(movieTrailer);
    console.log(responseMovie.Similar.Results[0].yUrl);

    // $('body').append('<div class = movieTitle></div>');
    $(movieResultsContainer).append(movieSuggestion);
    $(movieResultsContainer).append(movieTrailer);
})
});
