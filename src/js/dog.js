import SpriteAnimation from './spriteanimation.js';

export default class Dog extends SpriteAnimation {

    constructor (x, y) {
        super(x, y, 575, 523, 'images/shadow_dog.png', Dog.dogStates);
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
            frames: 7
        },
        {
            name: "jump",
            frames: 7
        },
        {
            name: "fall",
            frames: 7
        },
        {
            name: "run",
            frames: 9
        },
        {
            name: "dizzy",
            frames: 11
        },
        {
            name: "sit",
            frames: 5
        },
        {
            name: "roll",
            frames: 7
        },
        {
            name: "bite",
            frames: 7
        },
        {
            name: "ko",
            frames: 12
        },
        {
            name: "getHit",
            frames: 4
        },
    ];
}