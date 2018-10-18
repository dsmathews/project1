//Ann's variable for counting through the custom agent's script
var count = 0;


const translate = function() {

    //Ann Start--Show the user to wait for the translation and clear the old translation            
        const pauseTranslateEl = "Please Wait...";
        $("#userTranslate").val(pauseTranslateEl);        
    //Ann End--Show the user to wait for the translation and clear the old translation
    

    if ($("#translationBtn").hasClass("btn-primary")) {
        const userSpecies = alienChosen;
        const text = $("#userDeclare").val();
        const inputText = encodeURIComponent(text).replace("!", "%21").replace("%0A", "");
        const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
        const URL = "https://api.funtranslations.com/translate/";
        const queryURL = corsAnywhere + URL + userSpecies + ".json?text=" + inputText;
        let apiKey;
        switch (alienChosen) {
            case "pirate":
                apiKey = "YlgBEfpCCUfmdcye0sEOUweF";
                break;
            case "yoda":
                apiKey = "ESnC7vI4Fe8amXwd_l5xpQeF";
                break;
            case "sith":
                apiKey = "Q90VHIMhIMKix0vDfIU_LgeF";
                break;
        }
      
        $.ajax({
            url: queryURL,
            method: 'GET',
            beforeSend: function(xhr){xhr.setRequestHeader('X-FunTranslations-Api-Secret', apiKey);}
        }).then(function(response) {
            const ans = response.contents.translated;
            console.log(ans);
         
        //Ann Start - Let's put the translated text below the user input, because it's hard to see when it changes.
            $("#userTranslate").val(ans);
        //Ann End - Let's put the translated text below the user input, because it's hard to see when it changes.
            
        //Ann Start--call the custom agent's script and count to the next question.            
            communicate(count);
            count = count + 1;
        //Ann End--call the custom agent's script and count to the next question.

        }).catch(function() {
            console.log("Failed to retieve translation information!");
        })
    } else {
        
//Ann Start--Temporarily bypass to avoid too many requests
    
    const bypass = function(text) {
        const ans = "Translation Function Bypassed";
        $("#userTranslate").val(ans); 
    }
    
    setTimeout(function() {
        //Call the custom agent's script and count to the next question.        
        communicate(count);
        count = count + 1;
        bypass(text);          
    }, 2000);
 
//Ann End--Temporarily bypass to avoid too many requests


    }
}

const translationBtn = function() {
    if ($(this).hasClass("btn-primary")) {
        $(this).removeClass("btn-primary");
        $(this).addClass("btn-dark");
        $(this).text("The Translation is off");
    } else {
        $(this).removeClass("btn-dark");
        $(this).addClass("btn-primary");
        $(this).text("");
    }
}