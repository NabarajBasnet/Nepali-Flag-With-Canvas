const flag = document.getElementById('flag');
const ctx = flag.getContext('2d');


const createFlag = () => {
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'red';
    ctx.lineWidth = 30;
    ctx.beginPath();

    ctx.moveTo(120, 65);

    ctx.lineTo(120, 500);
    ctx.lineTo(120, 500);
    ctx.lineTo(500, 500);
    ctx.lineTo(240, 280);
    ctx.lineTo(500, 280);
    ctx.lineTo(120, 70);
    ctx.lineTo(120, 500);

    ctx.stroke();
    ctx.fill();
}
createFlag();

// Moon
const drawMoon = () => {

    ctx.beginPath();
    ctx.lineWidth = 2
    ctx.strokeStyle = 'white'
    ctx.fillStyle = 'white'
    ctx.moveTo(230, 200);
    ctx.lineTo(220, 180);
    ctx.lineTo(205, 200);
    ctx.lineTo(195, 180);
    ctx.lineTo(180, 200);
    ctx.lineTo(165, 180);
    ctx.lineTo(155, 200);
    ctx.arc(192, 200, 37, 0, Math.PI)
    ctx.fill();
    ctx.stroke();

}
drawMoon();

// Draw star function

const drawStar = () => {
    ctx.beginPath();
    ctx.fillStyle = 'white';

    ctx.moveTo(200, 390);

    ctx.lineTo(195, 400);
    ctx.lineTo(175, 395);
    ctx.lineTo(185, 410);
    ctx.lineTo(165, 415);
    ctx.lineTo(180, 425);
    ctx.lineTo(165, 435);
    ctx.lineTo(180, 445);
    ctx.lineTo(170, 460);
    ctx.lineTo(190, 458);
    ctx.lineTo(200, 475);
    ctx.lineTo(210, 460);
    ctx.lineTo(228, 472);
    ctx.lineTo(230, 455);
    ctx.lineTo(250, 455);
    ctx.lineTo(243, 440);
    ctx.lineTo(262, 435);
    ctx.lineTo(242, 422);
    ctx.lineTo(255, 405);
    ctx.lineTo(235, 405);
    ctx.lineTo(230, 380);
    ctx.lineTo(220, 400);
    ctx.closePath()
    ctx.stroke();
    ctx.fill();
}

drawStar();
