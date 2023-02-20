"use strict";

// get elements
const imageEl = document.getElementById("images");
const sliderEl = document.getElementById("track");
// button elements
const previousEl = document.getElementById("previous");
const playEl = document.getElementById("play-pause");
const nextEl = document.getElementById("next");
// name elements
const songsEl = document.getElementById("song-name");
const singerEl = document.getElementById("singer-name");

// get items
let timer;
let autoPlay = 1;

let indexNo = 0;
let playingSong = false;

let track = document.createElement("audio");

// create a Array
let allSong = [
  {
    name: "உலக நாயகனே...",
    path: "audio/song1.mp3.mp3",
    img: "images/img1.jpg.jpg",
    artist: "Vinit Singh",
  },
  {
    name: "அடி பெண்ணே ஒரு முறை...",
    path: "audio/song2.mp3.mp3",
    img: "images/img2.jpg.jpeg",
    artist: "Stephen Zechariah",
  },
  {
    name: "வாத்தி coming...",
    path: "audio/song3.mp3.mp3",
    img: "images/img3.jpg.jpg",
    artist: "Anirudh Ravichander",
  },
  {
    name: "அம்மா பாடல்...",
    path: "audio/song4.mp3.mp3",
    img: "images/img4.jpg.jpg",
    artist: "Sid Sriram",
  },
  {
    name: "மனிதனின் பயணத்தில்...",
    path: "audio/song5.mp3.mp3",
    img: "images/img5.jpg.jpg",
    artist: "B. Ajaneesh Loknath",
  },
];

// function
function loadTrack(indexNo) {
  clearInterval(timer);
  resetSlider();

  track.src = allSong[indexNo].path;
  songsEl.innerHTML = allSong[indexNo].name;
  imageEl.src = allSong[indexNo].img;
  singerEl.innerHTML = allSong[indexNo].artist;

  timer = setInterval(rangeSlider, 1000);
  total.innerHTML = allSong.length;
  present.innerHTML = indexNo + 1;
}
loadTrack(indexNo);

function justPlay() {
  if (playingSong == false) {
    playSong();
  } else {
    pauseSong();
  }
}

function resetSlider() {
  sliderEl.value = 0;
}

function playSong() {
  track.play();
  playingSong = true;
  playEl.innerHTML = '<i class="fa-sharp fa-solid fa-pause">';
}

function pauseSong() {
  track.pause();
  playingSong = false;
  playEl.innerHTML = '<i class="fa-sharp fa-solid fa-play">';
}

function nextSong() {
  if (indexNo < allSong.length - 1) {
    indexNo += 1;
    loadTrack(indexNo);
    playSong();
  } else {
    indexNo = 0;
    loadTrack(indexNo);
    playSong();
  }
}

function previousSong() {
  if (indexNo > 0) {
    indexNo -= 1;
    loadTrack(indexNo);
    playSong();
  } else {
    indexNo = allSong.length;
    loadTrack(indexNo);
    playSong();
  }
}

function changeDuration() {
  sliderEl_position = track.duration * (sliderEl.value / 100);
  track.currentTime = sliderEl_position;
}
