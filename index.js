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

// Static Tag 1

ctx.fillStyle = "green";
ctx.fillRect(100, 0, 120, 20);
ctx.fillStyle = "white";
ctx.font = "17px bold";
ctx.fillText("Introduction", 120, 15);
ctx.fillStyle = "green";
ctx.fillRect(170, 20, 4, 156);
ctx.beginPath();
ctx.arc(172, 170, 10, 0, Math.PI * 2, true);
ctx.fill();


// Static Tag 2

ctx.fillStyle = "teal";
ctx.fillRect(320, 0, 80, 20);
ctx.fillStyle = "white";
ctx.font = "17px serif";
ctx.fillText("one_six", 330, 15);
ctx.fillStyle = "teal";
ctx.fillRect(360, 20, 4, 156);
ctx.beginPath(); 
ctx.arc(363, 170, 10, 0, Math.PI * 2, true);
ctx.moveTo(110, 75);
ctx.fill();

// Static Tag 3

ctx.fillStyle = "blue";
ctx.fillRect(980, 60, 80, 20);
ctx.fillStyle = "white";
ctx.font = "17px serif";
ctx.fillText("Profile", 1000, 75);
ctx.fillStyle = "blue";
ctx.fillRect(1015, 80, 4, 100);
ctx.beginPath();
ctx.arc(1018, 170, 10, 0, Math.PI * 2, true);
ctx.moveTo(110, 75);
ctx.fill();

// Static Tag 4

ctx.fillStyle = "#9A6C68";
ctx.fillRect(960, 25, 215, 20);
ctx.fillStyle = "white";
ctx.font = "17px serif";
ctx.fillText("Rapport Building - Empathy", 975, 40);
ctx.fillStyle = "#9A6C68";
ctx.fillRect(1100, 45, 4, 130);
ctx.beginPath();
ctx.arc(1103, 170, 10, 0, Math.PI * 2, true);
ctx.moveTo(110, 75);
ctx.fill();

// Static Tag 5

ctx.fillStyle = "#69A548";
ctx.fillRect(1010, 0, 195, 20);
ctx.fillStyle = "white";
ctx.font = "17px serif";
ctx.fillText("Rapport Building - Energy", 1015, 15);
ctx.fillStyle = "#69A548";
ctx.fillRect(1180, 17, 4, 150);
ctx.beginPath();
ctx.arc(1183, 170, 10, 0, Math.PI * 2, true);
ctx.moveTo(110, 75);
ctx.fill();