"use strict";

// get elements
const imgEl = document.getElementById("images");
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
