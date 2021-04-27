export default class Parallax {

	#time = 0;
	#images = [];
    speed;

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
		this.#time += deltaTime;
		this.#images.forEach(img => {
			img.x = this.#time * this.speed * img.scrollFactor % img.img.width;
		});
	}

	draw(ctx) {
		this.#images.forEach(img => {
			ctx.save();
			ctx.translate(-img.x, img.y);
			for (var i = 0; i < img.repetitions; i++) {
				ctx.drawImage(img.img, i * img.img.width, 0);
			}
			ctx.restore();
		});
	}
}