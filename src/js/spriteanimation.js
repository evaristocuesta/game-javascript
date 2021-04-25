export default class SpriteAnimation {
    
    #spriteImage;
    #spriteWidth;
    #spriteHeight;
    spriteState;

    #dogFrame = 0;
    #staggerFrames = 5;
    #spriteAnimations = [];
    #spriteStates = [];

    constructor(x, y, width, height, src, states) {
        this.x = x;
        this.y = y;
        this.#spriteWidth = width;
        this.#spriteHeight = height;
        this.#spriteStates = states;

        this.#spriteImage = new Image();
        this.#spriteImage.src = src;

        this.#spriteStates.forEach((state, index) => {
            let frames = {
                loc: []
            };
            for (let j = 0; j < state.frames; j++) {
                let posX = j * this.#spriteWidth;
                let posY = index * this.#spriteHeight;
                frames.loc.push({x: posX, y: posY});
            }
            this.#spriteAnimations[state.name] = frames;
        });
    }

    update(deltaTime) {
    }

    draw(ctx) {
        let position = Math.floor(this.#dogFrame / this.#staggerFrames) % this.#spriteAnimations[this.spriteState].loc.length;
        let frameX = this.#spriteWidth * position;
        let frameY = this.#spriteAnimations[this.spriteState].loc[position].y;
        ctx.drawImage(this.#spriteImage, frameX, frameY, 
            this.#spriteWidth, this.#spriteHeight, 
            0, 0, 
            this.#spriteWidth, this.#spriteHeight);
        this.#dogFrame++;
    }
}