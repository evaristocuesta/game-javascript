export default class Game {
    canvas;
    ctx;
    #lastTime = 0;
    #deltaTime = 0;
    #CANVAS_WIDTH;
    #CANVAS_HEIGHT;
    
    constructor(canvas, ctx, width, height) {
        this.canvas = canvas;
        this.#CANVAS_WIDTH = this.canvas.width = width;
        this.#CANVAS_HEIGHT = this.canvas.height = height;
        this.ctx = ctx;
        this.#init();
    }

    #init() {
        requestAnimationFrame(this.loop.bind(this));
    }

    update(deltaTime) {

    }

    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    loop(timeStamp) {
        this.#deltaTime = timeStamp - this.#lastTime;
        this.#lastTime = timeStamp;

        this.update(this.#deltaTime);

        this.draw();

        requestAnimationFrame(this.loop.bind(this))
    }
}