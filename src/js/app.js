import Animation from './animation.js';

let anim;

window.onload = initialize;

function initialize() {
    const canvas = document.getElementById('canvas');
    anim = new Animation(canvas, 1920, 1080);
}