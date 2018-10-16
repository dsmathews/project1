
    const dismissal = function() {
    console.log("You may now proceed.", "Step aside to the autopsy area");
    $("#statusArea").prepend($('<p>').text(`You may now proceed.`));
    $('#userDeclare').toggleClass('bg-light');
    $('#userTranslate').toggleClass('bg-light');
    console.log("Git Pull if you have not");
        //Show Git Pull Image
    $("#statusArea").prepend($('<img>').attr("src", "./assets/gitPull.gif"));

    };
    
    
    const communicate = function(count) {
        
        //open access to translator window.
        agentScript = ["Do you have anything to declare?","Are you carrying any of the following prohibited items?", "Where will you be staying?", "You may now proceed" ]
            //on click translator
        console.log("scriptCounter-communicate", count);
        console.log("Agent script-communicate?", agentScript[count]);
        $('#agentDeclare').toggleClass('text-warning');
        $("#agentDeclare").text(agentScript[count]);
        if (count === 1) {
            $("#statusArea").prepend($('<img>').attr("src", "./assets/prohibited.gif"));
        }
        
        if (count > 2) {
            dismissal(); 
        }
                 
    };
    
    const species = function() {
        //Call this function when Face++ is done.
        //Species identification should be done too.

        let speciesName = alienChosen;
        let languageName = alienChosen;

        console.log("Species Identified");
        setTimeout(function() {
            $("#statusArea").prepend($('<p>').text(`Species Identified:    ${speciesName}`));   
        }, 2000);

        
      
            //pause
        console.log("Passport Match Found");
        setTimeout(function() {
            $("#statusArea").prepend($('<p>').text(`Passport Match Found.`));
        }, 4000);
        
        

        console.log("We will now commence communication it the skdjflksd language"); 
        setTimeout(function() {
            $("#statusArea").prepend($('<p>').text(`We will now commence communication it the ${languageName} language.`));
            $('#userDeclare').toggleClass('bg-light');
            $('#userTranslate').toggleClass('bg-light');
        }, 6000);
      
                         
        setTimeout(function() {
            $("#statusArea").prepend($('<p>').text(`Please respond to the questions in the translator`)); 
        }, 8000);
             
            

        //translator visible
        //Load fist question into the translator
        console.log("What is the purpose of your trip?");
        $("#agentDeclare").text("What is the purpose of your trip?");
        //translate funtion will invoke communicate() function
    };
    
    
    const face = function() {

    console.log("Scanning Face")       
    $("#statusArea").prepend($('<p>').text(`Scanning Face`));
      
    // setTimeout(function() {           
        $("#statusArea").prepend($('<p>').text(`Analyzing Features`)); 
            //RequestFace should now call species() function when Face++ is done.                   
        // }, 2000);
    };
    
    const customsAgent = function() {
        console.log("customsAgent function invoked.  'Please take a picture button' was pressed. ");
        count = 0;
        console.log("count reset camera", count);
        //Need to darken translator input area.
        $("#statusArea").text('Step Forward. Face the screen, and press the "Please Take a Picture" button.');
        
        face();

    };


