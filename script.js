const audio = document.getElementById("song");
const button = document.getElementById("playButton");
const note = document.getElementById("musicNote");

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.play().then(() => {
      button.textContent = "❚❚ Pausar";
      note.textContent = "Disfruta esta canción, Angélica. 🌷";
    }).catch((error) => {
      console.log("Error de reproducción:", error);
      note.innerHTML = 'No se pudo reproducir el archivo automáticamente. Puedes <a href="https://www.youtube.com/results?search_query=Car%C3%ADn+Le%C3%B3n+Desde+Que+Te+Tengo+oficial" target="_blank" rel="noopener">escucharla en YouTube</a>.';
    });
  } else {
    audio.pause();
    button.textContent = "▶ Reproducir";
  }
});

audio.addEventListener("ended", () => {
  button.textContent = "▶ Reproducir";
});