var recipeButton = $('<button class = "recipeBtn" id = "recipeBtn">').text('Click here to find a recipe');
$('body').append(recipeButton);

var ingredientForm = $('<form class = "recipeForm id = "recipeForm">');
$('recipeForm').append('<input type = "button" value = "button">');
$('body').append(ingredientForm);

// make a form that grabs the user input

$('.recipeBtn').on('click', generateRecipe);

function generateRecipe() {
    var ingredients = 'onion,garlic,pepper';
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
            
        })
        $('.recipe').on('click', saveRecipe);
    });
    

    function saveRecipe(event) {
        event.preventDefault();
        console.log($(this).text());
        // var storedRecipes = {
        // recipe: result.title,
        // recipeLink: result.ingredients,
        // };
        // console.log(storedRecipes);
        // localStorage.setItem('storedRecipes', JSON.stringify(storedRecipes));
    };
};









 