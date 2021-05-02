export default class Parallax {

	#images = [];
    #speed;

	loadImage(src, scrollFactor, y) {
		let image = {
			img: new Image(),
			scrollFactor: scrollFactor,
			x: 0,
			y: y,
			repetitions: 0
		};
		image.img.src = src;
        this.#images.push(image);
        image.img.onload = () => {
			image.repetitions = Math.ceil(canvas.width / image.img.width) + 1;
		}
	}

	update(deltaTime) {
		if (this.#speed != 0) {
			this.#images.forEach(img => {
				img.x += deltaTime * this.#speed * img.scrollFactor;
				img.x = img.x % img.img.width;
			});
		}
	}

	draw(ctx) {
		this.#images.forEach(img => {
			for (var i = -1; i < img.repetitions; i++) {
				ctx.drawImage(img.img, (i * img.img.width) - img.x, img.y);
			}
		});
	}

	setSpeed(speed) {
		this.#speed = speed;
	}
}