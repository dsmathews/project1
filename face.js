
//const alienPic = ["sindarin", "fudd", "huttese", "gungan", "klingon", "pirate", "romulan", "shakespeare", "sith", "vulcan", "chef", "yoda"];
const alienPic = ["pirate", "sith", "yoda"];
let alienChosen;



//Returns all face++ information
let faceInformation = {
    height: "",
    width: "",
    top: "",
    left: "",
    gender: "",
    age: "",
    emotion: {},
    skinstatus: {},
    headpose: {}

}

//Display the passport picture on the left top side
const renderPassportPicture = function (faceUrl) {

    //Initialize the screen
    $("#passport-picture").empty();

    //Create <div> with class passport-picture
    const pictureDiv = $("<div>").addClass("passport-picture");

    //Create an <img> tag with responsive 
    const faceImg = $("<img>");
    faceImg.addClass("img-fluid").attr("src", faceUrl);
    faceImg.attr("id", "passport-picture").attr("alt", "Responsive image");

    //Append the picture to <div>
    pictureDiv.append(faceImg);

    //Append the <div> with picture to passport picture
    $("#passport-picture").append(pictureDiv);
}

//Call API to face++ to return the information
const analyzeFace = function (apiKey, apiSecret, faceToken, face, cb) {

    //Request these parameters
    const attributes = `gender,age,emotion,skinstatus,headpose`;

    //ajax URL
    const analysisURL = `https://api-us.faceplusplus.com/facepp/v3/face/analyze?api_key=${apiKey}&api_secret=${apiSecret}&face_tokens=${faceToken}&return_attributes=${attributes}`;

    $.ajax({ 
        //Make a request to face++
        url: analysisURL,
        method: 'POST',
    }).then(function (response) {

        //Adding the result to faceInformation
        faceInformation.height = face[0].face_rectangle.height;
        faceInformation.width = face[0].face_rectangle.width;
        faceInformation.top = face[0].face_rectangle.top;
        faceInformation.left = face[0].face_rectangle.left;

        faceInformation.gender = response.faces[0].attributes.gender.value;
        faceInformation.age = response.faces[0].attributes.age.value;
        faceInformation.emotion = response.faces[0].attributes.emotion;
        faceInformation.skinstatus = response.faces[0].attributes.skinstatus;
        faceInformation.headpose = response.faces[0].attributes.headpose;

        //Call back function for async 
        cb(faceInformation);

    }).catch(function () {
        //Display an error if the call fails
        console.log("Could not retrieve the information. Please try again later.");
    });




}

//Call Face++ API to get the face coordinates and face token
const requestFace = function (image, cb) {

    //API Key, API Scecret, and URL for Face++ API
    const apiKey = "z3RiaROksCQrhNWjl9AanKkCbEDUtV5W";
    const apiSecret = "rF3gmv1TiXk2Mco19sYSMvcl71lCfUfm";
    const faceURL = `https://api-us.faceplusplus.com/facepp/v3/detect?api_key=${apiKey}&api_secret=${apiSecret}&image_url=${image}`;


    $.ajax({
        url: faceURL,
        method: 'POST',
    }).then(function (response) {

        //Get the response data
        const face = response.faces;

        //Call another function to get more analysis
        analyzeFace(apiKey, apiSecret, face[0].face_token, face, cb);

    }).catch(function () {
        //Render this message when it is failed.
        console.log("Could not retrieve the information. Please try again later.");
    });

}

//Clip to have only face part of picture using face++ analysis
const clipFace = function (information, pictureName) {

    //These analysis were from face++
    const width = information.width;
    const height = information.height;

    //Location of picture for the clipped face picture.
    const url = `https://res.cloudinary.com/dyais46lc/image/upload/c_crop,g_face,h_${height},w_${width}/${pictureName}`;

    //Initialize the alien picture tag
    $("#alien-picture").empty();

    //Declare the variable for the clipped face picture 
    var imgPicture = new Image();
    
    imgPicture.src = url;

    //Add the clipped face picture to Canvas
    imgPicture.onload = function () {
        var ctx = $('#alien-picture')[0].getContext('2d');
        ctx.globalCompositeOperation = 'source-over'; 
        ctx.drawImage(this, 55, 50, 60, 80);
        ctx.save();
    };

    //Declare the variable to display the alien prototype picture
    var img2 = new Image();

    alienChosen = alienPic[Math.round(Math.random() * (alienPic.length - 1))];
    img2.src = `./assets/${alienChosen}.gif`;

    img2.onload = function () {
        var ctx2 = $('#alien-picture')[0].getContext('2d');
        ctx2.globalCompositeOperation = 'source-over'; 
        ctx2.drawImage(this, 0, 0, 300, 300, 0, 0, 300, 300);
        ctx2.save();
    };

}
