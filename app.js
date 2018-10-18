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
            cloudName: 'dyais46lc', uploadPreset: 'tqz7drcd',
            sources: ['local', 'camera', 'imageSearch'],
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
                    //Ann Start--call function that displays status
                    species();
                    //Ann End--call function that displays status

                    speciesPassport();

                });
            }
        }, false);
    });
    $(".submitDeclare").on("click", translate);
    $("#translationBtn").on("click", translationBtn);
});

//Ann Start--Display welome status image and run customsAgent script
$("#statusArea").html($('<img>').addClass("img-fluid").attr("src", "./assets/welcome.gif").attr("alt", "Responsive image"));
$("#upload_widget_opener").on("click", customsAgent);
//Ann End--Display welome status image and run customsAgent script