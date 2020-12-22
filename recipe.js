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
            console.log(result.title);
            console.log(result.ingredients);
            console.log(result.href);
        })
    });

    // Append everything to the page
    // Put the recipe in local storage - or maybe put the ingredients you've searched for in local storage? That way it could pull back and tell you to be inspirational and search for different ingredients


};







 