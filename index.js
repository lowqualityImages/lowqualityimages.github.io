const input = document.getElementById('input');
const object = document.getElementById('object');
const startVid = document.getElementById('startVid');
const fsVid = document.getElementById('fsVid');
const vid = document.getElementById('video');

const audios = [{path: "audio/audio1.mp3", drop: 4500}, {path: "audio/audio2.mp3", drop: 4100}]

const reader = new FileReader();

input.addEventListener("change", () => {
  reader.readAsDataURL(input.files[0])
  reader.onload = () => {
    const imgSrc = reader.result;
    object.src = imgSrc;
  }
})

startVid.addEventListener('click', () => {
  const chosenAudio = audios[Math.floor(Math.random() * audios.length)]
  startVid.style.display = "none";
  object.style.display = "none";
  const audio = new Audio(chosenAudio.path);
  audio.load();
  audio.play();
  audio.onplay = function() {
    setTimeout(() => {
      object.style.display = "initial";
    }, chosenAudio.drop)
  }
  audio.onended = () => {
    startVid.style.display = "initial";
    document.exitFullscreen();
  }
})

fsVid.addEventListener('click', () => {
  video.requestFullscreen();
})