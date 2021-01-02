class Cloud {
	constructor() {
		this.xPos = canvas.width;
		this.yPos = 0;
		this.dx = -0.2;
		this.img = new Image();
		this.img.src = './assets/cloud.png';
	}
	
	updatePos() {
		if (this.xPos > -70) {
			this.xPos += this.dx;
		}
		else {
			this.xPos = canvas.width;
		}
	}
	
	show() {
		ctx.beginPath();
		ctx.drawImage(this.img, this.xPos, this.yPos, 95, 50);
		ctx.closePath();
	}
}