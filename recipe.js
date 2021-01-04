recipeBtn.on('click', generateRecipe);


var previousIngredients = JSON.parse(localStorage.getItem('previousSearches'));

function generateRecipe(event) {
    event.preventDefault();
    $('.recipe').empty();
    var ingredients = $('#recipeInput').val().trim();
    var recipeQueryURL = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=" + ingredients;

    $.ajax({
        url: recipeQueryURL,
        method: "GET"
      }).then(function(response) {
        var responseParse = JSON.parse(response)
        responseParse.results.forEach(function(result){
            var recipeLink = $('<a>').attr('class', 'recipe').attr('href', result.href).attr('target', '_blank').html(result.title + "<br>");
            $(recipeResultsContainer).append(recipeLink);
        });      
    });
 
    function appendToStorage(name, data) {
        var old = localStorage.getItem(name);
        if (old == null) {
            old = [];
        } else {
            old = JSON.parse(old);
        }
        localStorage.setItem(name, JSON.stringify(old.concat(data)));
    }
    
    appendToStorage('previousSearches', ingredients);
};

if (previousIngredients != null) {
    var previousIngredientsButton = $('<button>').attr('id', 'previousIngredientsBtn').text('Click here to see previously searched ingredients');
    previousIngredientsButton.attr('class', 'button is-small is-fullwidth');
    $('body').append(previousIngredientsButton);
}

function previouslySearchedIngredients() {
    var previousIngredientsDiv = $('<div>').attr('class', 'previousIngredients has-text-weight-light has-text-light has-background-primary-dark box pt-4 pb-4').text(('You\'ve already searched for these ingredients: ' + previousIngredients + ' '));
    console.log(previousIngredients);
    $(recipeResultsContainer).append(previousIngredientsDiv);
}

$('#previousIngredientsBtn').on('click', previouslySearchedIngredients);