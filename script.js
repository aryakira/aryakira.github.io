const gambarContainer = document.querySelector(".gambar-container");
const gambarMajalah = document.querySelector(".gambar-majalah");

let geserMajalah = 0;
let maxGeser = 100; // Jumlah maksimum geseran (dalam persen)
let sudahGeser = false;

gambarContainer.addEventListener("click", () => {
  if (!sudahGeser) {
    geserMajalah -= 50;
    if (geserMajalah < -maxGeser) {
      geserMajalah = maxGeser;
    }
    gambarMajalah.style.transform = `translateX(${geserMajalah}%)`;
    sudahGeser = true;
  } else {
    geserMajalah += 50;
    if (geserMajalah > maxGeser) {
      geserMajalah = -maxGeser;
    }
    gambarMajalah.style.transform = `translateX(${geserMajalah}%)`;
    sudahGeser = false;
  }
});