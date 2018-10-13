$(document).ready(function () {

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


                requestFace(facePlusUrl, function (faceResult) {


                    console.log(`Face information: ${faceResult.age}`);

                    clipFace(faceResult, pictureName);
                    console.log("test");

                });
            }

        }, false);

    });

});