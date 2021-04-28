export default class SpriteAnimation {
    
    #spriteImage;
    #spriteWidth;
    #spriteHeight;
    #spriteWidthFactor;
    #spriteHeightFactor;
    spriteState;

    #frame = 0;
    #framePosX = 0;
    #framePosY = 0;
    staggerFrames = 1;
    #spriteAnimations = [];
    #spriteStates = [];

    constructor(x, y, width, height, widthFactor, heightFactor, staggerFrames, src, states) {
        this.x = x;
        this.y = y;
        this.staggerFrames = staggerFrames;
        this.#spriteWidth = width;
        this.#spriteHeight = height;
        this.#spriteWidthFactor = widthFactor;
        this.#spriteHeightFactor = heightFactor;
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
        let position = Math.floor(this.#frame / this.staggerFrames) % this.#spriteAnimations[this.spriteState].loc.length;
        this.#framePosX = this.#spriteWidth * position;
        this.#framePosY = this.#spriteAnimations[this.spriteState].loc[position].y;
        this.#frame++;
    }

    draw(ctx) {
        ctx.drawImage(this.#spriteImage, this.#framePosX, this.#framePosY, 
            this.#spriteWidth, this.#spriteHeight, 
            this.x, this.y, 
            this.#spriteWidth / this.#spriteWidthFactor, this.#spriteHeight / this.#spriteHeightFactor);
    }
}