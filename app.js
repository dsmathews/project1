
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
        

//Determine species/language using Face++ attributes.
    //Greater value of emotion determines ...
    //Throw age into the equation
    //Make sure results in a variety of species..

    //Display species/language on translator area.



//Display "Passport" on page

    //Display User photo 
        //***/TRICKY PART***Layer mask on top of User photo.
        //Display passport information (back story and species attributes (ex. a Romulan = Fiesty)).
            //Add ideas for back story, attributes.
            //Color : yellow, green, red/black,
            //Texture: fur, scales, clamy,..
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

// cloudinary.config({ 
//     cloud_name: 'dyais46lc', 
//     api_key: '169225284978189', 
//     api_secret: 'TkVw1kJXn8OeNow9f10qSSA8VS4' 
//   });
  
//   cloudinary.imageTag('40648536_10156056664519285_7445547226065010688_n.jpg', {height: 539, radius: 8, width: 613, crop: "scale"}).toHtml();

const image = "https://res.cloudinary.com/dyais46lc/image/upload/v1539310622/faceSquare.jpg"

let faceResult = {
    height:"",
    width:"",
    top:"",
    left:"",
    gender:"",
    age:"",
    emotion:{},
    skinstatus:{},
    headpose:{}

};

// faceResult = requestFace(image);

// console.log(`Face information: ${faceResult.age}`);

requestFace(image, function (faceResult) {
    console.log(`Face information: ${faceResult.age}`);

    // $("img#mv-test").imgAreaSelect({ x1: 207, y1: 207, x2: 446, y2:  339});

    clipFace(faceResult);
    console.log("test");

});

$(".submitDeclare").on("click", translate);


