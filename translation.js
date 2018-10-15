//Ann's variable for counting through the custom agent's script
var count = 0;




const translate = function() {

    //Ann Start--Show the user to wait for the translation and clear the old translation
        //New textblock created to show translation
        console.log("translate");    
        const pauseTranslateEl = "Please Wait...";
        $("#userTranslate").val(pauseTranslateEl);        
    //Ann End--Show the user to wait for the translation and clear the old translation
    
//Ann Start--Temporarily bypass to avoid too many requests
    
// const bypass = function(text) {
//     const ans = text;
//     $("#userTranslate").val(ans); 
// }
  
//     setTimeout(function() {
//         //Ann Start--call the custom agent's script and count to the next question.
//         console.log("count",count);
//         communicate(count);
//         count = count + 1;
//         //Ann End--call the custom agent's script and count to the next question.
//         bypass(text);
//         console.log("Translate bypass time delay");     
//     }, 2000);
    
//Ann End--Temporarily bypass to avoid too many reques





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
        //Ann Start - Let's put the translated text below the user input, because it's hard to see when it changes.
        $("#userTranslate").val(ans);
        //Ann End - Let's put the translated text below the user input, because it's hard to see when it changes.
        
        //Ann Start--call the custom agent's script and count to the next question.
        console.log("count",count);
        communicate(count);
        count = count + 1;
        //Ann End--call the custom agent's script and count to the next question.

    }).catch(function() {
        alert("Failed to retieve translation information!");
    })
}