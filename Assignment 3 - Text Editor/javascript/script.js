 //Function to Open Camera in camera.html
 async function openCamera() {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
    });
    video.srcObject = stream;
}
 //Function to Open Camera in shareScreen.html
 async function shareScreen() {
    const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
    });
    video.srcObject = stream;
}

//Function to Close Camera in both pages
function closeCamera() {
const mediaStream = document.querySelector("video").srcObject;
const tracks = mediaStream.getTracks();
tracks.forEach((track) => track.stop());
document.querySelector("video").srcObject = null;
}