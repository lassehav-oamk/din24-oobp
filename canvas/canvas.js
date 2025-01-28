// Canvas object oriented exercise where moving and bouncing balls are drawn on the canvas
var Ball = /** @class */ (function () {
    function Ball(ctx, x, y, radius, dx, dy, color) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }
    Ball.prototype.draw = function () {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    };
    Ball.prototype.update = function (time) {
        if (this.x + this.radius > this.ctx.canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > this.ctx.canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx * time;
        this.y += this.dy * time;
        this.draw();
    };
    return Ball;
}());
var canvas = document.querySelector('canvas');
if (!canvas) {
    throw new Error('Canvas not found');
}
var ctx = canvas.getContext('2d');
if (ctx == null) {
    throw new Error('Canvas context not found');
}
var width = window.innerWidth;
var height = window.innerHeight;
var ball1 = new Ball(ctx, 100, 100, 20, 2, 2, 'red');
var ball2 = new Ball(ctx, 200, 200, 20, 2, 2, 'blue');
function animate() {
    if (ctx != null) {
        ctx.clearRect(0, 0, width, height);
        ball1.update(1);
        ball2.update(1);
        requestAnimationFrame(animate);
    }
}
animate();
