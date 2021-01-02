

recipeBtn.on('click', generateRecipe);



function generateRecipe(event) {
    event.preventDefault();
    $('.recipe').empty();
    var ingredients = $('#recipeInput').val().trim();
    console.log(ingredients);
    // new variable should be the string from the user input
    var recipeQueryURL = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=" + ingredients;
    // console.log(ingredientQuery);
    console.log(recipeQueryURL);

    $.ajax({
        url: recipeQueryURL,
        method: "GET"
      }).then(function(response) {
        var responseParse = JSON.parse(response)
        responseParse.results.forEach(function(result){
            var recipeLink = $('<a>').attr('class', 'recipe').attr('href', result.href).attr('target', '_blank').html(result.title + "<br>");
           
            $('body').append(recipeLink);
        });
        // function saveRecipe(ingredients) {
        // console.log(ingredients);
        // };
      
    });

    
    // var previousIngredients = {
    //     ingredients};
    
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
