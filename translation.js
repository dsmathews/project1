const translate = function() {
    const userSpecies = alienChosen;
    const text = $("#userDeclare").val();
    const inputText = encodeURIComponent(text).replace("!", "%21").replace("%0A", "");
    const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
    const URL = "https://api.funtranslations.com/translate/";
    const queryURL = corsAnywhere + URL + userSpecies + ".json?text=" + inputText;
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        const ans = response.contents.translated;
        $("#userDeclare").val(ans);
    }).catch(function() {
        alert("Failed to retieve translation information!");
    })
}