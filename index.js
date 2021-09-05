const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const audio = document.getElementById("audio");
const button = document.getElementById("button");
const buttonClassList = button.querySelector("i.fas").classList

let audioBars = [];
var is_playing = false;
// function used to draw the bars in the audio player visual
const drawBars = () => {

    for(var i=0; i<115; i++) {
        audioBars.push(Math.floor(Math.random() * 250) + 1);
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