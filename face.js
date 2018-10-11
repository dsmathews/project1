const analyzeFace = function(apiKey, apiSecret, faceToken) {

    const attributes = `gender,age,emotion,skinstatus,headpose`;

    const analysisURL = `https://api-us.faceplusplus.com/facepp/v3/face/analyze?api_key=${apiKey}&api_secret=${apiSecret}&face_tokens=${faceToken}&return_attributes=${attributes}`;

    console.log(analysisURL);

    $.ajax({
        url: analysisURL,
        method: 'POST',
    }).then(function (response) {

        console.log(response);

    }).catch(function () {
        alert("Could not retrieve the information. Please try again later.")
    });




}


const requestFace = function (image) {

    const apiKey = "z3RiaROksCQrhNWjl9AanKkCbEDUtV5W";
    const apiSecret = "rF3gmv1TiXk2Mco19sYSMvcl71lCfUfm";
    const faceURL = `https://api-us.faceplusplus.com/facepp/v3/detect?api_key=${apiKey}&api_secret=${apiSecret}&image_url=${image}`;


    $.ajax({
        url: faceURL,
        method: 'POST',
    }).then(function (response) {

        console.log(response.faces);

        const face = response.faces;

        face.forEach(function (e) {
            console.log(`Height: ${e.face_rectangle.height}`);
            console.log(`width: ${e.face_rectangle.width}`);
            console.log(`Top: ${e.face_rectangle.top}`);
            console.log(`left: ${e.face_rectangle.left}`);
            console.log(`Face token: ${e.face_token}`);
            analyzeFace(apiKey, apiSecret, e.face_token);
        });

    }).catch(function () {
        alert("Could not retrieve the information. Please try again later.")
    });

}

const image = "https://res.cloudinary.com/dyais46lc/image/upload/v1539213797/40648536_10156056664519285_7445547226065010688_n.jpg"

requestFace(image);