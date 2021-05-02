export default class Game {
    canvas;
    ctx;
    #lastTime = 0;
    #deltaTime = 0;
    #CANVAS_WIDTH;
    #CANVAS_HEIGHT;
    
    constructor(canvas, width, height) {
        this.canvas = canvas;
        this.#CANVAS_WIDTH = this.canvas.width = width;
        this.#CANVAS_HEIGHT = this.canvas.height = height;
        this.ctx = this.canvas.getContext('2d');
        this.resizeScreen();
        window.addEventListener("resize", this.resizeScreen.bind(this));
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
    
    resizeScreen(){
        var aspectRatio = this.#CANVAS_WIDTH / this.#CANVAS_HEIGHT;
        var windowRatio = window.innerWidth / window.innerHeight;
    
        if (aspectRatio < windowRatio){
            this.canvas.style.width="auto";
            this.canvas.style.height=window.innerHeight+'px';
        }else{
            this.canvas.style.height="auto";
            this.canvas.style.width=window.innerWidth+'px';
        }
    }
}