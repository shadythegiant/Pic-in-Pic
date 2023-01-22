"use strict";
const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt user to select media stream , pass to the video element, then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("whoops, error here", error);
  }
}

//

button.addEventListener("click", async () => {
  //disable button
  button.disabled = true;

  // start pic-in-pic

  await videoElement.requestPictureInPicture();

  //   rest button

  button.disabled = false;
});
// on load

selectMediaStream();
