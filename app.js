const image = "https://res.cloudinary.com/dyais46lc/image/upload/v1539213797/40648536_10156056664519285_7445547226065010688_n.jpg"

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
});

$(".submitDeclare").on("click", translate);


