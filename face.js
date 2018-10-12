let faceInformation = {
    height:"",
    width:"",
    top:"",
    left:"",
    gender:"",
    age:"",
    emotion:{},
    skinstatus:{},
    headpose:{}

}

const analyzeFace = function(apiKey, apiSecret, faceToken, face, cb) {

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

        analyzeFace(apiKey, apiSecret, face[0].face_token, face, cb);
        
    }).catch(function () {
        alert("Could not retrieve the information. Please try again later.")
    });

}
