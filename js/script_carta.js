document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const img = ["vida.jpg", "vida2.jpg", "vida3.jpg", "vida4.jpg", "vida5.jpg", "vida6.jpg","vida7.jpeg", 'vida8.jpg', 'vida9.jpg', "vida10.jpeg", ];
  const veces = 1000;
  const imagenes = Array(veces).fill(img).flat();

  imagenes.forEach(imagen => {
    const img = document.createElement("img");
    img.src = `../imagenes/${imagen}`;
    grid.appendChild(img);
  });
});

function playAudio() {
      document.getElementById("miAudio").play();
  }