

recipeBtn.on('click', generateRecipe);



function generateRecipe(event) {
    event.preventDefault();
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

    var previousIngredients = {
        ingredients};

    localStorage.setItem('previousIngredients', JSON.stringify(previousIngredients));
    // var previousSearches = $('<div class = "previousSearch" id = "previousSearch">').text(JSON.parse(localStorage.getItem('previousIngredients')));
    // $('body').append(previousSearches);
    console.log(previousIngredients);

};
    



    // var saveButton = $('<button class = "save" id = "saveBtn">').html('Save this recipe!').on('click', saveRecipe);
    // $(recipeLink).append(saveButton);
    // function saveRecipe(event) {
    // event.preventDefault();
    // console.log($(this).text());
            // var storedRecipes = {
            // recipe: result.title,
            // recipeLink: result.ingredients,
            // };
            // console.log(storedRecipes);
            // localStorage.setItem('storedRecipes', JSON.stringify(storedRecipes));
