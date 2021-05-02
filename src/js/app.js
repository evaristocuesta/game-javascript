import Animation from './animation.js';

let anim;

const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e) {
    anim.setAnimation(e.target.value);
});

window.onload = initialize;

function initialize() {
    const canvas = document.getElementById('canvas');
    anim = new Animation(canvas, 1920, 1080);
}