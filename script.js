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
const drawStar = (cx, cy, spikes, Or, Ir) => {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'white';

    let x = cx;
    let y = cy;
    const w = cx + 40;
    const h = cy + 40;

    ctx.moveTo(x - 20, y - 50)
    ctx.lineTo(x - 10, y - 60)
    ctx.lineTo(x, y - 50)
    ctx.lineTo(x - 20, cy - 50)
    ctx.fill()
    ctx.stroke();

    for (let i = 1; i <= spikes; i++) {

        x = x - 17
        y = y - 5
        ctx.moveTo(x - 20, y - 50)
        ctx.lineTo(x - 10, y - 60)
        ctx.lineTo(x, y - 50)
        ctx.lineTo(x - 20, cy - 50)
        ctx.arc(x, y, 40, 0, Math.PI);
        ctx.fillStyle = 'white'
        ctx.fill()
        ctx.stroke();

        // ctx.moveTo(200, 400);
        // ctx.lineTo(cx, cy);

    }
    ctx.stroke();

};
drawStar(220, 410, 12);
