//Customs Agent master sequence guides user through passport control process
//Displays status images and directs users attention to facial scanning, translation
//Prompts users with questions from the agent's, dismiss user, and next user.


    const dismissal = function() {
   
        //Show Dismissal Image
        $("#statusArea").html($('<img>').addClass("img-fluid").attr("src", "./assets/gitPull.gif").attr("alt", "Responsive image"));

        setTimeout(function() {
        //Show Welcome page after dismissal timeout.
        $("#statusArea").html($('<img>').addClass("img-fluid").attr("src", "./assets/welcome.gif").attr("alt", "Responsive image"));
        }, 8000);

    };
    
    
    const communicate = function(count) {
        //Funtion is called when Translate button is clicked.

        //Array holds Customs Agent's script
        let agentScript = ["Do you have anything to declare?","Are you carrying any of the following prohibited items?", "Where will you be staying?", "You may now proceed" ]
           
        //*/Customs Agents questions/directions.

            //Change text color with each question to show user that a new question has appeared.
            $('#agentDeclare').toggleClass('text-warning');
            //Show customs agent question and clear user input
            $("#agentDeclare").text(agentScript[count]);
            $('#userDeclare').val("");

        //Status images that corellate with questions.
        //Blank    
        if (count === 0) {
            $("#statusArea").html($('<img>').addClass("img-fluid").attr("src", "./assets/blank.gif").attr("alt", "Responsive image"));
        };

        //Prohibited Items
        if (count === 1) {
            $("#statusArea").html($('<img>').addClass("img-fluid").attr("src", "./assets/prohibited.gif").attr("alt", "Responsive image"));
        };

        //Blank
        if (count === 2) {
            $("#statusArea").html($('<img>').addClass("img-fluid").attr("src", "./assets/blank.gif").attr("alt", "Responsive image"));
        };

        //Dismiss User
        if (count > 2) {
            dismissal(); 
        };
                 
    };
    
    const species = function() {
        //Call this function when Face++ is done.
        //Species identification should be done too.

        //Display status images to guide user through sequence
       
        
        //Facial Recognition Complete
        setTimeout(function() {            
            $("#statusArea").html($('<img>').addClass("img-fluid").attr("src", "./assets/faceRecComp.gif").attr("alt", "Responsive image"));
        }, 2000);

        
      
        //Species Identified      
        setTimeout(function() {
            $("#statusArea").html($('<img>').addClass("img-fluid").attr("src", "./assets/speciesId.gif").attr("alt", "Responsive image"));
        }, 4000);
        
        

        //Direct user to translation area.
        setTimeout(function() {
            $("#statusArea").html($('<img>').addClass("img-fluid").attr("src", "./assets/agentQuestions.gif").attr("alt", "Responsive image"));
        }, 6000);
      
                         
        
        //Load fist question into the translator       
        $('#userDeclare').val("");
        $('#userTranslate').val("");
        $("#agentDeclare").text("What is the purpose of your trip?");
        //translate funtion will now invoke communicate() function
    };
    
    
    
    
    const customsAgent = function() {
        //customsAgent function is invoked when camera button is click, and itiates master sequence.

        //Initialize customs agent question counter
        count = 0;      
       
        //Display status image indicating face scanning in progress.
        $("#statusArea").html($('<img>').addClass("img-fluid").attr("src", "./assets/scanningFace.gif").attr("alt", "Responsive image"));     

    };


