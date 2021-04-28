import SpriteAnimation from './spriteanimation.js';

export default class Dog extends SpriteAnimation {

    constructor (x, y) {
        super(x, y, 575, 523, 4, 4, 2, 'images/shadow_dog.png', Dog.dogStates);
        super.spriteState = 'idle';
    }

    idle() {
        super.spriteState = 'idle';
    }

    jump() {
        super.spriteState = 'jump';
    }

    fall() {
        super.spriteState = 'fall';
    }

    run() {
        super.spriteState = 'run';
    }

    dizzy() {
        super.spriteState = 'dizzy';
    }

    sit() {
        super.spriteState = 'sit';
    }

    roll() {
        super.spriteState = 'roll';
    }

    bite() {
        super.spriteState = 'bite';
    }

    ko() {
        super.spriteState = 'ko';
    }

    getHit() {
        super.spriteState = 'getHit';
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