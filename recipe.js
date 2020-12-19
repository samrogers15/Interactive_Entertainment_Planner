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
    var queryURL = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=" + ingredients;
    // console.log(ingredientQuery);
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        var responseParse = JSON.parse(response)
        responseParse.results.forEach(function(result){
            console.log(result.title);
            console.log(result.ingredients);
        })
    });
};

// generateRecipe();





 