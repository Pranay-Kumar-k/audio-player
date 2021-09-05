const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const audio = document.getElementById("audio");
const button = document.getElementById("button");
const buttonClassList = button.querySelector("i.fas").classList
const container = document.getElementById("container");

let audioBars = [-30];
var is_playing = false;
// function used to draw the bars in the audio player visual
const drawBars = () => {

    for(var i=0; i<160; i++) {
        audioBars.push(Math.floor(Math.random() * 200) + 1);
    }

    let width = 8;
    let X = 0;
    ctx.fillStyle = "gainsboro";
    for (let i = 0; i < audioBars.length; i++) {
        let h = audioBars[i];
        ctx.fillRect(X, 150 - h / 4, width, h+30);
        X += width + 3;
    }
    return audioBars;
}
drawBars();

//function to play/pause the audio
button.addEventListener('click', () => {
    if(is_playing) {
        pauseAudio();
    }
    else playAudio();
})

const playAudio = () => {
    buttonClassList.remove("fa-play");
    buttonClassList.add("fa-pause");
    audio.play();
    is_playing = true;
}

const pauseAudio = () => {
    buttonClassList.remove("fa-pause");
    buttonClassList.add("fa-play");
    audio.pause();
    is_playing = false;
}

// function to track the song duration
const playAudioViaBars = (time) => {
    let width = 8;
    let X = 0;
    for (let i = 0; i < audioBars.length; i++) {
        let h = audioBars[i];
        ctx.fillRect(X, 150 - h / 4, width, h+30);
        X += width + 3;
        X < time ? (ctx.fillStyle = "red") : (ctx.fillStyle = "gainsboro");
    }
}

// Updating audio bars with color filled to track the duration of song/audio
const updateAudioBars = (audioElement) => {
    const {duration, currentTime} = audioElement.srcElement;
    playAudioViaBars(currentTime * (1250/duration));
}

// Jump to a particular point of duration in audio by clicking on the bar
const jumpAudio = (e) => {
    const width = container.clientWidth;
    const click = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (click / width) * duration;
}

audio.addEventListener("timeupdate", updateAudioBars);
container.addEventListener("click", jumpAudio);