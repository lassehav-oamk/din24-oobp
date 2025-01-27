// Canvas object oriented exercise where moving and bouncing balls are drawn on the canvas
class Ball {
    ctx: CanvasRenderingContext2D;
    x: number;
    y: number;
    radius: number;
    dx: number;
    dy: number;
    color: string;

    constructor(
        ctx: CanvasRenderingContext2D, 
        x: number, 
        y: number, 
        radius: number, 
        dx: number, 
        dy: number, 
        color: string) {
            this.ctx = ctx;
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.dx = dx;
            this.dy = dy;
            this.color = color;            
        }
    
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    update(time: number) {
        if (this.x + this.radius > this.ctx.canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > this.ctx.canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx * time;
        this.y += this.dy * time;
        this.draw();
    }        
}

const canvas : HTMLCanvasElement | null = document.querySelector('canvas');
if(!canvas) {
    throw new Error('Canvas not found');
}
const ctx : CanvasRenderingContext2D | null = canvas.getContext('2d');
if(ctx == null) {
    throw new Error('Canvas context not found');
}

const width = window.innerWidth;
const height = window.innerHeight;
const ball1 = new Ball(ctx, 100, 100, 20, 2, 2, 'red');
const ball2 = new Ball(ctx, 200, 200, 20, 2, 2, 'blue');

function animate() {
    if(ctx != null) {
        ctx.clearRect(0, 0, width, height);
        ball1.update(1);
        ball2.update(1);
        requestAnimationFrame(animate);
    }    
}

animate();