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

const renderPassportPicture = function (faceUrl) {

    $("#passport-picture").empty();

    const pictureDiv = $("<div>").addClass("passport-picture");

    const faceImg = $("<img>");
    faceImg.attr("src", faceUrl);
    faceImg.attr("id", "passport-picture");
    faceImg.attr("height", "200");

    pictureDiv.append(faceImg);

    $("#passport-picture").append(pictureDiv);


}

const analyzeFace = function (apiKey, apiSecret, faceToken, face, cb) {

    const attributes = `gender,age,emotion,skinstatus,headpose`;

    const analysisURL = `https://api-us.faceplusplus.com/facepp/v3/face/analyze?api_key=${apiKey}&api_secret=${apiSecret}&face_tokens=${faceToken}&return_attributes=${attributes}`;

    console.log(analysisURL);

    $.ajax({
        url: analysisURL,
        method: 'POST',
    }).then(function (response) {

        console.log(response);

        faceInformation.height = face[0].face_rectangle.height;
        faceInformation.width = face[0].face_rectangle.width;
        faceInformation.top = face[0].face_rectangle.top;
        faceInformation.left = face[0].face_rectangle.left;

        faceInformation.gender = response.faces[0].attributes.gender.value;
        faceInformation.age = response.faces[0].attributes.age.value;
        faceInformation.emotion = response.faces[0].attributes.emotion;
        faceInformation.skinstatus = response.faces[0].attributes.skinstatus;
        faceInformation.headpose = response.faces[0].attributes.headpose;

        console.log(`Analyze: ${faceInformation.height}`);

        cb(faceInformation);

    }).catch(function () {
        alert("Could not retrieve the information. Please try again later.")
    });




}


const requestFace = function (image, cb) {

    const apiKey = "z3RiaROksCQrhNWjl9AanKkCbEDUtV5W";
    const apiSecret = "rF3gmv1TiXk2Mco19sYSMvcl71lCfUfm";
    const faceURL = `https://api-us.faceplusplus.com/facepp/v3/detect?api_key=${apiKey}&api_secret=${apiSecret}&image_url=${image}`;


    $.ajax({
        url: faceURL,
        method: 'POST',
    }).then(function (response) {

        const face = response.faces;

        console.log(`face: ${face}`);

        analyzeFace(apiKey, apiSecret, face[0].face_token, face, cb);

    }).catch(function () {
        alert("Could not retrieve the information. Please try again later.")
    });

}

//Clip to have only face part of picture using face++ analysis
const clipFace = function (information, pictureName) {

    //These analysis were from face++
    const width = information.width;
    const height = information.height;

    //Location of picture to clip and coordination.
    const url = `https://res.cloudinary.com/dyais46lc/image/upload/c_crop,g_face,h_${height},w_${width}/${pictureName}`;

    $("#alien-picture").empty();

    //Appending the picture to index.html
    const pictureDiv = $("<div>").addClass("alien-picture");

    const faceImg = $("<img>");
    faceImg.attr("src", url);
    faceImg.attr("id", "mv-test");
    faceImg.addClass("user-picture");
    faceImg.attr("height", "200");

    pictureDiv.append(faceImg);

    $("#alien-picture").append(pictureDiv);

}
