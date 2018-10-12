const userSpecies;

const translate = function(preset, text) {
    const inputText = encodeURIComponent(text).replace("!", "%21");
    const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
    const URL = "https://api.funtranslations.com/translate/";
    const queryURL = corsAnywhere + URL + preset + ".json?text=" + inputText;
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        let ans = response.contents.translated;
        console.log(ans);
        console.log(typeof ans);
        $("body").text(ans);
        //return ans;
    })
}

//Test section, change lata
let text = "Hello sir! my mother goes with me to the ocean.";
let preset = "pirate";
userSpecies = preset;
console.log(translate(userSpecies, text));
