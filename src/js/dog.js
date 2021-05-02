import SpriteAnimation from './spriteanimation.js';

export default class Dog extends SpriteAnimation {

    #timeIdle = 0;

    constructor (x, y) {
        super(x, y, 575, 523, 0.25, 0.25, 24, 'images/shadow_dog.png', Dog.dogStates);
        this.idle();
    }

    moveLeft() {
        this.#timeIdle = 0;
        this.run()
        super.setFlip(true);
        this.setSpeedX(-0.4);
    }

    moveRight() {
        this.#timeIdle = 0;
        this.run();
        super.setFlip(false);
        this.setSpeedX(0.4);
    }

    idle() {
        super.setFrameRate(24);
        if (this.#timeIdle <= 10000) {
            this.standing();
        }
        else if (this.#timeIdle <= 20000) {
            this.sit();
        }
        else if (this.#timeIdle > 20000) {
            this.#timeIdle = 0;
        }
    }

    jump() {
        super.setState('jump');
        this.setSpeedY(-0.4);
    }

    fall() {
        super.setState('fall');
    }

    run() {
        super.setFrameRate(24);
        super.setState('run');
    }

    dizzy() {
        super.setState('dizzy');
    }

    standing() {
        super.setFrameRate(24);
        super.setState('standing');
    }

    sit() {
        super.setFrameRate(12);
        super.setState('sit');
    }

    roll() {
        super.setState('roll');
    }

    bite() {
        super.setState('bite');
    }

    ko() {
        super.setState('ko');
    }

    getHit() {
        super.setState('getHit');
    }

    static dogStates = [
        {
            name: "standing",
            frames: 6
        },
        {
            name: "jump",
            frames: 6
        },
        {
            name: "fall",
            frames: 6
        },
        {
            name: "run",
            frames: 8
        },
        {
            name: "dizzy",
            frames: 10
        },
        {
            name: "sit",
            frames: 4
        },
        {
            name: "roll",
            frames: 6
        },
        {
            name: "bite",
            frames: 6
        },
        {
            name: "ko",
            frames: 11
        },
        {
            name: "getHit",
            frames: 3
        },
    ];

    update(deltaTime) {
        this.#timeIdle += deltaTime;
        super.update(deltaTime);
    }
}