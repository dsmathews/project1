
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


