const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const audio = document.getElementById("audio");
const button = document.getElementById("button");

let audioBars = [];
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
drawBars()