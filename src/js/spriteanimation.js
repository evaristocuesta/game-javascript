export default class SpriteAnimation {
    
    #spriteImage;
    #spriteWidth;
    #spriteHeight;
    #widthFactor;
    #heightFactor;
    #spriteWidthFactor;
    #spriteHeightFactor;
    #spriteState;
    #x = 0;
    #y = 0;
    #speedX = 0;
    #speedY = 0;
    #framePosX = 0;
    #framePosY = 0;
    #frameRate = 1;
    #flip = false;
    #spriteAnimations = [];
    #spriteStates = [];
    #position = 0;
    #time = 0;
    #period = 0;

    constructor(x, y, width, height, widthFactor, heightFactor, frameRate, src, states) {
        this.#x = x;
        this.#y = y;
        this.setFrameRate(frameRate);
        this.#spriteWidth = width;
        this.#spriteHeight = height;
        this.#widthFactor = widthFactor;
        this.#heightFactor = heightFactor;
        this.#spriteWidthFactor = this.#widthFactor * this.#spriteWidth;
        this.#spriteHeightFactor = this.#heightFactor * this.#spriteHeight;
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
        this.#time += deltaTime;
        if (this.#time > this.#period) {
            this.#position ++;
            this.#position = this.#position % this.#spriteAnimations[this.#spriteState].loc.length;
            this.#framePosX = this.#spriteWidth * this.#position;
            this.#framePosY = this.#spriteAnimations[this.#spriteState].loc[this.#position].y;
            this.#time = 0;
        }
        this.#x += deltaTime * this.#speedX;
        this.#y += deltaTime * this.#speedY;
    }

    draw(ctx) {
        ctx.save();
        var posX = 0;
        if (this.#flip) {
            ctx.scale(-1, 1);
            posX = -this.#x - this.#spriteWidthFactor;
        }
        else {
            ctx.scale(1, 1);
            posX = this.#x;
        }
        ctx.drawImage(this.#spriteImage, this.#framePosX, this.#framePosY, 
            this.#spriteWidth, this.#spriteHeight, 
            posX, this.#y, 
            this.#spriteWidthFactor, this.#spriteHeightFactor);
        ctx.restore();
    }

    setSpeedX(speedX) {
        this.#speedX = speedX;
    }

    setSpeedY(speedY) {
        this.#speedY= speedY;
    }

    setFlip(flip) {
        this.#flip = flip;
    }

    setState(state) {
        this.#spriteState = state;
    }

    setFrameRate(rate) {
        this.#frameRate = rate;
        this.#period = 1000 / rate;
    }
}