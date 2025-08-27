// document.addEventListener("DOMContentLoaded", () => {
//   const bgMusic = document.getElementById("bgMusic");
//   const audioToggle = document.getElementById("audioToggle");

//   // Ensure audio is initially playing
//   bgMusic.play().catch(e => console.log("Autoplay prevented:", e));

//   // Audio control
//   audioToggle.addEventListener("click", () => {
//     if(bgMusic.paused){
//       bgMusic.play().catch(e => console.log("Play error:", e));
//       audioToggle.textContent = "🔊";
//     } else {
//       bgMusic.pause();
//       audioToggle.textContent = "🔈";
//     }
//   });
// });