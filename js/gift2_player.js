document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const progressBar = document.getElementById("progressBar");
  const trackTitle = document.getElementById("trackTitle");
  const audioToggle = document.getElementById("audioToggle");

  // Playlist
  const tracks = [
    {title: "Song One 🌹", src: "music/player_tracks/song1.mp3"},
    {title: "Song Two 💕", src: "music/player_tracks/song2.mp3"},
    {title: "Song Three ✨", src: "music/player_tracks/song3.mp3"}
  ];
  let currentTrack = 0;

  // Load track
  function loadTrack(index){
    audio.src = tracks[index].src;
    trackTitle.textContent = tracks[index].title;
    audio.load();
  }

  loadTrack(currentTrack);

  // Play / Pause button
  playPauseBtn.addEventListener("click", () => {
    if(audio.paused){
      audio.play().catch(e => console.log("Play error:", e));
      playPauseBtn.textContent = "⏸";
    } else {
      audio.pause();
      playPauseBtn.textContent = "▶";
    }
  });

  // Next / Prev
  nextBtn.addEventListener("click", () => {
    currentTrack = (currentTrack+1) % tracks.length;
    loadTrack(currentTrack);
    audio.play().catch(e => console.log("Play error:", e));
    playPauseBtn.textContent="⏸";
  });
  
  prevBtn.addEventListener("click", () => {
    currentTrack = (currentTrack-1+tracks.length) % tracks.length;
    loadTrack(currentTrack);
    audio.play().catch(e => console.log("Play error:", e));
    playPauseBtn.textContent="⏸";
  });

  // Progress Bar update
  audio.addEventListener("timeupdate", () => {
    if(!isNaN(audio.duration)){
      progressBar.max = audio.duration;
      progressBar.value = audio.currentTime;
    }
  });
  
  progressBar.addEventListener("input", () => {
    audio.currentTime = progressBar.value;
  });

  // Audio toggle (mute all)
  audioToggle.addEventListener("click", () => {
    if(audio.paused){
      audio.play().catch(e => console.log("Play error:", e));
      audioToggle.textContent="🔊";
      playPauseBtn.textContent="⏸";
    } else {
      audio.pause();
      audioToggle.textContent="🔈";
      playPauseBtn.textContent="▶";
    }
  });
});