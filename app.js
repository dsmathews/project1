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

                const facePlusUrl = result.info.url;
                const pictureName = result.info.path;

                console.log(`Face URL: ${facePlusUrl}
                Picture name: ${pictureName}`);

                renderPassportPicture(facePlusUrl);


                requestFace(facePlusUrl, function (faceResult) {


                    console.log(`Face information: ${faceResult.age}`);

                    clipFace(faceResult, pictureName);

                });
            }
        }, false);
    });
    $(".submitDeclare").on("click", translate);
});

//Ann Start--run customsAgent script and reset customs agent script counter for communication() function
$("#upload_widget_opener").on("click", customsAgent);
//Ann End--run customsAgent script and reset customs agent script counter for communication() function