const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const artist = document.getElementById("artist");



const songs = [
    {
        title:"Jingle Bells",
        artist:"James",
        cover:"assets/Covers/Christmas1.jpg",
        audio:"assets/songs/Christmas1.mp3"
    },
    {
        title:"Merry Christmas",
        artist:"James Lord Pierpont",
        cover:"assets/Covers/Christmas2.jpg",
        audio:"assets/songs/Christmas2.mp3"
    },
    {
        title:"Merry Christmas",
        artist:"James Lord Pierpont",
        cover:"assets/Covers/Christmas3.jpg",
        audio:"assets/songs/Christmas3.mp3"
    }
];

let currentSongIndex = 0;
loadSong(currentSongIndex);

function loadSong(index) {
    audio.src = songs[index].audio;
    title.textContent = songs[index].title;
    artist.textContent = songs[index].artist;
    cover.src = songs[index].cover;
}

playBtn.addEventListener("click", function() {
    if (audio.paused) {
    audio.play();
    playBtn.textContent = "Pause";
} else {
    audio.pause();
    playBtn.textContent = "Play";
}
});
nextBtn.addEventListener("click", function() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playBtn.textContent = "Pause";
});
prevBtn.addEventListener("click", function() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playBtn.textContent = "Pause";
}
);
