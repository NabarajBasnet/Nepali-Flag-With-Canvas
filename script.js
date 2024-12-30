const flag = document.getElementById('flag');
const ctx = flag.getContext('2d');

ctx.strokeStyle = 'blue';
ctx.fillStyle = 'red';
ctx.lineWidth = 30;
// ctx.beginPath();

ctx.moveTo(120, 65);

ctx.lineTo(120, 500);
ctx.lineTo(120, 500);
ctx.lineTo(500, 500);
ctx.lineTo(240, 280);
ctx.lineTo(500, 280);
ctx.lineTo(120, 70);
ctx.lineTo(120, 500);    // Handle

ctx.stroke();
ctx.fill();

// Moon
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.lineWidth = 20
ctx.strokeStyle = 'white';
ctx.arc(210, 200, 20, 0, 1 * Math.PI);
ctx.stroke();

// Draw Star
const drawStar = ()=>{
ctx.beginPath();
ctx.lineWidth = 2
ctx.moveTo(220,300);
ctx.lineTo(200,320)
ctx.stroke();
}
drawStar();