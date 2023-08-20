$(() => {

    $("#click").click(event => {
        event.preventDefault()
        let cabbageAmount=$("#cabbage").val()

        const cabbageOk = validateCabbage(cabbageAmount);

        if (cabbageOk) {
            calculate(cabbageAmount);
        }
    })

})


calculate = (cabbage) => {

    let ingredients = {
        salt: 36 * cabbage,
        chillipowder: 67 * cabbage,
        garlic: 42 * cabbage,
        saltedshrimp: 29 * cabbage,
        ginger: 2* cabbage,
        fishsauce: 42 * cabbage,
        finesalt: 6 * cabbage,
        sugar: 17 * cabbage
    }

    let ut = "<table class=\"table table-striped\">" + "<tr>" + "<th>Salt for salting(gram)</th>" +
        "<th>Chilli Powder(gram)</th>" + "<th>Garlic(gram)</th>" + "<th>Salted Shrimp(gram)</th>" + "<th>Ginger(gram)</th>" +
        "<th>Fish Sauce(gram)</th>" + "<th>Fine Salt(gram)</th>" + "<th>Sugar(gram)</th>" + "</tr>";



    ut += `<tr><td>${ingredients.salt}</td><td>${ingredients.chillipowder}</td><td>${ingredients.garlic}</td><td>${ingredients.saltedshrimp}</td>
    <td>${ingredients.ginger}</td><td>${ingredients.fishsauce}</td><td>${ingredients.finesalt}</td><td>${ingredients.sugar}</td></tr>`





    ut += "</table>"

    $("#ingredients").html(ut);
}

