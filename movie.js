$(movieBtn).on('click', function(evt){
    var userChoice = $(movieInput).val();
    var similarMovie = "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=" + userChoice + "&limit=4&verbose=1&k=395755-Interact-E48M1JK8";
   

$.ajax({
    url: similarMovie,
    method: "GET"
}).then(function(responseMovie){
    console.log(responseMovie);
    $(movieResultsContainer).text(JSON.stringify(movieSuggestion))
    
    $(movieResultsContainer).empty();
    var movieArray = responseMovie.Similar.Results
    for (let i = 0; i < movieArray.length; i++) {
        // const element = responseMovie[i];
        console.log(movieArray[i].Name);
        console.log(movieArray[i].yUrl);
        
       
    var movieSuggestion = $("<p></p>");
    var movieSuggestion = movieArray[i].Name;
    var movieTrailerClip = movieArray[i].yUrl;
    var movieTrailer = $("<a></a>").attr(
        {href: movieTrailerClip,
            target: "blank"
    }).html(JSON.stringify(movieSuggestion) + "<br>");
    console.log(movieTrailer);
    console.log(responseMovie.Similar.Results[0].yUrl);

    // $('body').append('<div class = movieTitle></div>');
    // $(movieResultsContainer).append(movieSuggestion);
    $(movieResultsContainer).append(movieTrailer);
}
})
});
