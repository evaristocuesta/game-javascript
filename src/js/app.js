import Animation from './animation.js';

const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e) {
    anim.setAnimation(e.target.value);
})

window.onload = initialize;

let anim;

function initialize() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    anim = new Animation(canvas, context);
}