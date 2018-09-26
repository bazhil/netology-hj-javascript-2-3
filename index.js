'use strict'
// Список песен:
// 1. LA Chill Tour, 
// https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Chill%20Tour.mp3

// 2. This is it band, 
// https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This%20is%20it%20band.mp3

// 3. LA Fusion Jam,
// https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Fusion%20Jam.mp3

const mediaplayer = document.getElementsByClassName('mediaplayer')[0];

const audio = mediaplayer.getElementsByTagName('audio')[0]; 

const playstateBtn = mediaplayer.getElementsByClassName('playstate')[0]; 

const stopBtn = mediaplayer.getElementsByClassName('stop')[0]; 

const backBtn = mediaplayer.getElementsByClassName('back')[0]; 

const nextBtn = mediaplayer.getElementsByClassName('next')[0];  

const title = mediaplayer.getElementsByClassName('title')[0]; 

const trackList = ['LA Chill Tour.mp3', 'LA Fusion Jam.mp3', 'This is it band.mp3'];

//Play or Pause
playstateBtn.onclick = () => {
    mediaplayer.classList.contains('play') ? audio.pause() : audio.play();
    mediaplayer.classList.toggle('play');
}

//Stop
stopBtn.onclick = () => {
   if (mediaplayer.classList.contains('play')) {
       mediaplayer.classList.remove('play');
    }
    
    audio.pause();
    audio.currentTime = 0;
}

let index = 0; 

function currentSong() {
    audio.src = `https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/${trackList[index]}`;
	
    title.title = trackList[index]; 

    if (mediaplayer.classList.contains('play')) {
        audio.play();
    }
}
 
//Next
nextBtn.onclick = () => {
    if (index >= trackList.length - 1) {
        index = 0;
    } else {
        index++;
    }

    currentSong();
}

//Back 
backBtn.onclick = () => {
    if (index <= 0) {
        index = trackList.length - 1;
    } else {
        index--;
    }

    currentSong();
}