var drinkQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

$.ajax({
    url: drinkQueryURL,
    method: "GET"
}).then(function(response){
    console.log(drinkQueryURL)
    var drinkInfo = response.drinks[0];
    console.log(drinkInfo)
    drinkName = response.drinks[0].strDrink
    console.log(drinkName)
    drinkPic = response.drinks[0].strDrinkThumb
    console.log(drinkPic)

    //console.log ingredients
    var drinkInfo = response.drinks[0];
    console.log(drinkInfo)

    for (var i = 1; i <= 15; i++) {

        var measure = eval("drinkInfo.strMeasure" + i);
        var ingredient = eval("drinkInfo.strIngredient" + i);
        console.log(measure + " " + ingredient);

        if (!measure)
            measure = "";
        if (ingredient) {
            //appending it to html
            console.log("yes");
        }
    }
    /*console.log(response.drinks[0].strIngredient1)
    console.log(response.drinks[0].strIngredient2)
    console.log(response.drinks[0].strIngredient3)
    console.log(response.drinks[0].strIngredient4)
    console.log(response.drinks[0].strIngredient5)
    console.log(response.drinks[0].strIngredient6)
    console.log(response.drinks[0].strIngredient7)
    console.log(response.drinks[0].strIngredient8)
    console.log(response.drinks[0].strIngredient9)
    console.log(response.drinks[0].strIngredient10)
    console.log(response.drinks[0].strIngredient11)
    console.log(response.drinks[0].strIngredient12)
    console.log(response.drinks[0].strIngredient13)
    console.log(response.drinks[0].strIngredient14)
    console.log(response.drinks[0].strIngredient15)
    //instructions
    console.log(response.drinks[0].strInstructions)
    //console.log measuring sizes
    console.log(response.drinks[0].strMeasure1)
    console.log(response.drinks[0].strMeasure2)
    console.log(response.drinks[0].strMeasure3)
    console.log(response.drinks[0].strMeasure4)
    console.log(response.drinks[0].strMeasure5)
    console.log(response.drinks[0].strMeasure6)
    console.log(response.drinks[0].strMeasure7)
    console.log(response.drinks[0].strMeasure8)
    console.log(response.drinks[0].strMeasure9)
    console.log(response.drinks[0].strMeasure10)
    console.log(response.drinks[0].strMeasure11)
    console.log(response.drinks[0].strMeasure12)
    console.log(response.drinks[0].strMeasure13)
    console.log(response.drinks[0].strMeasure14)
    console.log(response.drinks[0].strMeasure15)*/

    $("#drink-container-results").text("drink name: " + drinkName);
})