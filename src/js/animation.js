import Dog from './dog.js';

export default class Animation {
    #canvas;
    #ctx;
    #lastTime = 0;
    #deltaTime = 0;
    #CANVAS_WIDTH;
    #CANVAS_HEIGHT;
    
    #dog;

    constructor(canvas, ctx) {
        this.#canvas = canvas;
        this.#CANVAS_WIDTH = this.#canvas.width = 600;
        this.#CANVAS_HEIGHT = this.#canvas.height = 600;
        this.#ctx = ctx;
        this.#dog = new Dog(0, 0);
        this.#init();
    }

    setAnimation(animation) {
        switch (animation) {
            case 'idle':
                this.#dog.idle();
                break;
            case 'jump':
                this.#dog.jump();
                break;
            case 'fall':
                this.#dog.fall();
                break;
            case 'run':
                this.#dog.run();
                break;
            case 'dizzy':
                this.#dog.dizzy();
                break;
            case 'sit':
                this.#dog.sit();
                break;
            case 'roll':
                this.#dog.roll();
                break;
            case 'bite':
                this.#dog.bite();
                break;
            case 'ko':
                this.#dog.ko();
                break;
            case 'getHit':
                this.#dog.getHit();
                break;                
            default:
                this.#dog.idle();
                break;
        }
    }

    #init() {
        requestAnimationFrame(this.#loop.bind(this));
    }

    #update(deltaTime)
    {
        this.#dog.update(deltaTime);
    }

    #draw() {
        this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
        this.#dog.draw(this.#ctx);
    }

    #loop(timeStamp) {
        this.#deltaTime = timeStamp - this.#lastTime;
        this.#lastTime = timeStamp;

        this.#update(this.#deltaTime);

        this.#draw();

        requestAnimationFrame(this.#loop.bind(this))
    }
}