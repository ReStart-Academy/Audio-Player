const audioFileInput = document.getElementById('input');
const audioPlayer = document.querySelector('audio');
const audioSource = document.getElementById('audioSource');
const label = document.querySelector("label");

audioFileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  console.log(file);
  label.textContent = file.name;
  const url = URL.createObjectURL(file);
  audioSource.src = url;
  audioPlayer.load();
});
