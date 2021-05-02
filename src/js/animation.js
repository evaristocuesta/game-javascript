import Game from './game.js';
import Dog from './dog.js';
import Parallax from './parallax.js';
import KeyboardController from './keyboardcontroller.js';
import FpsMeterDefault from './fpsMeterDefault.js';

export default class Animation extends Game {
   
    #dog;
    #parallaxBkg;
    #fpsMeter;

    #keyboardController;

    constructor(canvas, width, height) {
        super(canvas, width, height);
        this.#dog = new Dog(900, 710);
        this.#dog.run();
        this.#parallaxBkg = new Parallax();
        this.#parallaxBkg.loadImage('./images/layer01.png', 0, 0);
        this.#parallaxBkg.loadImage('./images/layer02.png', 0, 0);
        this.#parallaxBkg.loadImage('./images/layer03.png', 0.05, 0);
        this.#parallaxBkg.loadImage('./images/layer04.png', 0.1, 0);
        this.#parallaxBkg.loadImage('./images/layer05.png', 0.2, 0);
        this.#parallaxBkg.loadImage('./images/layer06.png', 0.3, 0);
        this.#parallaxBkg.loadImage('./images/layer07.png', 0.4, 0);
        this.#parallaxBkg.loadImage('./images/layer08.png', 1, 0);

        this.#fpsMeter = new FpsMeterDefault();

        this.#keyboardController = new KeyboardController();
        this.#keyboardController.addKey('RIGHT');
        this.#keyboardController.addKey('LEFT');
        this.#keyboardController.addKey('SPACE');
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
        this.#fpsMeter.update(deltaTime);
        if (this.#keyboardController.keys.RIGHT.isPressed) {
            this.#dog.moveRight();
            this.#parallaxBkg.setSpeed(0.4);
        }
        else if (this.#keyboardController.keys.LEFT.isPressed) {
            this.#dog.moveLeft();
            this.#parallaxBkg.setSpeed(-0.4);
        }
        else {
            this.#parallaxBkg.speed = 0;
            this.#dog.idle();
            this.#parallaxBkg.setSpeed(0);
        }
        if (this.#keyboardController.keys.SPACE.isPressed) {
            //this.#dog.jump();
        }
        
        this.#parallaxBkg.update(deltaTime);
        this.#dog.update(deltaTime);
    }

    draw() {
        super.draw();
        this.#parallaxBkg.draw(this.ctx);
        this.#dog.draw(this.ctx);
        this.#fpsMeter.draw(this.ctx);
    }
}