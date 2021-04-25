import Game from './game.js';
import Dog from './dog.js';

export default class Animation extends Game {
   
    #dog;

    constructor(canvas, ctx, width, height) {
        super(canvas, ctx, width, height);
        this.#dog = new Dog(0, 0);
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

    update(deltaTime)
    {
        super.update(deltaTime);
        this.#dog.update(deltaTime);
    }

    draw() {
        super.draw();
        this.#dog.draw(this.ctx);
    }
}