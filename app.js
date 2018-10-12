
// const image = "https://res.cloudinary.com/dyais46lc/image/upload/v1539310622/faceSquare.jpg"

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

getUrl(url, function (faceResult){

    var image = url;
    console.log(image);

    requestFace(image, cb);
    clipFace(faceResult);

    });



// requestFace(image, function (faceResult) {
//     console.log(`Face information: ${faceResult.age}`);


//     clipFace(faceResult);
//     console.log("test");

// });

$(".submitDeclare").on("click", translate);


