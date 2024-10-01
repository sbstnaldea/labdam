var video = document.getElementById("video");

function onCamSuccess(stream) {
    video.srcObject = stream;
}

function onCamError(err) {
    alert("Error: " + err.message);
}

var constraints = { audio: false, video: true };

navigator.mediaDevices.getUserMedia(constraints)
    .then(onCamSuccess)
    .catch(onCamError);

function capture() {
    var c = document.getElementById("canvas")
    c.width = video.width;
    c.height = video.height;

    var ctx = c.getContext("2d");
    ctx.drawImage(video, 0, 0, 640, 480);
}
