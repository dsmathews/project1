$(document).ready(function () {

<<<<<<< HEAD
//Display User's photo on page--Makiko
   

//Display facial attributes next to User's Photo
    //Take in Face ++ attributes 
        //Gender
        //Age
        //Emotion: (Sadness, Neutral, Disgust, Anger, Surprise)
        //Skin Status (Dark-Circle:Filth?  , Stain:Fur?  ,Acne:Scales?   , Health:Breath?  )
            //Display attributes next to users image on the screen
                //Display attributes above
                //Add new (bogus) attributes
                //Status
                    //Detecting temperature
                    //Analyzing breath...
                        //...
                    //Determining Species....
                        //...
        //Display determined species
        





//Display "Passport" on page

    //Display User photo 
        //***/TRICKY PART***Layer mask on top of User photo.
        //Display passport information (back story and species attributes (ex. a Romulan = Fiesty)).
            //Add ideas for back story, attributes.
            //Color : yellow, green, red/black,
            //Texture: fur, scales, clamy,..
            //Occupation
            //Disposition:
            



//Translator--Ki
    //Display interactions with Customs Agent - Customs agent text on top, Users response below, show user's translation blow response.
        //"Step forward and face the camera"
        //"Scanning facial features"
        //"Species Identified"---Display Species name in Display Section
        //"Passport match found."---Display Passport in Passport section
            //(pause to let User admire thier passport)
        //"Commence communication in ****** language"
            //"What is your purpose of your trip? *****"
                //User replies via translator
                    //Translation displayed (where?)
            //"Do you have anything to declare?"
                //User replies via translator
                    //Translation displayed (where?)

            //"Are you carrying any of the following embargoed items?"
                //Display about 4 photos of random objects (with red/slash/circle) in the status area to the side.
                //User replies via translator
                    //Translation displayed (where?)

            //"Where will you be staying?"
            //"How long do you intent to stay?"

            
            //Dismissal
                //"You may proceed..  Git pull if you have not.."
                //"Step asside to the inspection area"
                //"Please follow the signs to the autopsy are "


        //(add more ideas here)




//Status 
    //Let see what to put here
        //Contraband Items?
        //Local news?
    


// var cloudinary = require('cloudinary');
=======
    var faceResult = {
        height: "",
        width: "",
        top: "",
        left: "",
        gender: "",
        age: "",
        emotion: {},
        skinstatus: {},
        headpose: {}
>>>>>>> 161769a4b05a2c451aec1e52ac4c891a5ae4ffe1

    };

    var myUploadWidget;

    document.getElementById("upload_widget_opener").addEventListener("click", function () {
        myUploadWidget = cloudinary.openUploadWidget({
            cloudName: 'dyais46lc', uploadPreset: 'tqz7drcd'
        }, (error, result) => {

            if (result && result.event === "success") {
                console.log(result, result.event);

                let facePlusUrl = result.info.url;
                let pictureName = result.info.path;

                renderPassportPicture(facePlusUrl);


<<<<<<< HEAD
    // $("img#mv-test").imgAreaSelect({ x1: 207, y1: 207, x2: 446, y2:  339});
    
    determineSpecies(faceResult);
    console.log("Ann faceResult.age",faceResult.age);
    
    clipFace(faceResult);
    console.log("test");
=======
                requestFace(facePlusUrl, function (faceResult) {

>>>>>>> 161769a4b05a2c451aec1e52ac4c891a5ae4ffe1

                    console.log(`Face information: ${faceResult.age}`);

<<<<<<< HEAD
//***Function customsAgent - Master sequence */
let customsAgent = function() {
    //Customs agent object: Questions and directs user, manipulates user interface, and sequences other funtions.
    const agentScript = {

   
    ["0 Step Forward, Face the Camera, and Press Ready", "1 (Scanning Facial Features)", "2 Species Identified"]
}
        for (let i=0; i < agentScript.length; i++) {
            console.log("agentScript", i, agentScript[i]);
            let commandQuestion = agentScript[i];
            $("#agentDeclare").text(commandQuestion);
        };
    };  


$(".submitDeclare").on("click", translate);

//run customsAgent script
$(".submitDeclare").on("click", customsAgent);



//Determine species/language using Face++ attributes.



//Greater value of emotion determines ...
//Throw age into the equation
//Make sure results in a variety of species..

//Display species/language on translator area.
=======
                    clipFace(faceResult, pictureName);
                    console.log("test");

                });
            }

        }, false);

    });

});
>>>>>>> 161769a4b05a2c451aec1e52ac4c891a5ae4ffe1
