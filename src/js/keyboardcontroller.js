import KEY_CODES from './keycodes.js';

export default class KeyboardController {

    keys = {};

    constructor() {
        window.addEventListener("keydown", this.keyDown.bind(this));
        window.addEventListener("keyup", this.keyUp.bind(this));
    }

    keyUp(event) {
        this.handleKeyEvent(event.keyCode, false);
    }

    keyDown(event) {
        this.handleKeyEvent(event.keyCode, true);
    }

    handleKeyEvent(keyCode, isPressed) {
        for (var key in this.keys) {
            if (this.keys[key].keyCode == keyCode) {
                this.keys[key].isPressed = isPressed;
                break;
            }
        }
    }

    addKey(key) {
        this.keys[key] = {keyCode: KEY_CODES[key], isPressed: false};
    }
}