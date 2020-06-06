class Poop {
	constructor(x, y, dy, type) {
		this.xPos = x;
		this.yPos = y;
		if (type == 0) {
			this.width = 50;
			this.height = 30;
		}
		else {
			this.width = 30;
			this.height = 20;
		}
		this.dx = -2;
		this.dy = dy;
		this.img = new Image();
		this.img.src = "./assets/poop1T.png";
	}
	
	getX() {
		return this.xPos;
	}
	
	getY() {
		return this.yPos;
	}
	
	getWidth() {
		return this.width;
	}
	
	getHeight() {
		return this.height;
	}
	
	updatePos() {
		this.dy += .75;
		if (this.dy >=5) {
			this.dy = 5;
		}
		
		this.yPos += this.dy;
		if (this.yPos >= 390) {
			this.yPos = 390;
			this.dx = -4;
		}
		else {
			this.yPos += this.dy;
			this.dx = -2;
		}
		this.xPos += this.dx;
		
	}
	
	show() {
		ctx.beginPath();
		ctx.drawImage(this.img, this.xPos, this.yPos, this.width, this.height);
		ctx.closePath();
	}
}