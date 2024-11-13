const input = document.getElementById('input');
const object = document.getElementById('object');
const startVid = document.getElementById('startVid');

const reader = new FileReader();

input.addEventListener("change", () => {
  reader.readAsDataURL(input.files[0])
  reader.onload = () => {
    const imgSrc = reader.result;
    object.src = imgSrc;
  }
})

startVid.addEventListener('click', () => {
  startVid.style.display = "none";
  object.style.display = "none";
  const audio = new Audio(`audio/audio1.mp3`)
  audio.play()
  setTimeout(() => {
    object.style.display = "initial";
  }, 4500)
  setTimeout(() => {
    startVid.style.display = "initial";
  }, 10500)
})