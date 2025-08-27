document.addEventListener("DOMContentLoaded", () => {
  const blowBtn = document.getElementById("blowBtn");
  const candles = document.querySelector(".candles");
  const hbSong = document.getElementById("hbSong");
  const audioToggle = document.getElementById("audioToggle");

  // Blow candles
  blowBtn.addEventListener("click", () => {
    candles.classList.add("blown");
    // Play birthday song 🎶
    hbSong.play().catch(e => console.log("Play error:", e));
  });

  // Toggle audio button
  audioToggle.addEventListener("click", () => {
    if(hbSong.paused){
      hbSong.play().catch(e => console.log("Play error:", e));
      audioToggle.textContent = "🔊";
    } else {
      hbSong.pause();
      audioToggle.textContent = "🔈";
    }
  });
});