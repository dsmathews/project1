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

//https://en.wikipedia.org/wiki/Percent-encoding
//Test section
let text = "Hello sir! my mother goes with me to the ocean.";
let preset = "pirate";
userSpecies = preset;
console.log(translate(userSpecies, text));

/*
let a;
let i = 0;

while (!a) {
	if(i===5) {
	  a=6;  
  }
  i+=1;
  console.log(i);
}
*/