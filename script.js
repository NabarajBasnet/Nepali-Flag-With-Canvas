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
    ctx.fillStyle = 'white';
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'white';
    ctx.arc(210, 190, 40, 0, Math.PI);
    ctx.stroke();
    ctx.fill();


}
drawMoon();

// Draw Star
const drawStar = (spikes) => {
    ctx.beginPath();
    ctx.moveTo(200, 400);
    ctx.lineTo(220, 370);
    ctx.lineTo(180, 370);
    ctx.lineTo(165, 340);
    ctx.lineTo(150, 370);
    ctx.lineTo(120, 370);
    ctx.lineTo(140, 400);
    ctx.lineTo(110, 420);
    ctx.lineTo(140, 435);
    ctx.lineTo(130, 465);
    ctx.lineTo(165, 465);
    ctx.lineTo(180, 495);
    ctx.lineTo(195, 465);
    ctx.lineTo(240, 465);
    ctx.lineTo(210, 435);
    ctx.lineTo(240, 405);
    ctx.lineTo(200, 400);
    ctx.fill();
    ctx.stroke();

    let triangles = 12
    let i = 1
    let x = 1
    // console.log('I >', i);
    console.log('I <', i - 1);

    for (i; i <= triangles; i++) {
        i = i+i
        console.log('I >', i);
    }

};
drawStar(12);
