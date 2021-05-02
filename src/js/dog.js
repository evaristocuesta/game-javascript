import SpriteAnimation from './spriteanimation.js';

export default class Dog extends SpriteAnimation {

    constructor (x, y) {
        super(x, y, 575, 523, 0.25, 0.25, 24, 'images/shadow_dog.png', Dog.dogStates);
        super.spriteState = 'idle';
    }

    moveLeft() {
        this.run()
        super.setFlip(true);
        this.setSpeedX(-0.4);
    }

    moveRight() {
        this.run();
        super.setFlip(false);
        this.setSpeedX(0.4);
    }

    idle() {
        super.setState('idle');
        this.setSpeedX(0);
    }

    jump() {
        super.setState('jump');
        this.setSpeedY(-0.4);
    }

    fall() {
        super.setState('fall');
    }

    run() {
        super.setState('run');
    }

    dizzy() {
        super.setState('dizzy');
    }

    sit() {
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
            name: "idle",
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
}