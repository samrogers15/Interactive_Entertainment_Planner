var drinkQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"


//create an onclick event 
$( "#drink-button" ).click(function() {

    //add the ajax
    $.ajax({
        url: drinkQueryURL,
        method: "GET"
    }).then(function(response){
    
        console.log(drinkQueryURL)
    
        //console.log ingredients
        var drinkInfo = response.drinks[0];
        console.log(drinkInfo)

    
        //append drink name 
        drinkName = response.drinks[0].strDrink
        console.log(drinkName)
        var drinkResults = $("#drink-container-results").append("Drink Name: " + drinkName + "<br>");
        drinkResults.attr('class', 'drink-results mt-4 mb-6 has-text-centered has-background-warning-light is-block has-text-weight-semibold pt-4 pb-4');
    
        //and picture
        drinkPic = response.drinks[0].strDrinkThumb
        console.log(drinkPic)
        var image = $("<img>").attr("src", drinkPic);
        $("#drink-container-results").append(image);
        image.attr('class', 'drink-image image is-128x128 image is-inline-block');
    
        $("#drink-container-results").append("<br>" + "Ingredients:" + "<br>");
    
       // loop through and append ingredients plus measurments 
        for (var i = 1; i <= 15; i++) {
    
            var measure = eval("drinkInfo.strMeasure" + i);
            var ingredient = eval("drinkInfo.strIngredient" + i);
            console.log(measure + " " + ingredient);
    
            if (measure === null)
                console.log("null"); else 
                $("#drink-container-results").append( measure + " " + ingredient + "<br>");
        }
    
        //append instructions
        var drinkInst = response.drinks[0].strInstructions;
        console.log(drinkInst)
        $("#drink-container-results").append("Instructions: " + drinkInst + "<br>");

    })
    
});
