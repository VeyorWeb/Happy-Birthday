document.addEventListener("DOMContentLoaded", () => {
  const lightBtn = document.getElementById("lightBtn");
  const frame1 = document.getElementById("frame1");
  const frame2 = document.getElementById("frame2");
  const bgMusic = document.getElementById("bgMusic");
  const audioToggle = document.getElementById("audioToggle");

  // Remove autoplay from HTML and control it via JS
  bgMusic.removeAttribute('autoplay');

  // Transition Frame1 → Frame2 with audio play
  lightBtn.addEventListener("click", () => {
    // Play the audio first
    bgMusic.play().then(() => {
      console.log("Audio started successfully");
    }).catch(e => {
      console.log("Audio play failed:", e);
    });
    
    // Then transition screens
    frame1.style.opacity = "0";
    setTimeout(() => {
      frame1.style.display = "none";
      frame2.classList.remove("hidden");
      frame2.style.opacity = "0";
      setTimeout(() => frame2.style.opacity = "1", 50);
    }, 1500);
  });

  // Music control toggle
  audioToggle.addEventListener("click", () => {
    if(bgMusic.paused){
      bgMusic.play().catch(e => console.log("Play error:", e));
      audioToggle.textContent = "🔊";
    } else {
      bgMusic.pause();
      audioToggle.textContent = "🔈";
    }
  });
});